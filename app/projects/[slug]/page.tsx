import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { projects } from '@/data/siteData';
import { ProjectGallery } from '@/components/ui/ProjectGallery';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden pt-20">
        <Image src={project.image} alt="DemStrip demolition work" fill priority sizes="100vw" quality={85} className="-z-20 object-cover object-center opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-coal via-coal/40 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-32 lg:px-10 lg:pb-16 lg:pt-40">
          <p className="eyebrow">{project.category} / {project.location}</p>
          <h1 className="heading mt-5 text-4xl uppercase sm:text-5xl lg:text-8xl">{project.title}</h1>
        </div>
      </section>

      <Section className="pb-0">
        <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold tracking-[.15em] text-white/60 transition hover:-translate-x-1 hover:text-amber">
          <ArrowLeft size={16} /> BACK TO PROJECTS
        </Link>
      </Section>

      <Section className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
        <div>
          <p className="eyebrow">Project overview</p>
          <h2 className="heading mt-5 text-4xl uppercase lg:text-5xl">A considered approach to every site.</h2>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">{project.description}</p>
        </div>
        <aside className="relative overflow-hidden border border-white/15 bg-steel p-7 sm:p-9">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-amber/10 blur-3xl" />
          <div className="relative">
            <p className="eyebrow">Project information</p>
            <p className="mt-7 leading-7 text-white/65">Work is planned around the requirements of each site, with health and safety considerations central to the approach.</p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 text-xs font-bold tracking-[.14em] text-amber transition hover:text-white">DISCUSS A SIMILAR PROJECT <ArrowUpRight size={15} /></Link>
          </div>
        </aside>
      </Section>

      <Section className="border-t border-white/10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Project gallery</p>
            <h2 className="heading mt-4 text-4xl uppercase sm:text-5xl lg:text-6xl">On site.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">Click any image to view it larger.</p>
        </div>
        <div className="mt-10">
          <ProjectGallery images={project.gallery} />
        </div>
      </Section>

      <section className="border-t border-white/10 bg-[#181b1e]">
        <Section className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2 className="heading mt-4 text-4xl uppercase lg:text-5xl">Let&apos;s discuss it.</h2>
          </div>
          <Link href="/contact" className="bg-amber px-6 py-4 text-xs font-extrabold tracking-widest text-coal">DISCUSS YOUR PROJECT <ArrowUpRight className="ml-2 inline-block" size={15} /></Link>
        </Section>
      </section>
    </>
  );
}
