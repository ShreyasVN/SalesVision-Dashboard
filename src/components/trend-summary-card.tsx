"use client";

import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2 } from 'lucide-react';
import { getTrendSummaryAction, type TrendState } from '@/app/actions/summarizeSales';
import { useToast } from "@/hooks/use-toast";

const initialState: TrendState = {
  summary: '',
  error: null,
  fieldErrors: null,
  formData: { salesDataSummary: 'Example: Overall sales increased by 15% in Q2, driven by new product launches. However, churn rate saw a slight uptick of 2% in the same period. Average order value remained steady.' },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Generate Trend Summary
    </Button>
  );
}

export function TrendSummaryCard() {
  const [state, formAction] = useFormState(getTrendSummaryAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    } else if (state.summary && state.summary !== initialState.summary) {
       toast({
        title: "Success",
        description: "Trend summary generated successfully!",
      });
    }
  }, [state.error, state.summary, toast]);


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Trend Summarization
        </CardTitle>
        <CardDescription>Enter a sales data summary to generate AI-powered insights and key trends.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="salesDataSummary">Sales Data Summary</Label>
            <Textarea
              id="salesDataSummary"
              name="salesDataSummary"
              placeholder="Paste or type your sales data summary here..."
              rows={6}
              defaultValue={state.formData?.salesDataSummary}
              aria-describedby="salesDataSummary-error"
            />
            {state.fieldErrors?.salesDataSummary && (
              <p id="salesDataSummary-error" className="text-sm text-destructive mt-1">
                {state.fieldErrors.salesDataSummary.join(', ')}
              </p>
            )}
          </div>
          {state.summary && (
            <div>
              <Label htmlFor="trendOutput">Generated Summary</Label>
              <Textarea id="trendOutput" value={state.summary} readOnly rows={6} className="bg-muted" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
