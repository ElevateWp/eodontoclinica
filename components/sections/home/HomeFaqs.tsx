import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'Como funciona o implante de carga imediata para ter o sorriso em 1 dia?',
    answer: 'A técnica de carga imediata permite a fixação do implante e a colocação do dente no mesmo dia ou em até 24 a 48 horas quando há estabilidade óssea adequada, permitindo ao paciente voltar a sorrir rapidamente.',
    relatedLink: { href: '/dental-implants/', label: 'Ver detalhes sobre Implantes e Carga Imediata →' },
  },
  {
    question: 'O consultório realiza atendimento de odontologia domiciliar em Manaus?',
    answer: 'Sim! O A equipe odontológica oferece atendimento domiciliar especializado para pacientes idosos, acamados ou com dificuldades de locomoção, com equipamentos portáteis modernos.',
    relatedLink: { href: '/contact/', label: 'Solicitar Atendimento Domiciliar →' },
  },
  {
    question: 'Quais tipos de aparelhos ortodônticos são oferecidos?',
    answer: 'Trabalhamos com aparelhos metálicos convencionais, estéticos (cerâmica e safira) e alinhadores transparentes, planejados minuciosamente pela nossa equipe.',
    relatedLink: { href: '/braces/', label: 'Explorar Aparelhos Ortodônticos →' },
  },
  {
    question: 'Como agendar uma avaliação no consultório?',
    answer: `Você pode entrar em contato diretamente pelo WhatsApp (${CLINIC_INFO.contact.phone}) ou preencher o formulário de agendamento online com antecedência.`,
    relatedLink: { href: '/book-appointment/', label: 'Agendar Consulta Online →' },
  },
  {
    question: 'Onde fica localizada a Clínica Odontológica EODONTO?',
    answer: 'Av Djalma Batista, 1661 - Millennium Shopping, Torre Medical, Sl 301 - Chapada, Manaus - AM, 69050-970, Brazil. Plus Code: VXXF+CR Chapada, Manaus - Amazonas, Brazil.',
    relatedLink: { href: '/contact/', label: 'Ver Mapa e Rotas no Google Maps →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Perguntas frequentes sobre nossos tratamentos
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Respostas claras sobre implantes de carga imediata, aparelhos ortodônticos e atendimento odontológico na EODONTO Clínica Odontológica em Manaus.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Tem alguma outra pergunta?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Fale diretamente conosco pelo WhatsApp e tire todas as suas dúvidas.
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=5592991487679`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
