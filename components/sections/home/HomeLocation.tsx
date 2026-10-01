'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeLocation() {
  const todayDayName = useMemo(() => {
    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return days[new Date().getDay()];
  }, []);

  return (
    <section className="w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className="mb-16">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Localização & Horário de Atendimento
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Visite a Clínica em Manaus
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columns 1–6: Address, Contact & Opening Hours Table */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <div>
                <h3 className="font-display text-21 text-forest-ink mb-3">
                  {CLINIC_INFO.name}
                </h3>
                <address className="not-italic font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-4">
                  {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}
                  <br />
                  {CLINIC_INFO.primaryLocation.city} - {CLINIC_INFO.primaryLocation.state},{' '}
                  {CLINIC_INFO.primaryLocation.postalCode}, {CLINIC_INFO.primaryLocation.country}
                </address>
                <p className="font-body text-13 text-forest-ink/70 leading-relaxed">
                  {CLINIC_INFO.primaryLocation.landmarks}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Hours Table with Today highlighted with --lime */}
            <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.15}>
              <div>
                <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-3 font-semibold">
                  Horário de Funcionamento
                </span>
                <div className="border border-mist overflow-hidden bg-paper shadow-sm">
                  <table className="w-full text-left font-body text-13">
                    <tbody className="divide-y divide-mist">
                      {CLINIC_INFO.schedule.map((item) => {
                        const isToday = item.day === todayDayName;
                        return (
                          <tr
                            key={item.day}
                            className={`transition-colors ${
                              isToday ? 'bg-lime text-forest-ink font-semibold' : 'text-forest-ink/80'
                            }`}
                          >
                            <td className="py-2.5 px-4">
                              <span>{item.day}</span>
                              {isToday && (
                                <span className="ml-2 text-13 uppercase text-forest-ink/80 font-normal">
                                  (Hoje)
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-4 text-right tabular-nums">
                              {item.hours}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Button
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    CLINIC_INFO.primaryLocation.directions
                  )}`}
                  variant="ghost"
                  size="md"
                >
                  Abrir no Google Maps
                </Button>
                <Button href="/contact/" variant="forest" size="md">
                  Página de Contato
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Columns 7–12: Physical Storefront Photo & Location Info */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
                  alt="Clínica Odontológica EODONTO - Chapada, Manaus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                  EODONTO • Manaus
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.1}>
              <div className="bg-paper border border-mist p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-body text-13 text-forest block mb-1 font-medium uppercase tracking-wider">
                    Atendimento Odontológico de Excelência
                  </span>
                  <h3 className="font-display text-21 text-forest-ink mb-2">
                    Clínica odontológica em Chapada
                  </h3>
                  <p className="font-body text-13 text-forest-ink/80 mb-3 leading-relaxed">
                    Clínica Odontológica EODONTO, na região de Chapada, em Manaus, Amazonas.
                  </p>
                  <p className="font-body text-13 text-forest-ink/70 mb-3 leading-relaxed">
                    Ambiente LGBTQ+ friendly · Identifica-se como empresa de propriedade feminina.
                  </p>
                  <div className="flex items-center gap-2 text-13 font-body text-forest">
                    <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                    <span>WhatsApp / Telefone Direto: {CLINIC_INFO.contact.phone}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-mist flex flex-wrap items-center justify-between gap-4">
                  <span className="font-body text-13 text-forest-ink/60">
                    Plus Code: {CLINIC_INFO.primaryLocation.landmarks}
                  </span>
                  <Button
                    href="/contact/"
                    variant="forest"
                    size="sm"
                  >
                    Ver Detalhes de Contato
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
