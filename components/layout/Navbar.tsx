'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, nav } from '@/data/siteData';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-coal/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="heading text-2xl tracking-[-.09em] transition hover:text-white">
          DEM<span className="text-amber">STRIP</span>
          <small className="ml-2 font-body text-[9px] tracking-[.2em] text-white/50">SERVICES LTD</small>
        </Link>
        <nav className="hidden gap-6 text-sm text-white/75 lg:flex">
          {nav.map(x => (
            <Link
              key={x.href}
              className={`focus-ring transition hover:text-white ${isActive(x.href) ? 'text-white' : ''}`}
              href={x.href}
            >
              {x.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a className="text-sm font-bold transition hover:text-amber" href={company.phoneHref}>{company.phone}</a>
          <Link className="bg-amber px-5 py-3 text-xs font-extrabold tracking-wider text-coal hover:bg-white" href="/contact">
            REQUEST A QUOTE
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
