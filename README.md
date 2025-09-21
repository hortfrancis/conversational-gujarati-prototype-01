# Conversational Gujarati - prototype 01

Prototype for a language learning app that helps users learn to speak Gujarati.

The project uses OpenAI's Agents SDK & Realtime API, with React, Vite, Hono, and Cloudflare Workers.

This project is based on this previous repo: [hortfrancis/openai-realtime-agent-deployment-spike-01](https://github.com/hortfrancis/openai-realtime-agent-deployment-spike-01)

## Installation

### Clone the repo

```bash
git clone https://github.com/hortfrancis/conversational-gujarati-prototype-01.git
```

.. or, using the [GitHub CLI](https://cli.github.com/):

```bash
gh repo clone hortfrancis/conversational-gujarati-prototype-01
```

### Navigate to the project directory

```bash
cd conversational-gujarati-prototype-01
```

### Install dependencies

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

## Deployment

You will need a Cloudflare account. If you don't have one, you can sign up at [Cloudflare](https://dash.cloudflare.com/sign-up/).

The project is set up to use Cloudflare Workers for deployment. The frontend in the client browser calls the backend Worker to fetch an ephemeral (temporary) API key from OpenAI.

### Set up your Wrangler CLI

This caches your Cloudflare credentials on your local machine.

```bash
npx wrangler login
```

### Build the React app

This creates a `dist/` directory and bundles the React app for production here.

```bash
npm run build
```

### Deploy to Cloudflare Workers

This runs `wrangler deploy` using npm.

```bash
npm run deploy
```

This should create a new Workers deployment, available at the default URL of `https://conversational-gujarati-prototype-01.<username>.workers.dev`.

The URL will be printed in the terminal after deployment.

Check Cloudflare's documentation for more info on [deploying Workers](https://developers.cloudflare.com/workers/).

## Additional Resources

- [OpenAI Voice Agents documentation](https://platform.openai.com/docs/guides/voice-agents?voice-agent-architecture=speech-to-speech)
- [OpenAI Realtime API documentation](https://platform.openai.com/docs/guides/realtime)
- [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
- [Vite documentation](https://vitejs.dev/guide/)
- [React documentation](https://reactjs.org/)
- [Hono documentation](https://hono.dev/)
