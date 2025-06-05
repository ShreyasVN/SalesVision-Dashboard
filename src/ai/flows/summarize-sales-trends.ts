// Summarize sales trends using GenAI.

'use server';

/**
 * @fileOverview Summarizes key trends in sales data.
 *
 * - summarizeSalesTrends - A function that generates a summary of key trends in sales data.
 * - SummarizeSalesTrendsInput - The input type for the summarizeSalesTrends function.
 * - SummarizeSalesTrendsOutput - The return type for the summarizeSalesTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSalesTrendsInputSchema = z.object({
  salesDataSummary: z
    .string()
    .describe(
      'A summary of the sales data, including key metrics such as revenue, churn rate, and average order value.'
    ),
});
export type SummarizeSalesTrendsInput = z.infer<typeof SummarizeSalesTrendsInputSchema>;

const SummarizeSalesTrendsOutputSchema = z.object({
  trendSummary: z
    .string()
    .describe(
      'A summary of the key trends in the sales data, highlighting significant increases, decreases, or patterns.'
    ),
});
export type SummarizeSalesTrendsOutput = z.infer<typeof SummarizeSalesTrendsOutputSchema>;

export async function summarizeSalesTrends(
  input: SummarizeSalesTrendsInput
): Promise<SummarizeSalesTrendsOutput> {
  return summarizeSalesTrendsFlow(input);
}

const summarizeSalesTrendsPrompt = ai.definePrompt({
  name: 'summarizeSalesTrendsPrompt',
  input: {schema: SummarizeSalesTrendsInputSchema},
  output: {schema: SummarizeSalesTrendsOutputSchema},
  prompt: `You are a data analyst. Summarize the key trends in the following sales data summary, highlighting significant increases, decreases, or patterns. 

Sales Data Summary: {{{salesDataSummary}}}`,
});

const summarizeSalesTrendsFlow = ai.defineFlow(
  {
    name: 'summarizeSalesTrendsFlow',
    inputSchema: SummarizeSalesTrendsInputSchema,
    outputSchema: SummarizeSalesTrendsOutputSchema,
  },
  async input => {
    const {output} = await summarizeSalesTrendsPrompt(input);
    return output!;
  }
);
