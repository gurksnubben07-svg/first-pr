'use client';

import React from 'react';
import { Plug, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const integrations = [
  { name: 'Slack', category: 'Communication', color: '#E01E5A' },
  { name: 'GitHub', category: 'Development', color: '#FFFFFF' },
  { name: 'Notion', category: 'Productivity', color: '#FFFFFF' },
  { name: 'Stripe', category: 'Payments', color: '#635BFF' },
  { name: 'Salesforce', category: 'CRM', color: '#00A1E0' },
  { name: 'Jira', category: 'Project Management', color: '#0052CC' },
  { name: 'HubSpot', category: 'Marketing', color: '#FF7A59' },
  { name: 'Shopify', category: 'E-commerce', color: '#96BF48' },
  { name: 'Twilio', category: 'Communications', color: '#F22F46' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'Google Cloud', category: 'Cloud', color: '#4285F4' },
  { name: 'Supabase', category: 'Database', color: '#3FCF8E' },
  { name: 'Discord', category: 'Communication', color: '#5865F2' },
  { name: 'Linear', category: 'Project Management', color: '#5E6AD2' },
  { name: 'Figma', category: 'Design', color: '#F24E1E' },
  { name: 'Vercel', category: 'Deployment', color: '#FFFFFF' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'Redis', category: 'Database', color: '#DC382D' },
  { name: 'OpenAI', category: 'AI', color: '#74AA9C' },
];

export default function Integrations() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="integrations" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Badge variant="primary" className="mb-6">
            <Plug className="w-3.5 h-3.5" />
            Integrations
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Connect with <span className="gradient-text">200+ tools</span>
          </h2>
          <p className="text-lg text-dark-400">
            Seamlessly integrate with your entire tech stack. From CRMs to databases, we&apos;ve
            got you covered.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={cn(
                'transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${Math.min(index, 10) * 40}ms` }}
            >
              <div className="group relative p-4 rounded-xl bg-dark-900/50 border border-dark-800/50 hover:border-primary-500/20 transition-all duration-300 hover-lift cursor-pointer h-full">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      backgroundColor: `${integration.color}15`,
                      color: integration.color,
                    }}
                  >
                    {integration.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white group-hover:text-primary-300 transition-colors truncate">
                      {integration.name}
                    </p>
                    <p className="text-xs text-dark-500 truncate">{integration.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            View all integrations
          </Button>
        </div>
      </div>
    </section>
  );
}
