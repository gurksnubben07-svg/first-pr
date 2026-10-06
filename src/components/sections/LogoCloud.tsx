'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const logos = [
  'Vercel', 'Stripe', 'Notion', 'Slack', 'GitHub', 'Figma',
  'Linear', 'Discord', 'Shopify', 'Twilio', 'Supabase', 'AWS',
];

export default function LogoCloud() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={cn(
            'text-center text-sm text-dark-500 mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          Trusted by teams at leading companies worldwide
        </p>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div className="flex w-max animate-marquee">
              {/* Two identical halves; the marquee animation shifts the track
                  by -50%, so the loop is seamless. */}
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex items-center gap-12 pr-12"
                >
                  {logos.map((logo) => (
                    <div
                      key={`${logo}-${copy}`}
                      className="flex items-center gap-2 flex-shrink-0 px-6 py-3 rounded-xl bg-dark-900/30 border border-dark-800/30 hover:border-dark-700/50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-dark-300">{logo.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-dark-400 whitespace-nowrap">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
