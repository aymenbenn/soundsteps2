import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ImageIcon } from 'lucide-react';
import { Button } from './ui/Button';
import heroImage from '../assets/a.png';
export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-dark leading-tight mb-6">
              Helping Your Child <br className="hidden lg:block" />
              <span className="text-[#6BCB78]">Find Their Voice</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              SoundSteps is a simple, supportive tool designed to help families
              practise speech sounds at home — while waiting for or alongside
              professional support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="accent"
                size="lg"
                onClick={scrollToForm}
                className="w-full sm:w-auto">

                Join Early Access
              </Button>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center gap-2 text-primary font-heading font-bold hover:text-primary-dark transition-colors px-6 py-4">

                Learn How It Works <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="flex justify-center items-center lg:justify-end">

            {/* ILLUSTRATION PLACEHOLDER */}
            <img
  src={heroImage}
  alt="Parent and child practicing speech"
  className="w-full max-w-md rounded-2xl shadow-xl object-cover"
/>
          </motion.div>
        </div>
      </div>
    </section>);

}