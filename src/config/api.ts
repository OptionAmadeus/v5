export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  endpoints: {
    portfolio: '/api/portfolio',
    recommendations: '/api/recommendations',
    transactions: '/api/transactions'
  },
  refreshIntervals: {
    portfolio: 60 * 60 * 1000, // 1 hour
    recommendations: 60 * 60 * 1000 // 1 hour
  }
} as const;