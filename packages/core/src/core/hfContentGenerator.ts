/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

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
import { HfInference } from '@huggingface/inference';
import type { ContentGenerator } from './contentGenerator.js';

export class HfContentGenerator implements ContentGenerator {
  private hf: HfInference;
  private model: string;

  constructor(token: string, model: string) {
    this.hf = new HfInference(token);
    this.model = model;
  }

  private contentToString(content: Content): string {
    if (!content.parts) return '';
    return content.parts.map((part: Part) => part.text || '').join('');
  }

  private contentsToString(contents: Content[]): string {
    return contents.map((c) => this.contentToString(c)).join('\n');
  }

  async generateContent(
    request: GenerateContentParameters,
    _userPromptId: string,
  ): Promise<GenerateContentResponse> {
    const prompt = this.contentsToString(request.contents as Content[]);

    const response = await this.hf.textGeneration({
      model: this.model,
      inputs: prompt,
      parameters: {
        max_new_tokens: 1024,
        return_full_text: false,
      },
    });

    return {
      candidates: [
        {
          content: {
            parts: [{ text: response.generated_text }],
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
    const prompt = this.contentsToString(request.contents as Content[]);
    const hf = this.hf;
    const model = this.model;

    async function* streamGenerator(): AsyncGenerator<GenerateContentResponse> {
      const stream = hf.textGenerationStream({
        model,
        inputs: prompt,
        parameters: {
          max_new_tokens: 1024,
          return_full_text: false,
        },
      });

      for await (const chunk of stream) {
        if (chunk.token.text) {
          yield {
            candidates: [
              {
                content: {
                  parts: [{ text: chunk.token.text }],
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
    const text = this.contentsToString(request.contents as Content[]);
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
