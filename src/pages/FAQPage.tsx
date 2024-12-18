import React from 'react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/ui/Logo';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Self AI?",
    answer: "Self AI is an intelligent portfolio management platform that uses artificial intelligence to help investors make better decisions. Our platform provides real-time analytics, personalized recommendations, and comprehensive performance tracking."
  },
  {
    question: "How does the AI work?",
    answer: "Our AI analyzes market data, trends, and your portfolio performance to generate personalized insights and recommendations. It continuously learns from market patterns and user behavior to improve its suggestions over time."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take security seriously. We use bank-level encryption, secure data centers, and follow industry best practices for data protection. Your information is never shared without your explicit consent."
  }
];

export function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Logo />
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Find answers to common questions about Self AI and our services.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-lg shadow-md"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}