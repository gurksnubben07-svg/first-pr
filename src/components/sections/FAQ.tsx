'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import Badge from '../ui/Badge';
import Accordion from '../ui/Accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: 'What is RiverFlow and how does it work?',
    answer:
      'RiverFlow is an AI-powered workflow automation platform that helps teams automate repetitive tasks and complex processes. You connect your tools, build workflows using our visual builder, code editor, or AI assistant, and deploy them to run automatically on our global edge network.',
  },
  {
    question: 'Do I need coding experience to use RiverFlow?',
    answer:
      'No! RiverFlow is designed for everyone. Our visual drag-and-drop builder and AI assistant let you create powerful workflows without writing any code. For developers, we also offer a full TypeScript SDK for maximum flexibility.',
  },
  {
    question: 'What integrations do you support?',
    answer:
      'We support 200+ integrations including Slack, GitHub, Notion, Stripe, Salesforce, HubSpot, Google Workspace, AWS, and many more. We also support custom webhooks and our API for connecting any tool.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We are SOC 2 Type II certified and use end-to-end encryption for all data. We offer role-based access control (RBAC), audit logging, and can deploy on your own infrastructure for enterprise customers.',
  },
  {
    question: 'Can I try RiverFlow for free?',
    answer:
      'Yes! Our Starter plan is completely free and includes 1,000 workflow runs per month, 5 active workflows, and 10 integrations. No credit card required. You can upgrade anytime as your needs grow.',
  },
  {
    question: 'What happens if a workflow fails?',
    answer:
      "RiverFlow includes built-in error handling with intelligent retry logic. Failed steps are automatically retried with exponential backoff. You'll receive real-time alerts and can view detailed logs to diagnose issues. Our Pro plan includes auto-recovery features.",
  },
  {
    question: 'Do you offer support for enterprise customers?',
    answer:
      'Yes! Enterprise customers get a dedicated account manager, custom SLA, priority support with 1-hour response time, custom onboarding, and training sessions. Contact our sales team to learn more.',
  },
  {
    question: 'How does the AI assistant work?',
    answer:
      'Our AI assistant uses GPT-4 to understand your automation needs described in plain English. It can generate complete workflows, suggest optimizations, debug issues, and even write custom transformation logic for your data.',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Badge variant="primary" className="mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-dark-400">
            Everything you need to know about RiverFlow. Can&apos;t find the answer you&apos;re
            looking for? Reach out to our support team.
          </p>
        </div>

        {/* Accordion */}
        <div
          className={cn(
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
