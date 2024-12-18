export const config = {
  infuraId: import.meta.env.VITE_INFURA_ID || '',
  openAiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  coinbaseConfig: {
    appName: 'AI Crypto Portfolio',
    appLogoUrl: 'https://example.com/logo.png',
    darkMode: false,
    defaultChainId: 1, // Ethereum Mainnet
  }
} as const;

// Validate required environment variables
export function validateConfig() {
  const required = ['VITE_INFURA_ID', 'VITE_OPENAI_API_KEY'];
  const missing = required.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}