'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = '';
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
          }
        },
      });

      // Prevent scrolling during intro
      document.body.style.overflow = 'hidden';

      // Set initial states
      gsap.set(containerRef.current, { yPercent: 0 });
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0, y: 20 });
      gsap.set(titleRef.current, { opacity: 0, y: 25, letterSpacing: '0.15em' });
      gsap.set(subtitleRef.current, { opacity: 0, y: 15 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'center center' });

      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.1,
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: '0.08em',
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '-=0.35'
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
          },
          '-=0.25'
        )
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: -25,
            duration: 0.45,
            ease: 'power2.in',
            delay: 0.25,
          }
        )
        .to(
          containerRef.current,
          {
            yPercent: -100,
            duration: 0.85,
            ease: 'power4.inOut',
          },
          '-=0.1'
        );
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#30200F] text-paper overflow-hidden select-none"
      style={{ willChange: 'transform' }}
      aria-label="Loading EODONTO"
    >
      {/* Subtle Background Radial Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,154,106,0.10)_0%,transparent_70%)] pointer-events-none" />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-xl mx-auto"
      >
        {/* Animated 3D Logo */}
        <div
          ref={logoRef}
          className="relative w-20 h-20 sm:w-24 sm:h-24 bg-paper rounded-2xl shadow-2xl p-2.5 flex items-center justify-center mb-6 border border-[#F5C842]/40"
        >
          <Image
            src="/images/logo.png"
            alt="Clínica Odontológica EODONTO"
            width={80}
            height={80}
            priority
            className="object-contain"
          />
        </div>

        {/* Primary Requested Uppercase Welcome Text */}
        <h1
          ref={titleRef}
          className="font-display text-22 sm:text-30 md:text-36 font-medium text-paper uppercase tracking-[0.08em] leading-tight mb-3 text-shadow-sm"
        >
          ORAL INTEGRALLE
        </h1>

        {/* Delicate Golden-Lime Divider Line */}
        <div
          ref={lineRef}
          className="w-24 sm:w-32 h-[2px] bg-lime rounded-full mb-3"
        />

        {/* Subtitle / Location */}
        <p
          ref={subtitleRef}
          className="font-body text-12 sm:text-13 text-paper/85 uppercase tracking-[0.15em]"
        >
          Clínica Odontológica • Chapada, Manaus
        </p>
      </div>
    </div>
  );
}
