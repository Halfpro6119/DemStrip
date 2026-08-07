import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { services } from '@/data/siteData';

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default function Service({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <PageHero eyebrow={`${service.number} / Service`} title={service.title} copy={service.summary} />
      <Section className="pb-0">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-[.15em] text-white/60 transition hover:-translate-x-1 hover:text-amber">
          <ArrowLeft size={16} /> BACK TO SERVICES
        </Link>
      </Section>
      <Section className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
        <div>
          <p className="eyebrow">What this involves</p>
          <h2 className="heading mt-5 text-3xl uppercase sm:text-4xl lg:text-5xl">A considered approach for every site.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{service.detail}</p>
          <p className="mt-6 max-w-2xl leading-7 text-white/60">The team will discuss requirements, site conditions and the appropriate scope before work is planned. Health and safety considerations are central to this process.</p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 border-b border-amber pb-2 text-sm font-bold text-amber transition hover:text-white">DISCUSS YOUR REQUIREMENTS <ArrowUpRight size={15} /></Link>
        </div>
        <aside className="relative overflow-hidden border border-white/15 bg-steel p-7 sm:p-9">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-amber/10 blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Suitable for</p>
            <ul className="mt-7 grid gap-5">
              {service.suitable.map(x => (
                <li key={x} className="flex items-center gap-3 border-b border-white/10 pb-5 text-lg text-white/85">
                  <Check className="shrink-0 text-amber" size={20} /> {x}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Section>
      <section className="border-t border-white/10 bg-[#181b1e]">
        <Section className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Discuss your requirements</p>
            <h2 className="heading mt-4 text-3xl uppercase sm:text-4xl lg:text-5xl">Plan with confidence.</h2>
          </div>
          <Link href="/contact" className="bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal">REQUEST A QUOTE <ArrowUpRight className="ml-2 inline-block" size={15} /></Link>
        </Section>
      </section>
    </>
  );
}
