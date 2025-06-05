"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { LayoutGrid } from 'lucide-react';

export interface TemplateSelection {
  revenueTrends: boolean;
  churnRate: boolean;
  averageOrderValue: boolean;
}

interface TemplateSelectionCardProps {
  selection: TemplateSelection;
  onSelectionChange: (newSelection: TemplateSelection) => void;
}

export function TemplateSelectionCard({ selection, onSelectionChange }: TemplateSelectionCardProps) {
  const handleCheckboxChange = (metric: keyof TemplateSelection) => {
    onSelectionChange({
      ...selection,
      [metric]: !selection[metric],
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LayoutGrid className="h-6 w-6 text-primary" />
          Template Selection
        </CardTitle>
        <CardDescription>Choose metrics to display on the dashboard.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="revenueTrends"
            checked={selection.revenueTrends}
            onCheckedChange={() => handleCheckboxChange('revenueTrends')}
          />
          <Label htmlFor="revenueTrends" className="font-normal">Revenue Trends</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="churnRate"
            checked={selection.churnRate}
            onCheckedChange={() => handleCheckboxChange('churnRate')}
          />
          <Label htmlFor="churnRate" className="font-normal">Churn Rate</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="averageOrderValue"
            checked={selection.averageOrderValue}
            onCheckedChange={() => handleCheckboxChange('averageOrderValue')}
          />
          <Label htmlFor="averageOrderValue" className="font-normal">Average Order Value (AOV)</Label>
        </div>
      </CardContent>
    </Card>
  );
}
