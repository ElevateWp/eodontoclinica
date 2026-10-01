'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { MOTION, isReducedMotion } from '@/lib/motion';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const words = wordsRef.current.filter(Boolean);

    const tl = gsap.timeline({
      delay: 0.5,
    });

    // 0.50s H1 word reveal
    if (words.length > 0) {
      tl.fromTo(
        words,
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out',
        }
      );
    }

    // Supporting paragraph fades up
    if (paraRef.current) {
      tl.fromTo(
        paraRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    // Actions arrive with scale
    if (actionsRef.current) {
      tl.fromTo(
        actionsRef.current.children,
        { scale: 0.95, opacity: 0, y: 10 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Dentist info slides in from right
    if (infoRef.current) {
      tl.fromTo(
        infoRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }

    // Location line
    if (locationRef.current) {
      tl.fromTo(
        locationRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.3'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  const headline = 'Restorative dentistry shaped by clinical precision and calm.';
  const headlineWords = headline.split(' ');

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-paper overflow-hidden py-12 sm:py-16 md:py-24"
    >
      <Image
        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=2200&q=85"
        alt="Sala de atendimento da Clínica EODONTO"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] grayscale sepia-[0.2]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/95 via-[#FFFFFF]/90 to-[#FFFFFF]/80 md:from-[#FFFFFF]/95 md:via-[#FFFFFF]/90 md:to-[#FFFFFF]/78"
      />

      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Columns 1–8: Left-aligned H1, Paragraph, Actions */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Semantic Single H1 */}
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D99A00]" />
              <span className="font-body text-[11px] text-[#806344] uppercase tracking-[0.14em]">
                Your smile. Our priority.
              </span>
            </div>
            <h1
              ref={h1Ref}
              aria-label={headline}
              className="font-display text-[#542F0C] text-33 sm:text-41 md:text-52 lg:text-65 xl:text-81 leading-[1.05] tracking-[-0.03em] font-normal mb-6 md:mb-8 max-w-4xl"
            >
              {headlineWords.map((word, idx) => (
                <React.Fragment key={idx}>
                  <span className="inline-block overflow-hidden align-top pb-[0.08em] mr-[0.24em] last:mr-0">
                    <span
                      ref={(el) => {
                        if (el) wordsRef.current[idx] = el;
                      }}
                      className={`inline-block will-change-transform ${['shaped', 'by', 'clinical'].includes(word) ? 'text-[#D99A00]' : ''}`}
                    >
                      {word}
                    </span>
                  </span>
                  {(idx === 1 || idx === 4) && (
                    <br className="hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </h1>

            <p
              ref={paraRef}
              className="font-body text-15 sm:text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-8 md:mb-10 max-w-2xl"
            >
              A Clínica Odontológica EODONTO oferece atendimento odontológico em Chapada, Manaus.
            </p>

            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <Button href="/book-appointment/" variant="forest" size="lg" className="w-full sm:w-auto font-medium">
                Agendar Consulta
              </Button>
              <Button
                href={`https://api.whatsapp.com/send?phone=5592991487679`}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto font-medium"
              >
                WhatsApp {CLINIC_INFO.contact.phone}
              </Button>
            </div>

            <div
              ref={locationRef}
              className="font-body text-13 text-[#542F0C]/70 flex flex-wrap items-center gap-2"
            >
              <span className="font-medium text-[#542F0C]">Chapada, Manaus</span>
              <span className="hidden sm:inline">•</span>
              <span>{CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-[#542F0C] font-semibold">★ 4.6 · 10 avaliações</span>
            </div>
          </div>

          {/* Columns 9–12: Quiet Clinical Credential Brief */}
          <div
            ref={infoRef}
            className="lg:col-span-4 lg:pl-4 flex flex-col justify-center"
          >
            <div className="p-6 sm:p-8 bg-[#FAF7F0] border border-[#E9DCC2] shadow-sm flex flex-col space-y-4">
              <span className="font-body text-13 text-[#542F0C] uppercase tracking-wider font-semibold">
                Destaques Clínicos
              </span>
              <p className="font-body text-13 sm:text-15 text-[#542F0C]/90 leading-relaxed">
                <strong className="text-[#542F0C] font-semibold">&ldquo;Clínica Odontológica EODONTO&rdquo;</strong> &mdash; Clínica odontológica em Chapada, Manaus, Amazonas.
              </p>
              <div className="pt-3 border-t border-[#E9DCC2] flex items-center justify-between text-13 font-body text-[#542F0C]/70">
                <span>Manaus - AM</span>
                <span className="text-[#542F0C] font-semibold">Avaliação 4.6 ★ · 10 avaliações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
