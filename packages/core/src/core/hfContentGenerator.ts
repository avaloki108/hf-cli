import {
  type GenerateContentParameters,
  type GenerateContentResponse,
  type CountTokensParameters,
  type CountTokensResponse,
  type EmbedContentParameters,
  type EmbedContentResponse,
  type Content,
  type Part,
  FinishReason,
} from '@google/genai';
import OpenAI from 'openai';
import type { ContentGenerator } from './contentGenerator.js';

export class HfContentGenerator implements ContentGenerator {
  private client: OpenAI;
  private model: string;

  constructor(token: string, model: string) {
    this.client = new OpenAI({
      baseURL: 'https://router.huggingface.co/v1',
      apiKey: token,
    });
    this.model = model;
  }

  private contentToMessage(content: Content): OpenAI.Chat.Completions.ChatCompletionMessageParam {
    const role = content.role === 'model' ? 'assistant' : 'user';
    const text = content.parts?.map((part: Part) => part.text || '').join('') || '';
    return {
      role,
      content: text,
    } as OpenAI.Chat.Completions.ChatCompletionMessageParam;
  }

  private contentsToMessages(contents: Content[]): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
    return contents.map((c) => this.contentToMessage(c));
  }

  async generateContent(
    request: GenerateContentParameters,
    _userPromptId: string,
  ): Promise<GenerateContentResponse> {
    const messages = this.contentsToMessages(request.contents as Content[]);

    const response = await this.client.chat.completions.create({
      model: this.model,
      messages,
      max_tokens: 1024,
    });

    const choice = response.choices[0];
    const content = choice.message.content || '';

    return {
      candidates: [
        {
          content: {
            parts: [{ text: content }],
            role: 'model',
          },
          finishReason: FinishReason.STOP,
        },
      ],
    } as unknown as GenerateContentResponse;
  }

  async generateContentStream(
    request: GenerateContentParameters,
    _userPromptId: string,
  ): Promise<AsyncGenerator<GenerateContentResponse>> {
    const messages = this.contentsToMessages(request.contents as Content[]);
    const client = this.client;
    const model = this.model;

    async function* streamGenerator(): AsyncGenerator<GenerateContentResponse> {
      const stream = await client.chat.completions.create({
        model,
        messages,
        max_tokens: 1024,
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          yield {
            candidates: [
              {
                content: {
                  parts: [{ text: content }],
                  role: 'model',
                },
              },
            ],
          } as unknown as GenerateContentResponse;
        }
      }
    }

    return streamGenerator();
  }

  async countTokens(
    request: CountTokensParameters,
  ): Promise<CountTokensResponse> {
    // Simple estimation: 4 chars per token
    const messages = this.contentsToMessages(request.contents as Content[]);
    const text = messages.map(m => m.content).join('');
    return {
      totalTokens: Math.ceil(text.length / 4),
    };
  }

  async embedContent(
    _request: EmbedContentParameters,
  ): Promise<EmbedContentResponse> {
    throw new Error('embedContent not implemented for HF yet');
  }
}
