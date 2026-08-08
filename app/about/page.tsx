import Link from 'next/link';
import { ArrowUpRight, Clock, Building2, ShieldCheck, Zap } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata = { title: 'About' };

const values = [
  { icon: <ShieldCheck size={28} />, label: 'Professionalism', copy: 'A direct, considered approach from first call to handover.' },
  { icon: <Clock size={28} />, label: 'Safety', copy: 'Work planned around site conditions, scope and surroundings.' },
  { icon: <Building2 size={28} />, label: 'Reliability', copy: 'Clear communication and dependable delivery on every project.' },
  { icon: <Zap size={28} />, label: 'Efficiency', copy: 'Work structured to keep the next phase of your project moving.' }
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About DemStrip" title="Experience built on site." copy="A family-run business based in Norwich, providing demolition, deconstruction and site services nationwide." />
      <Section className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">The company</p>
          <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-6xl">Direct, professional, reliable.</h2>
        </div>
        <div className="lg:pt-8">
          <p className="text-lg leading-8 text-white/70">DemStrip Services Ltd is a family-run business with more than 25 years of industry experience. The company works across commercial, residential, education, industrial, domestic and public-sector settings, tailoring its approach to the requirements of each project.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-amber pb-2 text-sm font-bold text-amber transition hover:text-white">TELL US ABOUT YOUR PROJECT <ArrowUpRight size={15} /></Link>
        </div>
      </Section>
      <Section className="border-y border-white/10 py-0">
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {values.map((v, i) => (
            <div className="group bg-coal p-8 transition hover:bg-[#1a1d20]" key={v.label}>
              <p className="eyebrow">0{i + 1}</p>
              <span className="mt-12 block text-amber transition group-hover:scale-110">{v.icon}</span>
              <h2 className="heading mt-6 text-3xl uppercase">{v.label}</h2>
              <p className="mt-3 text-sm leading-6 text-white/55">{v.copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <p className="eyebrow">Coverage</p>
        <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl">Norwich based.<br /><span className="text-amber">Nationwide capability.</span></h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Based in Norwich, DemStrip offers a nationwide service. Contact the team to discuss your location and requirements.</p>
        <Link href="/contact" className="mt-8 inline-flex bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal transition hover:bg-white">TELL US ABOUT YOUR PROJECT <ArrowUpRight className="ml-2 inline-block" size={15} /></Link>
      </Section>
    </>
  );
}
