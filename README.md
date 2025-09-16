# Conversational Gujarati - prototype 01

Prototype for a language learning app that helps users learn to speak Gujarati.

The project uses OpenAI's Agents SDK & Realtime API, with React, Vite, Hono, and Cloudflare Workers.

This project is based on this previous repo: [hortfrancis/openai-realtime-agent-deployment-spike-01](https://github.com/hortfrancis/openai-realtime-agent-deployment-spike-01)

## Installation

**Clone the repo:**

```bash
git clone https://github.com/hortfrancis/conversational-gujarati-prototype-01.git
```

.. or, using the [GitHub CLI](https://cli.github.com/):

```bash
gh repo clone hortfrancis/conversational-gujarati-prototype-01
```

**Navigate to the project directory:**

```bash
cd conversational-gujarati-prototype-01
```

**Install dependencies:**

```bash
npm install
```

## Configuration

Get your OpenAI API key from [OpenAI's platform](https://platform.openai.com/account/api-keys).

Create a `.dev.vars` file in the root directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key
```

## Running the project locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL provided in the terminal) to see the React frontend.

## Additional Resources

- [OpenAI Voice Agents documentation](https://platform.openai.com/docs/guides/voice-agents?voice-agent-architecture=speech-to-speech)
- [OpenAI Realtime API documentation](https://platform.openai.com/docs/guides/realtime)
- [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
- [Vite documentation](https://vitejs.dev/guide/)
- [React documentation](https://reactjs.org/)
- [Hono documentation](https://hono.dev/)
