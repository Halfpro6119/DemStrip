import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { services } from '@/data/siteData';
import { InteractiveCard } from '@/components/ui/InteractiveCard';

export const metadata = { title: 'Services' };

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Capability" title="Specialist services." copy="Demolition, deconstruction and clearance services delivered with a professional approach." />
      <Section>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-10">
          <p className="max-w-xl text-lg leading-8 text-white/65">Our services are planned around each site, its constraints and its next phase. Talk to the team about the work you need delivered.</p>
          <Link href="/contact" className="border-b border-amber pb-2 text-sm font-bold text-amber">REQUEST A QUOTE</Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <InteractiveCard key={s.slug} href={`/services/${s.slug}`} className="service-card group relative flex min-h-[330px] flex-col overflow-hidden border border-white/10 p-7 transition hover:border-amber">
              <p className="text-xs font-bold tracking-[.18em] text-amber">{s.number} / SERVICE</p>
              <p className="absolute right-6 top-3 heading text-7xl text-white/[.035]">{s.number}</p>
              <h2 className="heading mt-auto text-3xl uppercase sm:text-4xl">{s.title}</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/65">{s.summary}</p>
              <span className="mt-8 flex items-center gap-2 text-xs font-bold tracking-widest">VIEW SERVICE <ArrowDownRight size={16} className="text-amber transition group-hover:translate-x-1 group-hover:translate-y-1" /></span>
            </InteractiveCard>
          ))}
        </div>
      </Section>
      <section className="border-t border-white/10 bg-[#181b1e]">
        <Section className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Not sure where to start?</p>
            <h2 className="heading mt-4 text-3xl uppercase sm:text-4xl lg:text-5xl">Tell us about your site.</h2>
          </div>
          <Link href="/contact" className="bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal">REQUEST A QUOTE <ArrowUpRight className="ml-2 inline-block" size={15} /></Link>
        </Section>
      </section>
    </>
  );
}
