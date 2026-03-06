import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Textarea } from './ui/Textarea';
export function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  return (
    <section id="early-access" className="py-24 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reassurance Block */}
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
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">
            Join the SoundSteps Early Access Programme
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary" size={20} />
              <span>Help shape the future of SoundSteps</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary" size={20} />
              <span>Support your child's speech practice at home</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary" size={20} />
              <span>Join other parents looking for practical ways</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-primary">
            <span className="bg-primary/10 px-4 py-1.5 rounded-full text-[#3C3B8E]">
              Early access group forming now
            </span>
            <span className="bg-primary/10 px-4 py-1.5 rounded-full">
              Parents helping build the future
            </span>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">

          {isSuccess ?
          <div className="text-center py-16">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-4">
                Thank you! You're on the list.
              </h3>
              <p className="text-muted max-w-md mx-auto">
                We've received your details. We'll be in touch soon with more
                information about joining the Early Access programme.
              </p>
            </div> :

          <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                label="Parent / Carer Name"
                required
                placeholder="Jane Doe" />

                <Input
                label="Email Address"
                type="email"
                required
                placeholder="jane@example.com" />

                <Input label="Location" required placeholder="City, Region" />

                <Select
                label="How did you hear about us?"
                required
                options={[
                {
                  value: 'social',
                  label: 'Social Media'
                },
                {
                  value: 'friend',
                  label: 'Friend/Family'
                },
                {
                  value: 'healthcare',
                  label: 'Healthcare Professional'
                },
                {
                  value: 'search',
                  label: 'Search Engine'
                },
                {
                  value: 'other',
                  label: 'Other'
                }]
                } />


                <Select
                label="Child's Age Range"
                required
                options={[
                {
                  value: 'under2',
                  label: 'Under 2'
                },
                {
                  value: '2-3',
                  label: '2-3 years'
                },
                {
                  value: '3-4',
                  label: '3-4 years'
                },
                {
                  value: '4-5',
                  label: '4-5 years'
                },
                {
                  value: '5-6',
                  label: '5-6 years'
                },
                {
                  value: '6-7',
                  label: '6-7 years'
                },
                {
                  value: '7plus',
                  label: '7+ years'
                }]
                } />


                <Select
                label="Who is the app for?"
                required
                options={[
                {
                  value: 'my-child',
                  label: 'My child'
                },
                {
                  value: 'care-for',
                  label: 'A child I care for'
                },
                {
                  value: 'work-with',
                  label: 'A child I work with'
                },
                {
                  value: 'other',
                  label: 'Other'
                }]
                } />

              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-dark block">
                  Current Support Status <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                'Waiting for NHS support',
                'Receiving NHS support',
                'Receiving private support',
                'Not currently receiving support'].
                map((status) =>
                <label
                  key={status}
                  className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">

                      <input
                    type="radio"
                    name="support-status"
                    value={status}
                    required
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />

                      <span className="ml-3 text-sm text-dark">{status}</span>
                    </label>
                )}
                </div>
              </div>

              <Textarea
              label="What concerns you most about your child's speech development?"
              required
              placeholder="Please share a little about your experience..." />


              <div className="pt-4 border-t border-gray-100 space-y-4">
                <h4 className="text-sm font-semibold text-dark">
                  Optional Questions
                </h4>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-gray-300" />

                  <span className="text-sm text-muted">
                    I would be open to giving feedback to help improve
                    SoundSteps.
                  </span>
                </label>

                <Select
                label="Do you feel there is enough support available locally? (Optional)"
                options={[
                {
                  value: 'yes',
                  label: 'Yes'
                },
                {
                  value: 'no',
                  label: 'No'
                },
                {
                  value: 'unsure',
                  label: 'Unsure'
                }]
                } />

              </div>

              <div className="pt-6">
                <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full text-lg"
                disabled={isSubmitting}>

                  {isSubmitting ? 'Submitting...' : 'Join Early Access'}
                </Button>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
                  <ShieldCheck size={16} className="text-primary" />
                  <p>
                    We respect your privacy. Your information will only be used
                    to support the development of SoundSteps.
                  </p>
                </div>
              </div>
            </form>
          }
        </motion.div>
      </div>
    </section>);

}