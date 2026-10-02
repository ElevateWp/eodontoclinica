'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DentistProfile } from '@/lib/clinic-data';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

interface DentistCardProps {
  dentist: DentistProfile;
  offsetY?: boolean;
}

export default function DentistCard({ dentist, offsetY = false }: DentistCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimateOnScroll animation="fade-up" duration={0.8} className="w-full">
      <div
        className={`flex flex-col group ${offsetY ? 'lg:translate-y-8' : ''} transition-transform duration-500`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Portrait frame with dual image crossfade on paper-toned ground */}
        <div className="relative w-full aspect-[4/5] bg-mist overflow-hidden border border-mist mb-5 rounded-none shadow-sm">
          {/* Primary Clinical Portrait */}
          <Image
            src={dentist.image}
            alt="Dra. Fernanda"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className={`object-cover object-top transition-all duration-500 ease-nova-ease ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          <div className="absolute top-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium shadow-sm">
            {dentist.qualifications}
          </div>

          {dentist.experienceYears > 0 && (
            <div className="absolute bottom-3 right-3 bg-forest text-paper font-body text-13 px-2.5 py-0.5">
              {dentist.experienceYears}+ Yrs Experience
            </div>
          )}
        </div>

        {/* Typography block placed strictly below image */}
        <div>
          <span className="font-body text-13 text-forest block mb-1 font-medium">
            {dentist.title}
          </span>
          <h3 className="font-display text-21 sm:text-24 md:text-26 text-forest-ink group-hover:text-forest transition-colors mb-2">
            <Link href={`/dentists/${dentist.slug}/`} className="no-underline text-inherit">
              {dentist.name}
            </Link>
          </h3>
          <p className="font-body text-13 sm:text-15 text-forest-ink/80 leading-relaxed mb-3 line-clamp-2">
            {dentist.specialization}
          </p>

          {/* Specialization Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-mist/60">
            {dentist.specialties.map((spec) => (
              <span
                key={spec}
                className="font-body text-13 text-forest-ink/80 bg-mist/60 px-2 py-0.5"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
