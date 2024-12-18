import { pipeline } from '@xenova/transformers';
import type { SentimentResult, GenerationResult, AIError } from '../types/ai';

// Initialize the pipeline lazily
let textClassificationPipeline: any = null;
let textGenerationPipeline: any = null;

class AIProcessingError extends Error {
  constructor(message: string, public details?: unknown) {
    super(message);
    this.name = 'AIProcessingError';
  }
}

async function initClassificationPipeline() {
  if (!textClassificationPipeline) {
    try {
      textClassificationPipeline = await pipeline(
        'sentiment-analysis',
        'Xenova/distilbert-base-uncased-finetuned-sst-2-english'
      );
    } catch (error) {
      throw new AIProcessingError('Failed to initialize sentiment analysis model', error);
    }
  }
  return textClassificationPipeline;
}

async function initGenerationPipeline() {
  if (!textGenerationPipeline) {
    try {
      textGenerationPipeline = await pipeline(
        'text-generation',
        'Xenova/tiny-random-gpt2'
      );
    } catch (error) {
      throw new AIProcessingError('Failed to initialize text generation model', error);
    }
  }
  return textGenerationPipeline;
}

export async function classifyText(text: string): Promise<SentimentResult> {
  try {
    const pipeline = await initClassificationPipeline();
    const result = await pipeline(text);
    return result[0];
  } catch (error) {
    if (error instanceof AIProcessingError) {
      throw error;
    }
    throw new AIProcessingError('Failed to classify text', error);
  }
}

export async function generateText(prompt: string): Promise<GenerationResult> {
  try {
    const pipeline = await initGenerationPipeline();
    const result = await pipeline(prompt, {
      max_length: 50,
      num_return_sequences: 1,
    });
    return result[0];
  } catch (error) {
    if (error instanceof AIProcessingError) {
      throw error;
    }
    throw new AIProcessingError('Failed to generate text', error);
  }
}