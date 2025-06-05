"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { GitMerge } from 'lucide-react';

export function DataJoinCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitMerge className="h-6 w-6 text-primary" />
          Simulated Data Joins
        </CardTitle>
        <CardDescription>Define primary keys to simulate database joins in memory. (Feature Coming Soon)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="table1">Table 1 / Dataset 1</Label>
          <Select disabled>
            <SelectTrigger id="table1">
              <SelectValue placeholder="Select Table/Dataset" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales Data</SelectItem>
              <SelectItem value="customers">Customer Data</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="key1">Primary Key (Table 1)</Label>
          <Select disabled>
            <SelectTrigger id="key1">
              <SelectValue placeholder="Select Key" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer_id">Customer ID</SelectItem>
              <SelectItem value="product_id">Product ID</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="table2">Table 2 / Dataset 2</Label>
          <Select disabled>
            <SelectTrigger id="table2">
              <SelectValue placeholder="Select Table/Dataset" />
            </SelectTrigger>
             <SelectContent>
              <SelectItem value="products">Product Data</SelectItem>
              <SelectItem value="regions">Region Data</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="key2">Foreign Key (Table 2)</Label>
          <Select disabled>
            <SelectTrigger id="key2">
              <SelectValue placeholder="Select Key" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="customer_id">Customer ID</SelectItem>
              <SelectItem value="product_id">Product ID</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled className="w-full">
          <GitMerge className="mr-2 h-4 w-4" /> Perform Join (Coming Soon)
        </Button>
      </CardFooter>
    </Card>
  );
}
