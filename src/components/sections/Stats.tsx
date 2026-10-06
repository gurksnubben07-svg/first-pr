'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const stats = [
  { value: '50M+', label: 'Workflow Executions', sublabel: 'Monthly' },
  { value: '99.99%', label: 'Uptime SLA', sublabel: 'Guaranteed' },
  { value: '<50ms', label: 'Avg Latency', sublabel: 'Global Edge' },
  { value: '10K+', label: 'Companies', sublabel: 'Trust Us' },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-purple-500/5 to-primary-500/5" />
      <div className="absolute inset-0 bg-dark-950/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'text-center transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
              <div className="text-xs text-dark-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
