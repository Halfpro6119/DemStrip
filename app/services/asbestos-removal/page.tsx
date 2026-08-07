import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export const metadata = { title: 'Asbestos Removal' };

const services = [
  'Artex removal', 'Asbestos floor tile removal', 'Asbestos cement removal',
  'Asbestos garage removal', 'Asbestos soffit removal', 'Asbestos contaminated land',
  'Asbestos surveys', 'Asbestos encapsulation', 'Asbestos collection & disposal'
];

export default function AsbestosRemoval() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 pt-20">
        <Image src="/images/asbestos-removal.jpg" alt="Corrugated asbestos cement roof" fill priority sizes="100vw" quality={90} className="-z-20 object-cover object-center opacity-45" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#111315_0%,rgba(17,19,21,.92)_46%,rgba(17,19,21,.45)_100%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-36">
          <p className="eyebrow">Specialists in</p>
          <h1 className="heading mt-7 max-w-5xl text-5xl uppercase sm:text-6xl lg:text-8xl">Asbestos<br /><span className="text-amber">removal.</span></h1>
          <div className="mt-8 max-w-2xl border-l border-amber pl-5">
            <p className="text-lg leading-8 text-white/75">Experienced support for the management, removal and disposal of asbestos material across domestic and commercial projects.</p>
          </div>
        </div>
      </section>

      <Section className="pb-0">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-[.15em] text-white/60 transition hover:-translate-x-1 hover:text-amber">
          <ArrowLeft size={16} /> BACK TO SERVICES
        </Link>
      </Section>

      <Section className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div>
          <p className="eyebrow">The service</p>
          <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl">Experienced from<br /><span className="text-amber">survey to disposal.</span></h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">DemStrip Services Ltd has a wealth of knowledge and experience in managing the removal and disposal of asbestos material, from small domestic works up to large commercial projects.</p>
          <p className="mt-6 max-w-2xl leading-7 text-white/60">We provide non-notifiable asbestos removal, planned around the requirements of the individual site.</p>
        </div>
        <aside className="relative overflow-hidden border border-white/15 bg-steel p-7 sm:p-9">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-amber/10 blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Our commitment</p>
            <p className="mt-7 text-xl leading-8 text-white/75">All our staff are fully trained and receive asbestos-awareness training that is regularly updated.</p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] text-amber transition hover:text-white">DISCUSS YOUR REQUIREMENTS <ArrowUpRight size={15} /></Link>
          </div>
        </aside>
      </Section>

      <Section className="border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">What we provide</p>
            <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl">Non-notifiable<br /><span className="text-amber">asbestos removal.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">Talk to the team about your requirements and the appropriate scope for the works.</p>
        </div>
        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div className="group bg-coal p-6 transition hover:bg-[#1a1d20]" key={service}>
              <p className="text-[10px] font-bold tracking-[.18em] text-amber">0{index + 1}</p>
              <div className="mt-10 flex items-start gap-3">
                <Check className="mt-0.5 shrink-0 text-amber" size={18} />
                <h3 className="text-lg font-semibold leading-6 text-white/85">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#181b1e]">
        <Image src="/images/asbestos-removal.jpg" alt="Asbestos cement roof surface" fill sizes="100vw" quality={80} className="object-cover opacity-15" />
        <div className="relative">
          <Section className="py-24 lg:py-32">
            <p className="eyebrow">Speak to a specialist</p>
            <h2 className="heading mt-5 max-w-4xl text-4xl uppercase sm:text-5xl lg:text-7xl">Need to discuss<br /><span className="text-amber">asbestos removal?</span></h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Tell us about the property and the work required, and the team can discuss the next steps.</p>
            <Link className="mt-9 inline-flex bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal transition hover:bg-white" href="/contact">CONTACT DEMSTRIP</Link>
          </Section>
        </div>
      </section>
    </>
  );
}
