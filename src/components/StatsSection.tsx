import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function StatsSection() {
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
    <section className="py-24 bg-light">
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
            Why Early Speech Support Matters
          </h2>
          <p className="text-lg text-muted">
            The scale of the challenge families face is significant, and early
            intervention makes a real difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Stat 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-primary flex flex-col justify-center">

            <div className="text-5xl md:text-6xl font-heading font-extrabold text-primary mb-4">
              1 in 10
            </div>
            <p className="text-lg text-dark font-medium mb-4">
              children experience long-term speech, language and communication
              needs.
            </p>
            <div className="text-sm text-muted/70 uppercase tracking-wider font-semibold mt-auto">
              Source: Speech and Language UK
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-accent flex flex-col justify-center">

            <div className="text-5xl md:text-6xl font-heading font-extrabold text-accent mb-4">
              6x
            </div>
            <p className="text-lg text-dark font-medium mb-4">
              more likely to struggle with reading at age eleven if speech
              difficulties persist at age five.
            </p>
            <div className="text-sm text-muted/70 uppercase tracking-wider font-semibold mt-auto">
              Source: Department for Education
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-yellow flex flex-col justify-center">

            <div className="text-4xl md:text-5xl font-heading font-extrabold text-yellow mb-4">
              #1 Predictor
            </div>
            <p className="text-lg text-dark font-medium mb-4">
              Early language development is one of the strongest predictors of
              later academic success.
            </p>
            <div className="text-sm text-muted/70 uppercase tracking-wider font-semibold mt-auto">
              Source: Education Endowment Foundation
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border border-gray-100 border-t-4 border-t-success flex flex-col justify-center">

            <div className="text-5xl md:text-6xl font-heading font-extrabold text-success mb-4">
              81%
            </div>
            <p className="text-lg text-dark font-medium mb-4">
              of children with emotional and behavioural disorders also have
              significant language difficulties.
            </p>
            <div className="text-sm text-muted/70 uppercase tracking-wider font-semibold mt-auto">
              Source: Speech and Language UK
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}