import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import PanelWipe from '@/components/motion/PanelWipe';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import DentistCard from '@/components/sections/dentists/DentistCard';
import { CLINIC_INFO, DENTISTS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Sobre o Consultório | Our Doctor',
  description:
    'Conheça o Consultório Odontológico Our Doctor em Manaus: referência em implantes de carga imediata em 1 dia, odontologia domiciliar e aparelhos ortodônticos.',
  pathname: '/about/',
});

const TIMELINE = [
  {
    year: '2012',
    title: 'Fundação do Consultório em Manaus',
    description: 'Our Doctor estabelece a clínica com foco em reabilitação oral, implantodontia de excelência e atendimento odontológico domiciliar.',
  },
  {
    year: '2016',
    title: 'Pioneirismo em Carga Imediata',
    description: 'Implementação de protocolos avançados de implantes com carga imediata, permitindo a restauração do sorriso em 1 dia com alta previsibilidade.',
  },
  {
    year: '2020',
    title: 'Expansão do Atendimento Domiciliar',
    description: 'Estruturação de consultório portátil completo para levar tratamento odontológico humanizado e com biossegurança ao lar de pacientes com dificuldades de locomoção.',
  },
  {
    year: '2024',
    title: 'Excelência em Ortodontia & Estética',
    description: 'Integração de aparelhos estéticos, alinhadores e novos protocolos de clareamento e restaurações estéticas com a equipe odontológica.',
  },
];

const APPROACH_STEPS = [
  {
    title: 'Diagnóstico e Planejamento Preciso',
    description: 'Avaliação clínica minuciosa com foco nas reais necessidades do paciente, oferecendo soluções ágeis e eficientes.',
  },
  {
    title: 'Transparência e Custo-Benefício',
    description: 'Planos de tratamento detalhados, valores justos e acessíveis e orientações claras sobre cada etapa antes do procedimento.',
  },
  {
    title: 'Sorriso em 1 Dia com Carga Imediata',
    description: 'Técnicas modernas de implantes que devolvem a função mastigatória e a estética com rapidez e conforto.',
  },
  {
    title: 'Atendimento Humanizado no Consultório & Domiciliar',
    description: 'Cuidado atencioso, seguro e acolhedor na clínica ou no conforto da sua residência em Manaus.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Sobre Nós', path: '/about/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 font-medium uppercase tracking-wider">
                  Sobre o Consultório
                </span>
                <WordRevealH1 text="Compromisso com seu sorriso, agilidade e excelência técnica." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Na Dental Studio, Our Doctor atende pacientes que buscam tratamentos modernos de implantes de carga imediata, aparelhos ortodônticos e atendimento odontológico acolhedor em Manaus." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Fundação</span>
                    <span className="font-medium text-forest">{CLINIC_INFO.establishedYear}</span>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Responsável Técnico</span>
                    <span className="font-medium text-forest">Our Doctor</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registro</span>
                    <span className="font-medium text-forest">CRO-AM</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <PanelWipe className="py-20 md:py-32">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-2xl mb-16">
              <span className="font-body text-13 text-paper/60 uppercase tracking-wider block mb-2 font-medium">
                Trajetória da Prática
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Nossa Evolução Clínica
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="relative border-l border-mist/30 pl-8 md:pl-12 space-y-12 max-w-3xl">
            {TIMELINE.map((item, idx) => (
              <AnimateOnScroll
                key={item.year}
                animation="fade-up"
                delay={idx * 0.1}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-forest border-2 border-lime flex items-center justify-center" />
                <span className="font-display text-21 text-lime block mb-1">
                  {item.year}
                </span>
                <h3 className="font-display text-21 md:text-26 text-paper mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-15 text-paper/80 leading-relaxed">
                  {item.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </PanelWipe>

      {/* SECTION 3: Our Approach */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-16">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Diferenciais do Consultório
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Quatro pilares do nosso atendimento
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {APPROACH_STEPS.map((step, idx) => (
              <AnimateOnScroll
                key={step.title}
                animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={idx * 0.1}
              >
                <div className="p-8 border border-mist bg-paper flex flex-col justify-between h-full hover:border-forest/40 transition-colors shadow-sm">
                  <div>
                    <span className="font-body text-13 text-forest block mb-3 font-medium">
                      Pilar 0{idx + 1}
                    </span>
                    <h3 className="font-display text-21 md:text-26 text-forest-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Doctor */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Profissional
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink">
                  Our Doctor
                </h2>
              </div>
              <Link
                href="/dentists/"
                className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
              >
                Ver perfil detalhado →
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-10 max-w-xl mx-auto">
            {DENTISTS.map((dentist, idx) => (
              <DentistCard key={dentist.id} dentist={dentist} offsetY={idx === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Clinic Facilities (with Media Parallax) */}
      <section className="py-20 md:py-32 border-b border-mist overflow-hidden">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Estrutura Clínica
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Equipamentos modernos e ambiente acolhedor
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                  Nosso consultório em Manaus conta com ambiente esterilizado e equipamentos modernos para procedimentos cirúrgicos de implantes, restaurações, canal e ortodontia com total segurança biológica.
                </p>
                <div className="space-y-2 font-body text-13 text-forest-ink/70">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Protocolos rigorosos de biossegurança e esterilização</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Equipamentos portáteis especializados para odontologia domiciliar</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.08} className="w-full h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                      alt="Sala de atendimento odontológico da Clínica EODONTO"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                    Consultório Odontológico
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Visual Tour */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Ambiente Clínico
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Nosso Espaço em Manaus
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="zoom-in" delay={0.1}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                  alt="Área de espera da clínica"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Recepção
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.2}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                  alt="Banheiro da clínica"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Consultório
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" delay={0.3}>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1594824813583-e18e3848b814?auto=format&fit=crop&q=80&w=800"
                  alt="Entrada da Clínica EODONTO"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-2.5 py-0.5 border border-mist/50">
                  Fachada
                </div>
              </div>
            </AnimateOnScroll>
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
                Agende sua avaliação com a equipe odontológica
              </h2>
              <p className="font-body text-15 text-paper/80 mt-2 max-w-xl">
                Atendimento no consultório em Manaus e serviço de odontologia domiciliar com agilidade e qualidade.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book-appointment/" variant="lime" size="lg">
                Solicitar Agendamento
              </Button>
              <Button href="/contact/" variant="ghost" size="lg" className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10">
                Ver Contatos
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
