'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'rounded-2xl border transition-all duration-300',
            openIndex === index
              ? 'bg-dark-800/60 border-primary-500/20'
              : 'bg-dark-900/30 border-dark-800/50 hover:border-dark-700/50'
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-medium text-white pr-4">{item.question}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-dark-400 transition-transform duration-300 flex-shrink-0',
                openIndex === index && 'transform rotate-180 text-primary-400'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <p className="px-6 pb-5 text-dark-400 text-sm leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
