'use client';
import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface InteractiveCardProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export function InteractiveCard({ href, className = '', children }: InteractiveCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
  };

  return (
    <Link href={href} className={className} onMouseMove={handleMouseMove}>
      {children}
    </Link>
  );
}
