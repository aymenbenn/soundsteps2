import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ChallengeSection } from './components/ChallengeSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { StatsSection } from './components/StatsSection';
import { FounderStorySection } from './components/FounderStorySection';
import { EarlyAccessForm } from './components/EarlyAccessForm';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/20 selection:text-primary-dark">
      <Navigation />

      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <HowItWorksSection />
        <StatsSection />
        <FounderStorySection />
        <EarlyAccessForm />
      </main>

      <Footer />
    </div>);

}