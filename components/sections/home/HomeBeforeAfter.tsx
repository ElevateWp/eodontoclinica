import React from 'react';
import BeforeAfterSlider from '@/components/motion/BeforeAfterSlider';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Documented Clinical Results
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Verified restorative outcomes
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Drag the interactive slider to inspect enamel translucency, gingival margin integration, and anatomical contouring. Every documented case represents actual patient treatment performed at Nova Dental under standardized clinical photography protocols.
            </p>
            <div className="space-y-3 font-body text-13 text-forest-ink/70 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>Zero digital retouching or artificial smoothing filters.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>High-precision macro photography under color-calibrated lighting.</span>
              </div>
            </div>
            <Link
              href="/cosmetic-dentistry/"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              Explore cosmetic smile design →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1200"
              afterImage="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&q=80&w=1200"
              beforeLabel="Pre-operative: Fractured & Discolored Enamel"
              afterLabel="Post-operative: Micro-Layered Porcelain Veneers"
              clinicalNote="Caso: Reabilitação estética e facetas cerâmicas pela equipe odontológica."
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
