import React from 'react';
import { motion } from 'framer-motion';

import imageE from '../assets/e.JPG';
import imageF from '../assets/f.JPG';
import imageG from '../assets/g.JPG';

export function SolutionSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <h2 className="md:text-4xl font-bold mb-4 text-[36px] font-[Cabin,_sans-serif] text-[#E8878F]">
            A Calm, Structured Way to Practise at Home
          </h2>

          <p className="text-lg text-muted leading-relaxed">
            SoundSteps gives parents a simple framework for daily speech
            practice. It's not a replacement for professional therapy — it's a
            supportive companion that helps families stay consistent and
            confident between appointments.
          </p>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >

          {/* Feature 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-gray-100"
          >

            <img
              src={imageE}
              alt="Parents support illustration"
              className="w-20 h-20 object-cover rounded-2xl mb-6 shadow-md"
            />

            <h3 className="text-xl font-heading font-bold text-dark mb-3">
              Built for Parents
            </h3>

            <p className="text-muted">
              Designed to be used by parents and carers, not therapists. No
              expertise needed to get started.
            </p>

          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-gray-100"
          >

            <img
              src={imageF}
              alt="Encouraging environment illustration"
              className="w-20 h-20 object-cover rounded-2xl mb-6 shadow-md"
            />

            <h3 className="text-xl font-heading font-bold text-dark mb-3">
              Gentle & Encouraging
            </h3>

            <p className="text-muted">
              Positive reinforcement and calm pacing. No pressure, no scores,
              just supportive practice.
            </p>

          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-gray-100"
          >

            <img
              src={imageG}
              alt="Speech therapy support illustration"
              className="w-20 h-20 object-cover rounded-2xl mb-6 shadow-md"
            />

            <h3 className="text-xl font-heading font-bold text-dark mb-3">
              Works Alongside Support
            </h3>

            <p className="text-muted">
              Use while waiting for NHS support, alongside private therapy, or
              on your own.
            </p>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}