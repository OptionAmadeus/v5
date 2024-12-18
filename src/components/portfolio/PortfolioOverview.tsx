import React from 'react';
import { PortfolioSummary } from './PortfolioSummary';
import { PerformanceChart } from './PerformanceChart';
import { PositionsTable } from './PositionsTable';
import { ActivityHistory } from './ActivityHistory';

export function PortfolioOverview() {
  return (
    <div className="space-y-8">
      <PortfolioSummary />
      <PerformanceChart />
      <PositionsTable />
      <ActivityHistory />
    </div>
  );
}