import React, { useState } from 'react';
import { Bot, MessageSquare, ThumbsUp } from 'lucide-react';
import { classifyText, generateText } from '../lib/pipeline';
import { ErrorMessage } from './ErrorMessage';
import { ResultCard } from './ResultCard';
import type { AIResult, AIError } from '../types/ai';

export function AIDemo() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AIError | null>(null);
  const [results, setResults] = useState<AIResult[]>([]);

  const handleClassify = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await classifyText(input);
      setResults(prev => [{
        type: 'sentiment',
        input,
        result,
        timestamp: Date.now()
      }, ...prev]);
    } catch (err) {
      const error = err as AIError;
      setError({
        message: error.message || 'Failed to analyze sentiment',
        details: error
      });
      console.error('Classification error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const result = await generateText(input);
      setResults(prev => [{
        type: 'generation',
        input,
        result,
        timestamp: Date.now()
      }, ...prev]);
    } catch (err) {
      const error = err as AIError;
      setError({
        message: error.message || 'Failed to generate text',
        details: error
      });
      console.error('Generation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Bot className="w-8 h-8 text-blue-600" />
          Cost-Effective AI Demo
        </h1>
        
        {error && (
          <ErrorMessage 
            message={error.message} 
            onDismiss={() => setError(null)}
          />
        )}
        
        <div className="mb-4">
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text for analysis or generation..."
            disabled={loading}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleClassify}
            disabled={loading || !input.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ThumbsUp className="w-4 h-4" />
            Analyze Sentiment
          </button>
          
          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageSquare className="w-4 h-4" />
            Generate Text
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      )}

      <div className="space-y-4">
        {results.map((result, index) => (
          <ResultCard key={index} result={result} />
        ))}
      </div>
    </div>
  );
}