import React from 'react';
import { MessageCircle } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-accent">
                <MessageCircle
                  size={24}
                  strokeWidth={2.5}
                  className="bg-[#1A1A2E]" />

              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                SoundSteps
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Supporting speech practice at home.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm">

              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm">

              Contact Us
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-white/60 text-sm mb-1">Get in touch</span>
            <a
              href="mailto:hello@soundsteps.co.uk"
              className="text-white hover:text-accent transition-colors font-medium">

              hello@soundsteps.co.uk
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>
            &copy; {new Date().getFullYear()} SoundSteps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}