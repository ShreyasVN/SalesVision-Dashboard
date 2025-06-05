// src/app/actions/summarizeSales.ts
"use server";

import { summarizeSalesTrends, type SummarizeSalesTrendsInput } from '@/ai/flows/summarize-sales-trends';
import { z } from 'zod';

const TrendSchema = z.object({
  salesDataSummary: z.string().min(10, { message: "Sales data summary must be at least 10 characters." })
                           .max(5000, { message: "Sales data summary must be at most 5000 characters." }),
});

export interface TrendState {
  summary?: string;
  error?: string | null;
  fieldErrors?: {
    salesDataSummary?: string[];
  } | null;
  formData?: {
    salesDataSummary: string;
  };
}

export async function getTrendSummaryAction(prevState: TrendState, formData: FormData): Promise<TrendState> {
  const rawFormData = {
    salesDataSummary: formData.get('salesDataSummary') as string || "",
  };

  const validatedFields = TrendSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: "Invalid input. Please check the summary text.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      formData: rawFormData,
    };
  }

  try {
    const input: SummarizeSalesTrendsInput = {
      salesDataSummary: validatedFields.data.salesDataSummary,
    };
    const result = await summarizeSalesTrends(input);
    return { summary: result.trendSummary, error: null, fieldErrors: null, formData: validatedFields.data };
  } catch (e) {
    console.error("Error in getTrendSummaryAction:", e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `Failed to generate trend summary: ${errorMessage}`, fieldErrors: null, formData: validatedFields.data };
  }
}
