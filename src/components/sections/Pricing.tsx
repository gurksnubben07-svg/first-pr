'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Crown } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      '1,000 workflow runs/mo',
      '5 active workflows',
      '10 integrations',
      'Community support',
      'Basic analytics',
      '7-day log retention',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more power',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      '50,000 workflow runs/mo',
      'Unlimited workflows',
      '50+ integrations',
      'Priority support',
      'Advanced analytics',
      '30-day log retention',
      'Team collaboration',
      'Custom webhooks',
      'AI-powered features',
    ],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Unlimited workflow runs',
      'Unlimited everything',
      '200+ integrations',
      'Dedicated support',
      'Custom analytics',
      'Unlimited log retention',
      'SSO & SAML',
      'Custom SLA',
      'On-premise option',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Badge variant="primary" className="mb-6">
            <Crown className="w-3.5 h-3.5" />
            Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-dark-400">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={cn('text-sm', !isYearly ? 'text-white' : 'text-dark-500')}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            className="relative w-14 h-7 rounded-full bg-dark-800 border border-dark-700 transition-colors hover:border-dark-600"
          >
            <div
              className={cn(
                'absolute top-0.5 left-0 w-6 h-6 rounded-full bg-primary-500 transition-transform duration-300',
                isYearly ? 'translate-x-7' : 'translate-x-0.5'
              )}
            />
          </button>
          <span className={cn('text-sm', isYearly ? 'text-white' : 'text-dark-500')}>
            Yearly
            <Badge variant="success" className="ml-2">
              Save 20%
            </Badge>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  'relative rounded-2xl p-8 h-full',
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-500/10 to-dark-900/50 border-2 border-primary-500/30 lg:scale-105 shadow-2xl shadow-primary-500/10'
                    : 'bg-dark-900/50 border border-dark-800/50 hover:border-dark-700/50'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" className="shadow-lg shadow-primary-500/20">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-dark-400">{plan.description}</p>
                </div>

                <div className="mb-8">
                  {plan.monthlyPrice !== null ? (
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-dark-500 mb-1">/month</span>
                    </div>
                  ) : (
                    <div className="text-5xl font-bold text-white">Custom</div>
                  )}
                </div>

                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full mb-8"
                  icon={<ArrowRight className="w-4 h-4" />}
                  glow={plan.popular}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-dark-300">
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
