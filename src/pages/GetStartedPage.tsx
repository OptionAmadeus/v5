import React from 'react';
import { GetStartedHero } from '../components/marketing/GetStartedHero';
import { GetStartedForm } from '../components/marketing/GetStartedForm';
import { GetStartedBenefits } from '../components/marketing/GetStartedBenefits';
import { Footer } from '../components/layout/Footer';

export function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <GetStartedHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12">
        <GetStartedForm />
        <GetStartedBenefits />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}