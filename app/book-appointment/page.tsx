import React from 'react';
import { Metadata } from 'next';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BookingForm from '@/components/sections/booking/BookingForm';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Agendar Consulta Odontológica | Our Doctor',
  description:
    'Solicite seu agendamento para implantes de carga imediata em 1 dia, odontologia domiciliar ou aparelhos ortodônticos com a equipe odontológica em Manaus.',
  pathname: '/book-appointment/',
});

const BOOKING_STEPS = [
  {
    step: 1,
    title: 'Envie sua Solicitação',
    description: 'Selecione o tratamento de interesse, data e horário preferencial através do formulário.',
  },
  {
    step: 2,
    title: 'Avaliação da Equipe',
    description: 'Nossa equipe clínica analisa o pedido para reservar o tempo necessário para seu atendimento.',
  },
  {
    step: 3,
    title: 'Confirmação via WhatsApp ou Telefone',
    description: 'Entramos em contato rapidamente para confirmar seu horário e fornecer orientações.',
  },
  {
    step: 4,
    title: 'Atendimento Atencioso',
    description: 'Venha ao consultório ou receba o atendimento de odontologia domiciliar no conforto da sua casa.',
  },
];

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Appointment Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Agendar Consulta', path: '/book-appointment/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Atendimento Personalizado
                </span>
                <WordRevealH1 text="Reserve sua avaliação odontológica." />
                <div className="mt-8">
                  <ScrubbedParagraph text="Agende sua consulta para implantes de carga imediata (recuperação do sorriso em 1 dia), avaliação ortodôntica ou solicite atendimento domiciliar em Manaus com a equipe odontológica." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <span className="font-medium text-forest block">Agendamento via WhatsApp:</span>
                  <p className="text-forest-ink/70">
                    Prefere falar diretamente conosco agora? Clique abaixo para abrir o WhatsApp.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5592991487679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-17 text-forest font-semibold block hover:underline"
                  >
                    WhatsApp: {CLINIC_INFO.contact.whatsapp}
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: Interactive Form & 4-Step Process Explanation */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: 4-Step Sequential Process */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <div>
                  <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                    Como Funciona
                  </span>
                  <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                    Etapas do seu agendamento
                  </h2>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                    Priorizamos a pontualidade e o tempo necessário para cada paciente, garantindo uma consulta completa e esclarecedora.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Numbered Step Sequence */}
              <div className="space-y-6">
                {BOOKING_STEPS.map((step, idx) => (
                  <AnimateOnScroll key={step.step} animation="fade-up" delay={idx * 0.1}>
                    <div className="flex items-start gap-4 p-4 bg-paper border border-mist shadow-sm">
                      <span className="w-8 h-8 rounded-full bg-forest text-paper flex items-center justify-center font-display text-15 flex-shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-17 text-forest-ink mb-1">
                          {step.title}
                        </h3>
                        <p className="font-body text-13 text-forest-ink/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Right: Interactive Form with in-place confirmation */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
                <BookingForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6: Contact Options, Opening Hours, Location */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Options */}
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Contato Direto</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Canais de Atendimento</h3>
                <div className="space-y-3 font-body text-13 text-forest-ink/80">
                  <div>
                    <span className="text-forest-ink/60 block">WhatsApp:</span>
                    <a href="https://api.whatsapp.com/send?phone=5592991487679" target="_blank" rel="noopener noreferrer" className="font-medium text-forest hover:underline">
                      {CLINIC_INFO.contact.whatsapp}
                    </a>
                  </div>
                  <div>
                    <span className="text-forest-ink/60 block">Telefone:</span>
                    <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-medium text-forest hover:underline">
                      {CLINIC_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Opening Hours */}
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Horário</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Horário de Atendimento</h3>
                <div className="space-y-1.5 font-body text-13 text-forest-ink/80">
                  {CLINIC_INFO.schedule.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span>{item.day}</span>
                      <span className="tabular-nums">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Physical Location */}
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Localização</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">EODONTO em Manaus</h3>
                <address className="not-italic font-body text-13 text-forest-ink/80 leading-relaxed mb-3">
                  {CLINIC_INFO.primaryLocation.street} - {CLINIC_INFO.primaryLocation.suite}
                  <br />
                  {CLINIC_INFO.primaryLocation.city} - {CLINIC_INFO.primaryLocation.state}, {CLINIC_INFO.primaryLocation.postalCode}, Brasil
                </address>
                <p className="font-body text-13 text-forest-ink/60">
                  Plus Code: VXXF+CR Chapada, Manaus - Amazonas.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
