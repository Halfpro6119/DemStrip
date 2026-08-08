import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, ClipboardCheck, MapPinned, Phone, ShieldCheck, Clock, Building2 } from 'lucide-react';
import { company, projects, services } from '@/data/siteData';
import { Section } from '@/components/ui/Section';
import { InteractiveCard } from '@/components/ui/InteractiveCard';
import { ProjectGallery } from '@/components/ui/ProjectGallery';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-grid relative min-h-[620px] overflow-hidden border-b border-white/10 lg:min-h-[800px]">
        <Image src={company.image} alt="DemStrip demolition machinery at work" fill priority sizes="100vw" quality={90} className="object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111315_0%,rgba(17,19,21,.92)_32%,rgba(17,19,21,.48)_65%,rgba(17,19,21,.26)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-coal to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-end px-5 pb-12 pt-32 lg:min-h-[800px] lg:px-10 lg:pb-16">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 eyebrow">
              <span className="h-px w-10 bg-amber" />Demolition / Deconstruction / Site services
            </div>
            <h1 className="heading mt-7 text-[clamp(3.25rem,11vw,9.7rem)] uppercase">
              Demolition.<br />
              <span className="text-amber">Done</span> properly.
            </h1>
            <div className="mt-8 grid max-w-2xl gap-7 border-l border-amber pl-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="text-base leading-7 text-white/75 sm:text-lg">Professional demolition, deconstruction, strip-out and site clearance services from an experienced Norwich-based team operating nationwide.</p>
              <p className="hidden text-right text-[10px] font-bold uppercase tracking-[.2em] text-white/45 sm:block">Est. capability<br />for serious work</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal transition hover:bg-white" href="/contact">REQUEST A QUOTE <ArrowUpRight className="ml-2 inline-block" size={15} /></Link>
              <Link className="border border-white/35 px-6 py-4 text-xs font-extrabold tracking-widest transition hover:border-amber hover:text-amber" href="/services">EXPLORE SERVICES</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[38%] border-l border-t border-white/15 bg-coal/90 backdrop-blur lg:grid lg:grid-cols-3">
          <HeroMeta number="25+" label="Years' experience" />
          <HeroMeta number="UK" label="Nationwide service" />
          <HeroMeta number="01" label="Norwich base" />
        </div>
      </section>

      {/* Trust signals */}
      <Section className="grid gap-12 py-24 lg:grid-cols-3 lg:py-28">
        <TrustSignal icon={<Clock size={26} />} title="25+ years' experience" copy="A direct, professional approach built across decades of demolition and site work." />
        <TrustSignal icon={<Building2 size={26} />} title="Family-run, Norwich-based" copy="A family-run business operating from Norwich with nationwide coverage." />
        <TrustSignal icon={<ShieldCheck size={26} />} title="Safety-first delivery" copy="Work planned around site conditions, scope and the people around it." />
      </Section>

      {/* Intro */}
      <Section className="relative grid gap-12 border-t border-white/10 py-24 lg:grid-cols-[.9fr_1.1fr] lg:py-36">
        <div>
          <p className="eyebrow">01 / The DemStrip standard</p>
          <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-7xl">Experience you can rely on.</h2>
        </div>
        <div className="lg:pt-10">
          <p className="max-w-2xl text-xl leading-9 text-white/72">DemStrip Services Ltd provides demolition, deconstruction and clearance services for projects of all sizes. We bring a direct, professional approach from assessment through to handover.</p>
          <Link className="mt-9 inline-flex items-center gap-2 border-b border-amber pb-2 text-sm font-bold text-amber" href="/about">ABOUT DEMSTRIP <ArrowUpRight size={16} /></Link>
        </div>
        <div className="absolute bottom-0 left-5 hidden h-px w-[calc(100%-40px)] bg-white/10 lg:block" />
      </Section>

      {/* Services */}
      <section className="bg-[#181b1e]">
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div>
              <p className="eyebrow">02 / Capability</p>
              <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-7xl">Built for the<br /><span className="text-amber">next phase.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55">One experienced team for demolition, removal and clearance requirements.</p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map(s => (
              <InteractiveCard key={s.slug} href={`/services/${s.slug}`} className="service-card group relative min-h-[310px] overflow-hidden border border-white/10 p-6 transition hover:border-amber">
                <span className="absolute right-5 top-4 heading text-6xl text-white/[.035] transition group-hover:text-amber/10">{s.number}</span>
                <div className="relative flex h-full flex-col">
                  <p className="text-xs font-bold tracking-[.18em] text-amber">{s.number} / SERVICE</p>
                  <h3 className="heading mt-auto text-3xl uppercase sm:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">{s.summary}</p>
                  <span className="mt-7 flex items-center gap-2 text-xs font-bold tracking-widest text-white">DISCOVER <ArrowDownRight size={16} className="text-amber transition group-hover:translate-x-1 group-hover:translate-y-1" /></span>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </Section>
      </section>

      {/* Featured project */}
      <Section>
        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.3fr_.7fr]">
          <div className="relative min-h-[440px]">
            <Image src={projects[0].image} alt="DemStrip demolition project" fill sizes="(max-width: 1024px) 100vw, 65vw" quality={88} className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="eyebrow">03 / Selected work</p>
              <h2 className="heading mt-3 text-4xl uppercase sm:text-5xl">Proven on site.</h2>
            </div>
          </div>
          <div className="flex flex-col bg-steel p-8">
            <p className="eyebrow">{projects[0].category}</p>
            <h3 className="heading mt-5 text-3xl uppercase sm:text-4xl">{projects[0].title}</h3>
            <p className="mt-4 text-white/55">{projects[0].location}</p>
            <p className="mt-10 text-sm leading-7 text-white/60">A visual record of DemStrip&apos;s demolition and site-clearance capability.</p>
            <Link className="mt-auto inline-flex items-center gap-2 pt-12 text-sm font-bold text-amber" href="/projects">VIEW PROJECTS <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">04 / On site</p>
            <h2 className="heading mt-4 text-4xl uppercase sm:text-5xl lg:text-6xl">Real work.<br /><span className="text-amber">Real photographs.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">See the care, control and site capability behind every DemStrip project.</p>
        </div>
        <div className="mt-10">
          <ProjectGallery images={projects[0].gallery} />
        </div>
      </Section>

      {/* Process */}
      <section className="border-y border-white/10 bg-[#181b1e]">
        <Section>
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div>
              <p className="eyebrow">05 / How we work</p>
              <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-7xl">A clear route from<br /><span className="text-amber">first call to handover.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/55">The right approach starts with understanding the site and what needs to happen next.</p>
          </div>
          <div className="mt-12 grid divide-y divide-white/10 border-y border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {[
              { number: '01', title: 'Speak to the team', copy: 'Tell us about the site, the works required and the outcome you need.', icon: <Phone size={22} /> },
              { number: '02', title: 'Plan the approach', copy: 'We discuss the project requirements, access and the conditions that shape the works.', icon: <MapPinned size={22} /> },
              { number: '03', title: 'Deliver with control', copy: 'The team carries out the agreed works with clear communication throughout.', icon: <ClipboardCheck size={22} /> }
            ].map(step => (
              <div className="group p-7 lg:p-9" key={step.number}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[.2em] text-amber">{step.number}</span>
                  <span className="text-white/45 transition group-hover:text-amber">{step.icon}</span>
                </div>
                <h3 className="heading mt-14 text-3xl uppercase">{step.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">{step.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <p className="text-sm text-white/55">Have a project in mind? Speak directly with the DemStrip team.</p>
            <a className="inline-flex items-center gap-2 text-xs font-bold tracking-[.15em] text-amber transition hover:text-white" href={company.phoneHref}>CALL {company.phone} <ArrowUpRight size={15} /></a>
          </div>
        </Section>
      </section>

      {/* Safety */}
      <section className="border-y border-white/10 bg-[#101214]">
        <Section className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">06 / Controlled delivery</p>
            <h2 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-7xl">Safety is not an<br /><span className="text-amber">afterthought.</span></h2>
          </div>
          <div className="border-l border-white/15 pl-7 lg:pt-5">
            <ShieldCheck className="text-amber" size={38} />
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">Work is planned around the needs of the site, the scope and the people around it. Controlled working practices and clear communication underpin every project.</p>
            <Link href="/health-safety" className="mt-8 inline-block text-sm font-bold text-amber">OUR HEALTH &amp; SAFETY APPROACH &rarr;</Link>
          </div>
        </Section>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src={company.image} alt="DemStrip demolition machinery at work" fill sizes="100vw" quality={85} className="object-cover opacity-30" />
        <div className="relative bg-coal/80">
          <Section className="py-32">
            <p className="eyebrow">Start the conversation</p>
            <h2 className="heading mt-5 max-w-5xl text-4xl uppercase sm:text-5xl lg:text-8xl">Planning a project?</h2>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal" href="/contact">REQUEST A QUOTE</Link>
              <a className="flex items-center gap-2 border border-white/30 px-6 py-4 text-xs font-extrabold tracking-widest" href={company.phoneHref}><Phone size={15} /> CALL OUR TEAM</a>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}

function HeroMeta({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-5">
      <p className="heading text-3xl text-amber">{number}</p>
      <p className="mt-1 text-[9px] font-bold uppercase tracking-[.14em] text-white/55">{label}</p>
    </div>
  );
}

function TrustSignal({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="group flex gap-4">
      <span className="text-amber transition group-hover:scale-110">{icon}</span>
      <div>
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-white/55">{copy}</p>
      </div>
    </div>
  );
}
