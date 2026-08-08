import { Phone, MapPin, Clock3, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/contact/ContactForm';
import { company } from '@/data/siteData';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact DemStrip" title="Let&apos;s discuss your project." copy="Tell us what you need and our team will get back to you to discuss the project." />
      <Section className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
        <aside>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="heading mt-5 text-3xl uppercase sm:text-4xl">Clear answers.<br /><span className="text-amber">Proper planning.</span></h2>
          <div className="mt-10 grid gap-0 border-t border-white/15">
            <ContactDetail icon={<Phone size={20} />} label="Telephone">
              <a className="text-xl font-bold text-amber transition hover:text-white" href={company.phoneHref}>{company.phone}</a>
            </ContactDetail>
            <ContactDetail icon={<MapPin size={20} />} label="Base">
              <a className="leading-7 text-white/70 underline decoration-amber/60 underline-offset-4 transition hover:text-amber" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">{company.address}</a>
            </ContactDetail>
            <ContactDetail icon={<Clock3 size={20} />} label="Opening hours">
              <p className="leading-7 text-white/70">{company.hours.map(x => <span className="block" key={x}>{x}</span>)}</p>
            </ContactDetail>
          </div>
          <p className="mt-8 text-xs leading-5 text-white/40">For urgent or time-sensitive requirements, please call the team directly.</p>
        </aside>
        <div className="border border-white/10 bg-[#181b1e] p-6 sm:p-9">
          <p className="eyebrow">Request a quote</p>
          <h2 className="heading mt-4 text-3xl uppercase sm:text-4xl">Tell us about the works.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">Share the essentials and we&apos;ll have the right context to discuss your requirements.</p>
          <div className="mt-8 border-t border-white/10 pt-8">
            <ContactForm />
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="overflow-hidden border border-white/10 bg-[#181b1e]">
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="eyebrow">Find us</p>
              <h2 className="heading mt-2 text-2xl uppercase sm:text-3xl">Visit our Norwich base.</h2>
            </div>
            <a className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-amber transition hover:text-white" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Open DemStrip on Google Maps <ArrowUpRight size={15} /></a>
          </div>
          <div className="aspect-[16/9] min-h-[320px] bg-steel">
            <iframe title="Google Map for DemStrip Services Ltd in Norwich" src={company.mapsEmbedUrl} className="h-full w-full border-0 grayscale-[20%] contrast-[.9]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactDetail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-4 border-b border-white/15 py-6 transition hover:bg-white/[.015]">
      <span className="mt-1 text-amber">{icon}</span>
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/45">{label}</p>
        {children}
      </div>
    </div>
  );
}
