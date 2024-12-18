import OpenAI from 'openai';
import type { Asset, TradeRecommendation } from '../types/portfolio';

export class AIService {
  private openai: OpenAI;

  constructor(apiKey: string) {
    this.openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true // Note: In production, calls should go through backend
    });
  }

  async getTradeRecommendations(
    assets: Asset[],
    marketConditions: string
  ): Promise<TradeRecommendation[]> {
    const prompt = `Given the following portfolio and market conditions, provide trading recommendations:
    
Portfolio:
${assets.map(a => `${a.name} (${a.symbol}): $${a.value} (${a.change24h}% 24h change)`).join('\n')}

Market Conditions:
${marketConditions}

Provide recommendations in the following format:
- Action (buy/sell/hold)
- Asset
- Amount
- Reason
- Confidence (0-1)`;

    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a crypto trading advisor. Provide conservative, well-reasoned trade recommendations."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    });

    // Parse the response and convert to TradeRecommendation objects
    // This is a simplified implementation
    return [{
      action: 'hold',
      asset: 'BTC',
      amount: 0,
      reason: response.choices[0].message.content || 'No specific recommendation at this time.',
      confidence: 0.8
    }];
  }
}