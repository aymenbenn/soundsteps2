import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'border-b border-gray-100 py-3' : 'py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          }>

          <div className="text-primary">
            <MessageCircle
              size={24}
              strokeWidth={2.5}
              className="bg-[#FFFFFF]" />

          </div>
          <span className="font-heading font-bold text-2xl tracking-tight text-[#6BCB78]">
            SoundSteps
          </span>
        </div>

        <Button variant="accent" size="sm" onClick={scrollToForm}>
          Join Early Access
        </Button>
      </div>
    </nav>);

}