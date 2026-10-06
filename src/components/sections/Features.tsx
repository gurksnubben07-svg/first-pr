'use client';

import React from 'react';
import {
  Zap, Brain, Shield, BarChart3, Workflow, Globe,
  RefreshCcw, Cpu, Database, CloudLightning,
} from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description:
      'Leverage advanced machine learning models to automate complex decision-making processes across your workflows.',
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description:
      'Design sophisticated automation flows with our intuitive drag-and-drop interface. No coding required.',
    iconColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description:
      'Process millions of events per second with our high-performance streaming engine built for scale.',
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified with end-to-end encryption, RBAC, and comprehensive audit logging.',
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description:
      'Deploy workflows across 200+ edge locations worldwide for minimal latency and maximum reliability.',
    iconColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Gain deep insights into workflow performance with real-time dashboards and custom reports.',
    iconColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
  },
  {
    icon: Database,
    title: 'Smart Data Pipeline',
    description:
      'Transform, enrich, and route data automatically with AI-powered data processing pipelines.',
    iconColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
  },
  {
    icon: CloudLightning,
    title: 'Serverless Execution',
    description:
      'Run workflows without managing infrastructure. Auto-scale from zero to millions of executions.',
    iconColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    icon: RefreshCcw,
    title: 'Auto-Retry & Recovery',
    description:
      'Built-in error handling with intelligent retry logic and automatic failure recovery mechanisms.',
    iconColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-20 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Badge variant="primary" className="mb-6">
            <Cpu className="w-3.5 h-3.5" />
            Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything you need to{' '}
            <span className="gradient-text">automate at scale</span>
          </h2>
          <p className="text-lg text-dark-400 leading-relaxed">
            From simple task automation to complex AI-driven workflows, RiverFlow provides all
            the tools you need to streamline operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Card className="group h-full">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-5',
                      feature.bgColor
                    )}
                  >
                    <feature.icon className={cn('w-6 h-6', feature.iconColor)} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
