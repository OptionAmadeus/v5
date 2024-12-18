import { create } from 'zustand';
import { initialState } from './slice';
import { createPortfolioActions } from './actions';
import type { PortfolioState } from './slice';

export const usePortfolioStore = create<PortfolioState & ReturnType<typeof createPortfolioActions>>((set) => ({
  ...initialState,
  ...createPortfolioActions(set),
}));