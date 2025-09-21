import { tool } from '@openai/agents/realtime';
import { z } from 'zod';

const createDisplayOutputTool = (
  setAgentOutput: (output: { englishText: string; phoneticGujaratiText: string; gujaratiText: string }) => void
) => {
  return tool({
    name: 'display_output',
    description: "Display the agent output including English text, phonetic Gujarati text, and Gujarati text.",
    parameters: z.object({
      englishText: z.string().describe("The text in English. For example, 'Hello, how are you?'"),
      phoneticGujaratiText: z.string().describe("The phonetic representation of the Gujarati text, in Gujarati but using English characters. For example, 'Kem cho?'"),
      gujaratiText: z.string().describe("The text in Gujarati -- Gujarati characters. For example, 'કેમ છો?'"),
    }),
    async execute({ englishText, phoneticGujaratiText, gujaratiText }) {
      setAgentOutput({ englishText, phoneticGujaratiText, gujaratiText });
      return `Displayed output: English: ${englishText}, Phonetic Gujarati: ${phoneticGujaratiText}, Gujarati: ${gujaratiText}`;
    },
  });
};

export default createDisplayOutputTool;
