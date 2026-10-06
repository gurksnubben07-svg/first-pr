'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-primary-950/20 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Decorative Elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500 animate-ping opacity-20" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to automate
            <br />
            <span className="gradient-text">your workflows?</span>
          </h2>

          <p className="text-lg sm:text-xl text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ teams already using RiverFlow to save time, reduce errors, and scale
            their operations with AI-powered automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="xl" icon={<ArrowRight className="w-5 h-5" />} glow>
              Get Started Free
            </Button>
            <Button variant="secondary" size="xl">
              Talk to Sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-dark-500">
            Free forever plan available · No credit card required · Setup in 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
