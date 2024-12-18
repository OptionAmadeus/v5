import { portfolioApi } from '@/lib/api/portfolio';
import { calculatePortfolioStats } from '@/utils/portfolio';
import type { PortfolioState } from './slice';

export const createPortfolioActions = (set: (fn: (state: PortfolioState) => Partial<PortfolioState>) => void) => ({
  refreshPortfolio: async () => {
    try {
      set(state => ({ ...state, isLoading: true, error: null }));
      const [assetsResponse, transactionsResponse] = await Promise.all([
        portfolioApi.getAssets(),
        portfolioApi.getTransactions()
      ]);
      
      const assets = assetsResponse.data;
      const transactions = transactionsResponse.data;
      
      set(state => ({
        ...state,
        assets,
        transactions,
        stats: calculatePortfolioStats(assets),
        isLoading: false,
      }));
    } catch (error) {
      set(state => ({
        ...state,
        error: (error as Error).message,
        isLoading: false,
      }));
    }
  },

  getRecommendations: async () => {
    try {
      set(state => ({ ...state, isLoading: true, error: null }));
      const response = await portfolioApi.getRecommendations();
      set(state => ({
        ...state,
        recommendations: response.data,
        isLoading: false,
      }));
    } catch (error) {
      set(state => ({
        ...state,
        error: (error as Error).message,
        isLoading: false,
      }));
    }
  },
});