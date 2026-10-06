'use client';

import React, { useEffect } from 'react';
import Button from '../ui/Button';

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavItem[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-dark-950/90 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-dark-900 border-l border-dark-800 p-6 pt-24 overflow-y-auto animate-slide-down">
        <div className="space-y-1">
          {links.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={onClose}
                className="block px-4 py-3 text-base text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-dark-800/50"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 space-y-1">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-dark-400 hover:text-white transition-colors rounded-lg hover:bg-dark-800/50"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          <Button variant="secondary" size="lg" className="w-full">
            Sign In
          </Button>
          <Button variant="primary" size="lg" className="w-full">
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
}
