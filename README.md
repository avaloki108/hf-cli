# HuggingFace CLI

[![HuggingFace CLI CI](https://github.com/huggingface/hf-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/huggingface/hf-cli/actions/workflows/ci.yml)
[![HuggingFace CLI E2E](https://github.com/huggingface/hf-cli/actions/workflows/e2e.yml/badge.svg)](https://github.com/huggingface/hf-cli/actions/workflows/e2e.yml)
[![Version](https://img.shields.io/npm/v/@huggingface/hf-cli)](https://www.npmjs.com/package/@huggingface/hf-cli)
[![License](https://img.shields.io/github/license/huggingface/hf-cli)](https://github.com/huggingface/hf-cli/blob/main/LICENSE)
[![View Code Wiki](https://www.gstatic.com/_/boq-sdlc-agents-ui/_/r/YUi5dj2UWvE.svg)](https://codewiki.google/github.com/huggingface/hf-cli)

![HuggingFace CLI Screenshot](./docs/assets/hf-screenshot.png)

HuggingFace CLI is an open-source AI agent that brings the power of huggingface.co/chat
directly into your terminal. It provides lightweight access to HuggingFace, giving
you the most direct path from your prompt to our model.

Learn all about HuggingFace CLI in our [documentation](https://hfcli.com/docs/).

## 🚀 Why HuggingFace CLI?

- **🔧 Built-in tools**: Google Search grounding, file operations, shell
  commands, web fetching.
- **🔌 Extensible**: MCP (Model Context Protocol) support for custom
  integrations.
- **💻 Terminal-first**: Designed for developers who live in the command line.
- **🛡️ Open source**: Apache 2.0 licensed.

## 📦 Installation

### Pre-requisites before installation

- Node.js version 20 or higher
- macOS, Linux, or Windows

### Quick Install

#### Run instantly with npx

```bash
# Using npx (no installation required)
npx https://github.com/avaloki108/hf-cli
```

#### Install globally with npm

```bash
npm install -g @avaloki108/hf-cli
```

#### Install globally with Homebrew (macOS/Linux)

```bash
brew install hf-cli
```

## Release Cadence and Tags

See [Releases](./docs/releases.md) for more details.

### Preview

New preview releases will be published each week at UTC 2359 on Tuesdays. These
releases will not have been fully vetted and may contain regressions or other
outstanding issues. Please help us test and install with `preview` tag.

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

**✨ Best for:** Individual developers as well as anyone who has a HuggingFace Token

**Benefits:**

- ** **
- **Automatic updates** to latest models

#### Start HuggingFace CLI, then choose _Login with HuggingFace_ and follow the browser authentication flow when prompted

```bash
hf
```


### Option 2: HuggingFace API Key / Token

**✨ Best for:** Developers who need .......

**Benefits:**

- ****: 
- **Model selection**: Choose specific models
- ****: 



### Option 3: 

**✨ Best for:** 

**Benefits:**

- ****: 
- ****: 
- ****: 



## 🚀 Getting Started

### Basic Usage

#### Start in current directory

```bash
hf
```

#### Include multiple directories

```bash
hf --include-directories ../lib,../docs
```

#### Use specific model

```bash
hf -m deepseek-ai/DeepSeek-V3.2

```

#### Non-interactive mode for scripts

Get a simple text response:

```bash
hf -p "Explain the architecture of this codebase"
```

For more advanced scripting, including how to parse JSON and handle errors, use
the `--output-format json` flag to get structured output:

```bash
hf -p "Explain the architecture of this codebase" --output-format json
```

For real-time event streaming (useful for monitoring long-running operations),
use `--output-format stream-json` to get newline-delimited JSON events:

```bash
hf -p "Run tests and deploy" --output-format stream-json
```

### Quick Examples

#### Start a new project

```bash
cd new-project/
hf
> Write me a Discord bot that answers questions using a FAQ.md file I will provide
```

#### Analyze existing code

```bash
git clone https://github.com/avaloki108/hf-cli
cd hf-cli
hf
> Give me a summary of all of the changes that went in yesterday
```

## 📚 Documentation

### Getting Started

- [**Quickstart Guide**](./docs/get-started/index.md) - Get up and running
  quickly.
- [**Authentication Setup**](./docs/get-started/authentication.md) - Detailed
  auth configuration.
- [**Configuration Guide**](./docs/get-started/configuration.md) - Settings and
  customization.
- [**Keyboard Shortcuts**](./docs/cli/keyboard-shortcuts.md) - Productivity
  tips.

### Core Features

- [**Commands Reference**](./docs/cli/commands.md) - All slash commands
  (`/help`, `/chat`, etc).
- [**Custom Commands**](./docs/cli/custom-commands.md) - Create your own
  reusable commands.
- [**Context Files (HF.md)**](./docs/cli/gemini-md.md) - Provide persistent
  context to HuggingFace CLI.
- [**Checkpointing**](./docs/cli/checkpointing.md) - Save and resume
  conversations.
- [**Token Caching**](./docs/cli/token-caching.md) - Optimize token usage.

### Tools & Extensions

- [**Built-in Tools Overview**](./docs/tools/index.md)
  - [File System Operations](./docs/tools/file-system.md)
  - [Shell Commands](./docs/tools/shell.md)
  - [Web Fetch & Search](./docs/tools/web-fetch.md)
- [**MCP Server Integration**](./docs/tools/mcp-server.md) - Extend with custom
  tools.
- [**Custom Extensions**](./docs/extensions/index.md) - Build and share your own
  commands.

### Advanced Topics

- [**Headless Mode (Scripting)**](./docs/cli/headless.md) - Use HuggingFace CLI
  in automated workflows.
- [**Architecture Overview**](./docs/architecture.md) - How HuggingFace CLI
  works.
- [**IDE Integration**](./docs/ide-integration/index.md) - VS Code companion.
- [**Sandboxing & Security**](./docs/cli/sandbox.md) - Safe execution
  environments.
- [**Trusted Folders**](./docs/cli/trusted-folders.md) - Control execution
  policies by folder.
- [**Enterprise Guide**](./docs/cli/enterprise.md) - Deploy and manage in a
  corporate environment.
- [**Telemetry & Monitoring**](./docs/cli/telemetry.md) - Usage tracking.
- [**Tools API Development**](./docs/core/tools-api.md) - Create custom tools.
- [**Local development**](./docs/local-development.md) - Local development
  tooling.

### Troubleshooting & Support

- [**Troubleshooting Guide**](./docs/troubleshooting.md) - Common issues and
  solutions.
- [**FAQ**](./docs/faq.md) - Frequently asked questions.
- Use `/bug` command to report issues directly from the CLI.

### Using MCP Servers

Configure MCP servers in `~/.hf-cli/settings.json` to extend HuggingFace CLI
with custom tools:

```text
> @github List my open pull requests
> @slack Send a summary of today's commits to #dev channel
> @database Run a query to find inactive users
```

See the [MCP Server Integration guide](./docs/tools/mcp-server.md) for setup
instructions.

## 🤝 Contributing

We welcome contributions! HuggingFace CLI is fully open source (Apache 2.0), and
we encourage the community to:

- Report bugs and suggest features.
- Improve documentation.
- Submit code improvements.
- Share your MCP servers and extensions.

See our [Contributing Guide](./CONTRIBUTING.md) for development setup, coding
standards, and how to submit pull requests.

Check our [Official Roadmap](https://github.com/orgs/google-gemini/projects/11)
for planned features and priorities.

## 📖 Resources

- **[Official Roadmap](./ROADMAP.md)** - See what's coming next.
- **[Changelog](./docs/changelogs/index.md)** - See recent notable updates.
- **[NPM Package](https://www.npmjs.com/package/@huggingface/hf-cli)** - Package
  registry.
- **[GitHub Issues](https://github.com/huggingface/hf-cli/issues)** - Report
  bugs or request features.
- **[Security Advisories](https://github.com/huggingface/hf-cli/security/advisories)** -
  Security updates.

### Uninstall

See the [Uninstall Guide](docs/cli/uninstall.md) for removal instructions.

## 📄 Legal

- **License**: [Apache License 2.0](LICENSE)
- **Terms of Service**: [Terms & Privacy](./docs/tos-privacy.md)
- **Security**: [Security Policy](SECURITY.md)


