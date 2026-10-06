'use client';

import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import Badge from '../ui/Badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'RiverFlow completely transformed how we handle our data pipeline. What used to take our team weeks now runs automatically in minutes.',
    author: 'Sarah Chen',
    title: 'CTO at TechVentures',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote:
      'The AI-powered workflow builder is incredible. I described what I needed in plain English and it generated a production-ready workflow.',
    author: 'Marcus Rodriguez',
    title: 'Lead Engineer at ScaleUp',
    avatar: 'MR',
    rating: 5,
  },
  {
    quote:
      "We've reduced our operational costs by 60% since switching to RiverFlow. The ROI was visible within the first month.",
    author: 'Emily Watson',
    title: 'VP of Operations at GrowthCo',
    avatar: 'EW',
    rating: 5,
  },
  {
    quote:
      'The integration ecosystem is unmatched. We connected all our tools in a single afternoon and had workflows running by end of day.',
    author: 'David Kim',
    title: 'Founder at DataFlow',
    avatar: 'DK',
    rating: 5,
  },
  {
    quote:
      'Enterprise-grade security with startup-level ease of use. RiverFlow is exactly what we needed for our compliance requirements.',
    author: 'Lisa Thompson',
    title: 'CISO at SecureBank',
    avatar: 'LT',
    rating: 5,
  },
  {
    quote:
      'The support team is phenomenal. They helped us design a complex workflow architecture and had us running in production within a week.',
    author: 'Alex Patel',
    title: 'DevOps Lead at CloudFirst',
    avatar: 'AP',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 overflow-hidden">
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
            <MessageSquare className="w-3.5 h-3.5" />
            Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by teams <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-lg text-dark-400">
            See what our customers have to say about their experience with RiverFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative p-6 rounded-2xl bg-dark-900/50 border border-dark-800/50 hover:border-primary-500/20 transition-all duration-300 hover-lift h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary-500/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-dark-300 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{testimonial.author}</p>
                    <p className="text-xs text-dark-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
