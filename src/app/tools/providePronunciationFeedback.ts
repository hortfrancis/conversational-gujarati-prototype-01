import { tool } from '@openai/agents/realtime';
import { z } from 'zod';

const createPronunciationFeedbackTool = (
  setFeedback: (feedback: string) => void
) => {
  return tool({
    name: 'provide_pronunciation_feedback',
    description: "Provide feedback on the user's pronunciation of Gujarati phrases.",
    parameters: z.object({
      feedback: z.string().describe("The pronunciation feedback text, with <improve> tags around words or phrases that need improvement. For example, 'Mane <improve>Gujarātī</improve> bhāṣā śīkhvī <improve>game</improve> chhe.'"),
    }),
    async execute({ feedback }) {
      setFeedback(feedback);
      return `Provided pronunciation feedback: ${feedback}`;
    },
  });
};

export default createPronunciationFeedbackTool;
