import React from 'react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/ui/Logo';
import { Users, Target, Award } from 'lucide-react';

export function AboutPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Self AI</h1>
            <p className="text-lg text-gray-600 mb-12">
              We're on a mission to democratize intelligent investing by making AI-powered portfolio 
              management accessible to everyone.
            </p>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-gray-600">
                  Industry experts in finance, AI, and technology working together to innovate investing.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <Target className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Empowering investors with AI-driven insights for better financial decisions.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Transparency, innovation, and user-centric design guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}