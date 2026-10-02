import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Biological Tooth Preservation',
    description: 'We treat surgical extraction as a last resort. Operating microscopes allow us to preserve natural root structures and vital enamel whenever biologically viable.',
  },
  {
    title: 'Microscopic & CBCT Guided Accuracy',
    description: 'Every surgical fixture and root canal is pre-planned in three dimensions with low-dose digital tomography to prevent anatomical nerve or sinus complications.',
  },
  {
    title: 'Proactive Patient Comfort & Sedation',
    description: 'We eliminate procedural stress through computer-controlled local anesthesia delivery, noise-canceling acoustics, and gentle anxiety-free care.',
  },
  {
    title: 'Sterile Operating Environments',
    description: 'Our surgical suites maintain medical-grade air filtration and autoclave sterilization protocols exceeding international dental guidelines.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Clinical Methodology
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Por que escolher a Clínica EODONTO
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Columns 7–12: Real clinic interior photos */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&w=1400&q=85"
                      alt="Sala de tratamento odontológico da Clínica EODONTO"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#542F0C]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Sala de Tratamento Odontológico
                  </div>
                </div>
                {/* Second interior image */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85"
                    alt="Detalhe da sinalização da clínica"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Doctor portrait */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#FAF7F0] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/dra-fernanda.png"
                    alt="Imagem ilustrativa de atendimento odontológico"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#542F0C]/80 text-paper font-body text-12 px-3 py-2 text-center">
                    Dra. Fernanda
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
