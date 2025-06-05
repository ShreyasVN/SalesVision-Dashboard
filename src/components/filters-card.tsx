"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Filter } from 'lucide-react';
import { Button } from './ui/button';

export function FiltersCard() {
  // In a real app, these values would come from data or config
  const regions = ["North America", "Europe", "Asia", "South America", "Africa", "Oceania"];
  const timePeriods = ["Last 7 Days", "Last 30 Days", "Last Quarter", "Last Year", "Custom"];
  const productCategories = ["Electronics", "Clothing", "Home Goods", "Books", "Software"];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-6 w-6 text-primary" />
          Drill-Down Filters
        </CardTitle>
        <CardDescription>Refine your analysis by applying filters.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="regionFilter">Region</Label>
          <Select>
            <SelectTrigger id="regionFilter">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map(region => <SelectItem key={region} value={region.toLowerCase().replace(' ', '-')}>{region}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="timePeriodFilter">Time Period</Label>
          <Select>
            <SelectTrigger id="timePeriodFilter">
              <SelectValue placeholder="Select Time Period" />
            </SelectTrigger>
            <SelectContent>
              {timePeriods.map(period => <SelectItem key={period} value={period.toLowerCase().replace(' ', '-')}>{period}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="productCategoryFilter">Product Category</Label>
          <Select>
            <SelectTrigger id="productCategoryFilter">
              <SelectValue placeholder="Select Product Category" />
            </SelectTrigger>
            <SelectContent>
              {productCategories.map(category => <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>{category}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full mt-2">
          <Filter className="mr-2 h-4 w-4" /> Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}
