import React from 'react';
import { motion } from 'framer-motion';

import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import i6 from '../assets/i6.png';

export function HowItWorksSection() {
  const steps = [
    { num: 1, title: 'Listen', desc: 'Your child hears a target speech sound', img: i1, color: 'primary' },
    { num: 2, title: 'Repeat', desc: 'They practise saying the sound', img: i2, color: 'accent' },
    { num: 3, title: 'Encourage', desc: 'You provide gentle encouragement', img: i3, color: 'yellow' },
    { num: 4, title: 'Save', desc: 'Recordings are saved to track progress', img: i4, color: 'primary' },
    { num: 5, title: 'Grow', desc: 'Gentle suggestions help guide next steps', img: i5, color: 'success' },
    { num: 6, title: 'Celebrate', desc: 'Track milestones and celebrate progress', img: i6, color: 'accent' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted">
            A simple, six-step process designed to make daily practice feel
            natural and rewarding.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-20 left-[5%] right-[5%] h-px bg-primary/20 z-0"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative"
              >

                {/* Mobile connecting line */}
                {index !== steps.length - 1 &&
                  <div className="md:hidden absolute top-36 bottom-[-2rem] left-1/2 w-px bg-primary/20 -translate-x-1/2 z-0"></div>
                }

                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-heading font-bold text-sm mb-6 relative z-10 bg-[#F9C946]">
                  {step.num}
                </div>

                {/* Image */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center mb-6 shadow-md bg-white">
                  <img src={step.img} alt={step.title} className="object-cover w-full h-full" />
                </div>

                <h3 className="text-lg font-heading font-bold text-dark mb-2 relative z-10 px-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted relative z-10 px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}