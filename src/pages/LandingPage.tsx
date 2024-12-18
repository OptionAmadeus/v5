import React from 'react';
import { Hero } from '../components/marketing/Hero';
import { Features } from '../components/marketing/Features';
import { Footer } from '../components/layout/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}