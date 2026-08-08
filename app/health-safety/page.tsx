import { ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export const metadata = { title: 'Health & Safety' };

const points = [
  'Site-specific planning',
  'Risk assessment and method statements',
  'Appropriate PPE and controlled working environments',
  'Professional management of waste and materials'
];

export default function Safety() {
  return (
    <>
      <PageHero eyebrow="Health & Safety" title="Safety at the core of every project." copy="A professional approach starts with careful preparation and responsible delivery." />
      <Section className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Our approach</p>
          <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-6xl">Planned around the site.</h2>
          <ShieldCheck className="mt-8 text-amber" size={42} />
          <p className="mt-7 text-lg leading-8 text-white/70">Demolition and clearance work needs a considered approach. DemStrip plans work around the project requirements, site conditions and the people working nearby.</p>
        </div>
        <ul className="grid gap-3">
          {points.map((p, i) => (
            <li className="group flex items-start gap-5 border border-white/15 p-6 transition hover:border-amber/40 hover:bg-white/[.015]" key={p}>
              <span className="heading text-2xl text-amber">0{i + 1}</span>
              <span className="pt-1 text-base leading-7 text-white/80 sm:text-lg">{p}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="border-t border-white/10">
        <p className="eyebrow">Important note</p>
        <p className="mt-4 max-w-3xl leading-7 text-white/60">Specific certifications, licences and project documentation should be confirmed with DemStrip for the individual scope of works. No accreditations are represented here without verification.</p>
      </Section>
    </>
  );
}
