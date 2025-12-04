# Hugging Face CLI

[![Hugging Face CLI CI](https://github.com/avaloki108/hf-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/avaloki108/hf-cli/actions/workflows/ci.yml)

Hugging Face CLI (`hf`) is an open-source AI agent that brings the power of Hugging Face's Inference API directly into your terminal. It allows you to interact with state-of-the-art open models like DeepSeek, Llama, and Qwen right from your command line.

## 🚀 Key Features

- **Access Top Open Models**: Use models like `deepseek-ai/DeepSeek-V3.2-Exp`, `meta-llama/Llama-3.1-8B-Instruct`, and more via the Hugging Face Router.
- **Terminal-First Experience**: Designed for developers who live in the command line.
- **Context-Aware**: Can read files and understand your project structure.
- **Extensible**: Support for custom tools and MCP (Model Context Protocol).

## 📦 Installation

### Prerequisites
- Node.js version 20 or higher

### Install globally with npm

```bash
npm install -g @huggingface/hf-cli
```

*(Note: Package name subject to change upon publication)*

## 🔐 Authentication

To use the Hugging Face CLI, you need a Hugging Face Access Token.

1.  **Get your token**: Go to [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) and create a new token (Read access is sufficient).
2.  **Set the environment variable**:
    You can set the `HF_TOKEN` environment variable in your shell or in a `.env` file in your project or home directory (`~/.hf-cli/.env`).

```bash
npm install -g @avaloki108/hf-cli@preview
```

### Stable

- New stable releases will be published each week at UTC 2000 on Tuesdays, this
  will be the full promotion of last week's `preview` release + any bug fixes
  and validations. Use `latest` tag.

```bash
npm install -g @avaloki108/hf-cli@latest
```

### Nightly

- New releases will be published each day at UTC 0000. This will be all changes
  from the main branch as represented at time of release. It should be assumed
  there are pending validations and issues. Use `nightly` tag.

```bash
npm install -g @avaloki108/hf-cli@nightly
```

## 📋 Key Features

### Code Understanding & Generation

- Query and edit large codebases
- Generate new apps from PDFs, images, or sketches using multimodal capabilities
- Debug issues and troubleshoot with natural language

### Automation & Integration

- Automate operational tasks like querying pull requests or handling complex
  rebases
- Use MCP servers to connect new capabilities
- Run non-interactively in scripts for workflow automation

### Advanced Capabilities

- Conversation checkpointing to save and resume complex sessions
- Custom context files (HF.md) to tailor behavior for your projects

### GitHub Integration

Integrate HuggingFace CLI directly into your GitHub workflows with
[**HuggingFace CLI GitHub Action**](https://github.com/google-github-actions/run-hf-cli):

- **Pull Request Reviews**: Automated code review with contextual feedback and
  suggestions
- **Issue Triage**: Automated labeling and prioritization of GitHub issues based
  on content analysis
- **On-demand Assistance**: Mention `@hf-cli` in issues and pull requests for
  help with debugging, explanations, or task delegation
- **Custom Workflows**: Build automated, scheduled and on-demand workflows
  tailored to your team's needs

## 🔐 Authentication Options

Choose the authentication method that best fits your needs:

### Option 1: Login with Google (OAuth login using your Google Account)

**✨ Best for:** Individual developers using Gemini models

**Benefits:**

- **Seamless authentication** through Google account
- **Automatic updates** to latest models

#### Start HuggingFace CLI, then choose _Login with Google_ and follow the browser authentication flow when prompted

```bash
hf
```

### Option 2: HuggingFace Token

**✨ Best for:** Developers who want to use HuggingFace models

**Benefits:**

- **Access to HuggingFace models**: Use models from
  https://huggingface.co/models
- **Model selection**: Choose specific models with the `-m` flag
- **Simple setup**: Just set your HF_TOKEN environment variable

#### Set your HuggingFace token as an environment variable

```bash
export HF_TOKEN="your_huggingface_token_here"
hf
```

Or provide it when prompted in the CLI after selecting "Use HuggingFace Token"
from the authentication menu.

You can get a HuggingFace token from
[https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

### Option 3: Gemini API Key

**✨ Best for:** Developers who want to use Gemini API directly

**Benefits:**

- **Direct API access**: Use Gemini API without OAuth
- **API key management**: Store API key securely in system keychain
- **Flexible deployment**: Works in CI/CD environments

#### Set your API key as an environment variable or provide it when prompted

```bash
export GEMINI_API_KEY="your_api_key_here"
hf
```

You can get an API key from
[https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### Option 4: Vertex AI

**✨ Best for:** Enterprise users with Google Cloud projects

**Benefits:**

- **Enterprise features**: Use Google Cloud's enterprise features
- **Billing integration**: Integrated with Google Cloud billing
- **Advanced security**: Leverage Google Cloud security features

#### Set your Google Cloud project and location

```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="us-central1"
hf
```

## 🚀 Getting Started

### Basic Usage

Start the interactive CLI:

```bash
hf
```

### One-Shot Queries

Ask a quick question without entering interactive mode:

```bash
# Use a specific HuggingFace model
hf -m Qwen/Qwen2.5-Coder-32B-Instruct

# Or use DeepSeek
hf -p "What is the capital of France?"```

#### Use HuggingFace models

```bash
# Set your HuggingFace token
export HF_TOKEN="your_token_here"

# Start the CLI and select "Use HuggingFace Token" from the auth menu
hf

# Or use a specific HuggingFace model directly
hf -m "meta-llama/Llama-3.3-70B-Instruct"
```

### Select a Model

Specify a model using the `-m` flag. The default model is `deepseek-ai/DeepSeek-V3.2-Exp`.

```bash
hf -m meta-llama/Llama-3.1-8B-Instruct
```

**Supported Models:**
- `deepseek-ai/DeepSeek-V3.2`
- `deepseek-ai/DeepSeek-V3.2-Exp` (Default)
- `moonshotai/Kimi-K2-Thinking`
- `meta-llama/Llama-3.1-8B-Instruct`
- `openai/gpt-oss-20b`
- `zai-org/GLM-4.6`
- `allenai/Olmo-3-32B-Think`
- `openai/gpt-oss-120b`
- `deepseek-ai/DeepSeek-R1`
- `MiniMaxAI/MiniMax-M2`

### Include Context

Give the CLI access to files in your current directory:

```bash
hf --include-directories ./src
```

## 📂 Configuration

Global configuration is stored in `~/.hf-cli`. You can place a `.env` file there to persist your `HF_TOKEN`.

## 🤝 Contributing

Contributions are welcome! Please submit pull requests to the [GitHub repository](https://github.com/avaloki108/hf-cli).

## 📄 Legal

- **License**: Apache 2.0

