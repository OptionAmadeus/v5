import axios from 'axios';
import type { TradeRecommendation } from '../types/portfolio';
import { API_CONFIG } from '../config/api';

const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: 10000
});

export class AIService {
  static async getRecommendations(): Promise<TradeRecommendation[]> {
    try {
      const response = await api.get(API_CONFIG.endpoints.recommendations);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch recommendations');
      }
      throw new Error('An unexpected error occurred');
    }
  }
}