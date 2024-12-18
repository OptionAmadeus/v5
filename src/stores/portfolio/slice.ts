import type { Asset, PortfolioStats, TradeRecommendation, Transaction } from '@/types/portfolio';

export interface PortfolioState {
  assets: Asset[];
  transactions: Transaction[];
  stats: PortfolioStats;
  recommendations: TradeRecommendation[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: PortfolioState = {
  assets: [],
  transactions: [],
  stats: {
    totalValue: 0,
    totalChange24h: 0,
    totalProfitLoss: 0,
    totalROI: 0,
    lastUpdated: new Date()
  },
  recommendations: [],
  isLoading: false,
  error: null,
};