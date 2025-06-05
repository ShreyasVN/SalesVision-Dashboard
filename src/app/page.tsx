"use client";

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { MetricCard } from '@/components/metric-card';
import { DatasetImportCard } from '@/components/dataset-import-card';
import { DataJoinCard } from '@/components/data-join-card';
import { TemplateSelectionCard, type TemplateSelection } from '@/components/template-selection-card';
import { FiltersCard } from '@/components/filters-card';
import { TrendSummaryCard } from '@/components/trend-summary-card';
import { DollarSign, Users, ShoppingCart, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { RevenueTrendsChart } from '@/components/charts/revenue-trends-chart';
import { ChurnRateChart } from '@/components/charts/churn-rate-chart';
import { AverageOrderValueChart } from '@/components/charts/average-order-value-chart';

const initialTemplates: TemplateSelection = {
  revenueTrends: true,
  churnRate: true,
  averageOrderValue: true,
};

export default function DashboardPage() {
  const [selectedTemplates, setSelectedTemplates] = useState<TemplateSelection>(initialTemplates);

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Section 1: Key Metrics */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Metrics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              title="Total Revenue"
              value="$1,250,340"
              icon={DollarSign}
              trend="+15.2% from last month"
              trendDirection="up"
            />
            <MetricCard
              title="Active Customers"
              value="8,750"
              icon={Users}
              trend="-1.8% from last month"
              trendDirection="down"
            />
            <MetricCard
              title="Average Order Value"
              value="$142.50"
              icon={ShoppingCart}
              trend="+3.5% from last month"
              trendDirection="up"
            />
          </div>
        </section>

        {/* Section 2: Core Features & Data Setup */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Setup & Configuration</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DatasetImportCard />
            <TemplateSelectionCard selection={selectedTemplates} onSelectionChange={setSelectedTemplates} />
            <FiltersCard />
          </div>
        </section>

        {/* Section 3: Visualizations based on Template Selection */}
        { (selectedTemplates.revenueTrends || selectedTemplates.churnRate || selectedTemplates.averageOrderValue) &&
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Visualizations</h2>
            <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
              {selectedTemplates.revenueTrends && <RevenueTrendsChart />}
              {selectedTemplates.churnRate && <ChurnRateChart />}
            </div>
            {selectedTemplates.averageOrderValue && (
              <div className="mt-6 grid gap-6 lg:grid-cols-1">
                 <AverageOrderValueChart />
              </div>
            )}
          </section>
        }
        
        {/* Section 4: Advanced Tools */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Advanced Tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <TrendSummaryCard />
            <DataJoinCard /> {/* Placeholder for Data Join */}
          </div>
        </section>

      </div>
    </DashboardLayout>
  );
}
