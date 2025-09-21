import { tool } from '@openai/agents/realtime';
import { z } from 'zod';

const createRatePronunciationTool = (
  setRating: (rating: number) => void
) => {
  return tool({
    name: 'rate_pronunciation',
    description: "Rate the user's pronunciation on a scale from 1 to 3, where 1 is poor and 3 is excellent.",
    parameters: z.object({
      rating: z.number().min(1).max(3).describe("The pronunciation rating, an integer between 1 (poor) and 3 (excellent)."),
    }),
    async execute({ rating }) {
      setRating(rating);
      return `Set pronunciation rating to ${rating}`;
    },
  });
};

export default createRatePronunciationTool;
