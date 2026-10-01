import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { DENTISTS, SERVICES, CLINIC_INFO } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Equipe Clínica | Dra. Fernanda',
  description:
    'Conheça a Dra. Fernanda, da EODONTO Clínica Odontológica em Manaus.',
  pathname: '/dentists/',
});

export default function DentistsPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Dra. Fernanda', path: '/dentists/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  Equipe Odontológica
                </span>
                <WordRevealH1 text="Atendimento odontológico dedicado, ágil e humanizado." />
                <div className="mt-8">
                  <ScrubbedParagraph text="A Dra. Fernanda atende na EODONTO Clínica Odontológica, oferecendo cuidado odontológico acolhedor em Manaus." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-2 font-body text-13 text-forest-ink/80 shadow-sm">
                  <span className="font-medium text-forest block">Atendimento odontológico</span>
                  <p className="text-forest-ink/70">
                    Atendimento odontológico na EODONTO Clínica Odontológica.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dentist Profiles */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Perfil do Profissional
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Dra. Fernanda
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-10 max-w-xl mx-auto pb-8">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard
                key={dentist.id}
                dentist={dentist}
                offsetY={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Areas of Expertise */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Atuação Clínica
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Áreas de Atuação
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Implantes & Carga Imediata
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Técnica de carga imediata que pode trazer seu sorriso em 1 dia, sob responsabilidade da equipe odontológica.
                  </p>
                </div>
                <Link href="/dental-implants/" className="font-body text-13 text-forest font-medium hover:underline">
                  Ver Implantes →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Odontologia Domiciliar
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Atendimento domiciliar humanizado e completo em Manaus para pacientes que necessitam de cuidados em casa.
                  </p>
                </div>
                <Link href="/contact/" className="font-body text-13 text-forest font-medium hover:underline">
                  Atendimento Domiciliar →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Aparelhos Ortodônticos
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Aparelhos metálicos, estéticos e alinhadores para todas as idades com a equipe odontológica.
                  </p>
                </div>
                <Link href="/braces/" className="font-body text-13 text-forest font-medium hover:underline">
                  Ver Ortodontia →
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-paper border border-mist h-full flex flex-col justify-between hover:border-forest/40 transition-colors shadow-sm">
                <div>
                  <h3 className="font-display text-21 text-forest-ink mb-3">
                    Estética & Restaurações
                  </h3>
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed mb-4">
                    Clareamento dental, facetas, restaurações estéticas e reabilitação oral.
                  </p>
                </div>
                <Link href="/cosmetic-dentistry/" className="font-body text-13 text-forest font-medium hover:underline">
                  Ver Estética →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 4: Education & Qualifications */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Perfil profissional
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Informações profissionais
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-mist border-t border-b border-mist">
            {DENTISTS.map((d, idx) => (
              <AnimateOnScroll key={d.id} animation="fade-up" delay={idx * 0.15}>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-21 md:text-26 text-forest-ink">
                      {d.name}
                    </h3>
                    <span className="font-body text-13 text-forest font-medium">{d.title}</span>
                  </div>
                  <div className="lg:col-span-8 space-y-2 font-body text-15 text-forest-ink/80">
                    {d.education.map((edu, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-2">
                        <span className="text-forest mt-1">•</span>
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Treatment Philosophy */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Compromisso com o Paciente
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                Nosso Compromisso Clínico
              </h2>
              <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8">
                Priorizamos o atendimento atencioso, a clareza nas orientações e a busca pelo melhor custo-benefício em cada plano de tratamento, seja no consultório ou na comodidade do atendimento domiciliar.
              </p>
              <div className="p-6 bg-mist/40 border-l-2 border-forest shadow-sm">
                <span className="font-body text-15 text-forest-ink/80 block italic">
                  “Implantes carga imediata pode trazer seu sorriso em 1 dia — unindo tecnologia, agilidade e o acolhimento que você merece.”
                </span>
                <span className="font-body text-13 text-forest block mt-2 font-medium">
                  — EODONTO Clínica Odontológica
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 6: Related Treatments */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Tratamentos Oferecidos
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Procedimentos Clínicos
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((s, idx) => (
              <AnimateOnScroll key={s.slug} animation="zoom-in" delay={idx * 0.05}>
                <Link
                  href={`/${s.slug}/`}
                  className="p-4 bg-paper border border-mist hover:border-forest transition-all flex flex-col justify-between h-32 hover:shadow-sm"
                >
                  <span className="font-display text-17 text-forest-ink leading-tight">
                    {s.navLabel}
                  </span>
                  <span className="font-body text-13 text-forest font-medium">
                    Saiba mais →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Agendamento
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Agende sua consulta com a equipe odontológica
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Solicitar Agendamento
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
