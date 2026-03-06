import React from 'react';
import { motion } from 'framer-motion';
import familyImage from '../assets/family.png'; // <- import your image

export function FounderStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* FAMILY IMAGE */}
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <img
                src={familyImage}
                alt="Founder story - Family journey"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="border-l-4 border-primary/20 pl-6 md:pl-10">
              <h2 className="text-3xl font-heading font-bold text-dark mb-8">
                Why We're Building SoundSteps
              </h2>

              <div className="space-y-5 text-lg text-muted leading-relaxed">
                <p>SoundSteps began from our own family's experience.</p>
                <p>
                  Our eldest child struggled with speech development. When he
                  started nursery many people struggled to understand him. Over
                  time his closest friends learned to understand what he was
                  saying, sometimes even helping teachers interpret his speech
                  at school.
                </p>
                <p>
                  Although he received some early support, speech development
                  has remained something we continue to work on even now.
                </p>
                <p>
                  Our younger child is now facing similar challenges, but
                  accessing support has become even more difficult. Waiting
                  lists are longer, appointments are often cancelled or
                  rearranged, and families can spend long periods unsure how
                  best to help their child practise at home.
                </p>
                <p className="font-medium text-dark">
                  This experience led us to start building SoundSteps — a simple
                  tool designed to help families practise speech sounds
                  regularly at home while waiting for or alongside professional
                  support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}