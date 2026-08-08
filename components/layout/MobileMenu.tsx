'use client';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { company, nav } from '@/data/siteData';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="flex items-center gap-4 lg:hidden">
      <a href={company.phoneHref} aria-label="Call DemStrip" className="text-white/80 transition hover:text-amber">
        <Phone size={20} />
      </a>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="focus-ring rounded p-1 text-white/90">
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="fixed inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-coal px-5 py-6 lg:hidden">
          <nav className="grid gap-1">
            {nav.map(x => (
              <Link
                onClick={() => setOpen(false)}
                key={x.href}
                href={x.href}
                className={`border-b border-white/10 py-4 text-lg font-semibold transition hover:text-amber ${isActive(x.href) ? 'text-amber' : 'text-white/80'}`}
              >
                {x.label}
              </Link>
            ))}
          </nav>
          <Link
            className="mt-6 mx-auto block w-fit bg-amber px-10 py-5 text-center text-sm font-extrabold tracking-widest text-coal"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            REQUEST A QUOTE
          </Link>
        </div>
      )}
    </div>
  );
}
