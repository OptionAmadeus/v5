import React from 'react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/ui/Logo';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Understanding AI in Portfolio Management",
    excerpt: "Learn how artificial intelligence is revolutionizing the way we manage investments and make financial decisions.",
    author: "Sarah Chen",
    date: "2024-03-15",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "The Future of Automated Trading",
    excerpt: "Explore how automated trading systems are evolving and what it means for individual investors.",
    author: "Michael Roberts",
    date: "2024-03-10",
    category: "Investment",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Best Practices for Portfolio Diversification",
    excerpt: "Discover key strategies for building a well-diversified portfolio that can weather market volatility.",
    author: "Emily Wong",
    date: "2024-03-05",
    category: "Strategy",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];

export function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Logo />
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Insights and updates from the Self AI team on investing, technology, and more.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}