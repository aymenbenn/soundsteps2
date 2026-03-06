import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
export function ChallengeSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="py-24 bg-white">
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
          className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">
            The Challenge Many Families Face
          </h2>
          <p className="text-lg text-muted">
            Supporting a child's speech development can feel overwhelming,
            especially when navigating the current support system.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-primary relative overflow-hidden">

            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center mb-6">
              <ImageIcon className="text-primary/40" size={24} />
              <span className="sr-only">Clock / waiting icon</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark mb-3">
              Long Waiting Times
            </h3>
            <p className="text-muted leading-relaxed">
              Over 68,000 children are currently waiting for speech and language
              therapy in England. Some families wait over a year.
            </p>
            <div className="mt-4 text-xs text-muted/60 font-medium">
              Sources: NHS/BMJ, Nuffield Trust
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-accent relative overflow-hidden">

            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-accent/20 bg-accent/5 flex flex-col items-center justify-center mb-6">
              <ImageIcon className="text-accent/40" size={24} />
              <span className="sr-only">Question mark / uncertainty icon</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark mb-3">
              Uncertainty at Home
            </h3>
            <p className="text-muted leading-relaxed">
              Many parents want to help but aren't sure how to support their
              child's speech development correctly between appointments.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-yellow relative overflow-hidden">

            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-yellow/40 bg-yellow/10 flex flex-col items-center justify-center mb-6">
              <ImageIcon className="text-yellow/60" size={24} />
              <span className="sr-only">Puzzle / tools icon</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark mb-3">
              Limited Daily Tools
            </h3>
            <p className="text-muted leading-relaxed">
              There are few structured, parent-friendly tools designed
              specifically for regular, calm speech practice at home.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}