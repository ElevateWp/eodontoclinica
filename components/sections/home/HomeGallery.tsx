import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#542F0C] block mb-2 font-medium uppercase tracking-wider">
            Nossa Estrutura
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#542F0C]">
            Clínica EODONTO em Manaus — Chapada
          </h2>
        </AnimateOnScroll>

        {/* Asymmetric Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Item 1: Dra. Fernanda portrait */}
          <AnimateOnScroll animation="fade-right" duration={0.85} className="md:col-span-5 min-h-[380px] md:min-h-[440px] relative bg-[#FAF7F0] overflow-hidden border border-[#E9DCC2] shadow-sm">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&w=1400&q=85"
                alt="Imagem ilustrativa de atendimento odontológico"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#542F0C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Dra. Fernanda
            </div>
          </AnimateOnScroll>

          {/* Item 2: Treatment room */}
          <AnimateOnScroll animation="fade-down" duration={0.85} className="md:col-span-7 min-h-[380px] md:min-h-[440px] relative bg-[#E9DCC2] overflow-hidden border border-[#E9DCC2] shadow-sm">
            <MediaParallax speed={0.08} className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=85"
                alt="Sala de tratamento odontológico da Clínica EODONTO"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#542F0C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Sala de Tratamento Odontológico
            </div>
          </AnimateOnScroll>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Item 3: Consultation office */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} className="aspect-[4/3] relative bg-[#E9DCC2] overflow-hidden border border-[#E9DCC2] shadow-sm">
            <MediaParallax speed={0.05} className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                alt="Recepção da Clínica EODONTO"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#542F0C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Recepção EODONTO
            </div>
          </AnimateOnScroll>

          {/* Item 4: Clinic identity wall */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1} className="aspect-[4/3] relative bg-[#E9DCC2] overflow-hidden border border-[#E9DCC2] shadow-sm">
            <MediaParallax speed={0.07} className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85"
                alt="Identidade visual EODONTO"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#542F0C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Identidade EODONTO
            </div>
          </AnimateOnScroll>

          {/* Item 5: Kids area */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2} className="aspect-[4/3] relative bg-[#FAF7F0] overflow-hidden border border-[#E9DCC2] shadow-sm sm:col-span-2 md:col-span-1">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
                alt="Espaço infantil da clínica"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#542F0C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Espaço infantil
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
