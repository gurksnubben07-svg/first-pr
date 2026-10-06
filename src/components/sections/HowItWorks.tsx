'use client';

import React from 'react';
import { Plug, Settings, Rocket, Check } from 'lucide-react';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Plug,
    number: '01',
    title: 'Connect Your Tools',
    description:
      'Integrate with 200+ apps and services in just a few clicks. OAuth, API keys, and webhooks supported.',
    features: ['One-click OAuth', 'Custom API connectors', 'Webhook support'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Build Your Workflow',
    description:
      'Use our visual builder or AI assistant to create powerful automation flows tailored to your needs.',
    features: ['Drag & drop builder', 'AI-assisted creation', '100+ templates'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy & Scale',
    description:
      'Deploy instantly to our global edge network. Auto-scale based on demand with zero configuration.',
    features: ['One-click deploy', 'Auto-scaling', 'Global edge network'],
    color: 'from-emerald-500 to-green-500',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Badge variant="primary" className="mb-6">
            <Settings className="w-3.5 h-3.5" />
            How it works
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get started in <span className="gradient-text">three simple steps</span>
          </h2>
          <p className="text-lg text-dark-400">
            From setup to production in minutes, not months. Our streamlined process gets you
            automating faster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                'relative transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 -right-3 w-6 h-0.5 bg-gradient-to-r from-dark-700 to-dark-800" />
              )}

              <div className="relative p-8 rounded-2xl bg-dark-900/50 border border-dark-800/50 hover:border-primary-500/20 transition-all duration-300 hover-lift h-full">
                {/* Step Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={cn(
                      'inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br shadow-lg',
                      step.color
                    )}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-dark-700/80 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-6">{step.description}</p>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-dark-300">
                      <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
