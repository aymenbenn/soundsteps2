import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
export function HowItWorksSection() {
  const steps = [
  {
    num: 1,
    title: 'Listen',
    desc: 'Your child hears a target speech sound',
    placeholder: 'Ear / listening icon',
    color: 'primary'
  },
  {
    num: 2,
    title: 'Repeat',
    desc: 'They practise saying the sound',
    placeholder: 'Microphone icon',
    color: 'accent'
  },
  {
    num: 3,
    title: 'Encourage',
    desc: 'You provide gentle encouragement',
    placeholder: 'Thumbs up / star icon',
    color: 'yellow'
  },
  {
    num: 4,
    title: 'Save',
    desc: 'Recordings are saved to track progress',
    placeholder: 'Save / bookmark icon',
    color: 'primary'
  },
  {
    num: 5,
    title: 'Grow',
    desc: 'Gentle suggestions help guide next steps',
    placeholder: 'Seedling / growth icon',
    color: 'success'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted">
            A simple, five-step process designed to make daily practice feel
            natural and rewarding.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-primary/20 z-0"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

            {steps.map((step, index) =>
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="flex flex-col items-center text-center relative">

                {/* Mobile connecting line */}
                {index !== steps.length - 1 &&
              <div className="md:hidden absolute top-24 bottom-[-2rem] left-1/2 w-px bg-primary/20 -translate-x-1/2 z-0"></div>
              }

                <div className="w-8 h-8 rounded-full text-white flex items-center justify-center font-heading font-bold text-sm mb-6 relative z-10 bg-[#F9C946]">
                  {step.num}
                </div>

                <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center mb-6 relative z-10 bg-white">
                  <ImageIcon className="text-gray-400" size={24} />
                  <span className="sr-only">{step.placeholder}</span>
                </div>

                <h3 className="text-lg font-heading font-bold text-dark mb-2 bg-white relative z-10 px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted bg-white relative z-10 px-2">
                  {step.desc}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}