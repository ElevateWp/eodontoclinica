import React from 'react';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

export default function HomeFinalCTA() {
  return (
    <section className="w-full bg-forest text-paper py-28 md:py-40 overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
        <AnimateOnScroll animation="fade-up" duration={0.85}>
          <h2 className="font-display text-41 sm:text-52 md:text-65 text-paper max-w-3xl leading-[1.05] tracking-[-0.03em] font-normal mb-8 mx-auto">
            Recupere a confiança do seu sorriso com nossa equipe especializada.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.15}>
          <p className="font-body text-17 md:text-21 text-paper/80 leading-relaxed max-w-xl mb-10 mx-auto">
            Entre em contato com a Clínica Odontológica EODONTO, em Chapada, Manaus, Amazonas.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="zoom-in" duration={0.85} delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-appointment/" variant="lime" size="lg">
              Agendar Avaliação Online
            </Button>
            <Button
              href={`https://api.whatsapp.com/send?phone=5592991487679`}
              variant="ghost"
              size="lg"
              className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
            >
              WhatsApp {CLINIC_INFO.contact.phone}
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
