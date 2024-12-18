import axios from 'axios';
import type { Asset, Transaction } from '../types/portfolio';
import { API_CONFIG } from '../config/api';

const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: 10000
});

export class PortfolioService {
  static async getPortfolio(): Promise<{ assets: Asset[]; transactions: Transaction[] }> {
    try {
      const response = await api.get(API_CONFIG.endpoints.portfolio);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async getTransactions(): Promise<Transaction[]> {
    try {
      const response = await api.get(API_CONFIG.endpoints.transactions);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private static handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      return new Error(error.response?.data?.message || 'Failed to fetch portfolio data');
    }
    return new Error('An unexpected error occurred');
  }
}