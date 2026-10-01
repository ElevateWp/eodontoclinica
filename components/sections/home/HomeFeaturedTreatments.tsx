import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#542F0C] block mb-2 font-medium uppercase tracking-wider">
            Casos em Destaque
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#542F0C]">
            Tratamentos e reconstruções clínicas
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Featured Case 1: Guided Dental Implantology & Immediate Load */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#542F0C] uppercase tracking-wider block mb-2 font-medium">
                Dra. Fernanda • Implantes & Carga Imediata
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#542F0C] mb-4">
                Implantes Carga Imediata: Seu Sorriso Recuperado em 1 Dia
              </h3>
              <p className="font-body text-15 md:text-17 text-[#542F0C]/80 leading-relaxed mb-6">
                Com a técnica de carga imediata, a equipe odontológica restabelece dentes perdidos e a segurança do sorriso em apenas 1 dia, proporcionando agilidade, estética e recuperação rápida.
              </p>
              <div className="p-4 bg-[#FAF7F0] border-l-4 border-[#542F0C] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#542F0C]/80">
                  <strong className="text-[#542F0C] font-semibold">Destaque:</strong> Recuperação rápida da função mastigatória e autoestima sem esperas prolongadas.
                </span>
              </div>
              <Button href="/dental-implants/" variant="ghost" size="md">
                Saiba mais sobre Implantes
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
                  alt="Imagem ilustrativa de atendimento odontológico"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Featured Case 2: Orthodontics and Specialized Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                  alt="Identidade visual EODONTO"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#542F0C] uppercase tracking-wider block mb-2 font-medium">
                Dra. Fernanda • Ortodontia & Especialidades
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#542F0C] mb-4">
                Aparelhos Ortodônticos e Cuidado Minucioso
              </h3>
              <p className="font-body text-15 md:text-17 text-[#542F0C]/80 leading-relaxed mb-6">
                Planejamento ortodôntico de precisão e tratamentos restauradores conduzidos com extrema atenção e competência pela equipe odontológica, garantindo alinhamento e saúde bucal completa.
              </p>
              <div className="p-4 bg-[#FAF7F0] border-l-4 border-[#542F0C] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#542F0C]/80">
                  <strong className="text-[#542F0C] font-semibold">Resultado:</strong> Harmonia do sorriso, mordida equilibrada e atendimento acolhedor.
                </span>
              </div>
              <Button href="/braces/" variant="ghost" size="md">
                Saiba mais sobre Aparelhos
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
