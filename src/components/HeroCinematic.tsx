"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ChevronRight, Sparkles } from "lucide-react";

// Ultra-Modern 4K Cinematic Walkthrough Scenes
const CINEMATIC_4K_SCENES = [
  {
    id: "entrance",
    phase: "01 / APPROCHE DU CLUB",
    title: "L'ENTRÉE DU CLUB",
    desc: "Passage du seuil vers l'expérience fitness la plus exclusive de La Somone",
    img: "/images/hero-1.jpg",
  },
  {
    id: "threshold",
    phase: "02 / TRANSITION INTÉRIEURE",
    title: "LE SAS D'ÉNERGIE",
    desc: "Plongée dans l'atmosphère sombre, feutrée et électrique du club",
    img: "/images/hero-2.jpg",
  },
  {
    id: "equipment",
    phase: "03 / MACHINES DE FORCE",
    title: "PLATEAU BIOMÉCANIQUE",
    desc: "Cages de squat, barres de force et poulies haute précision",
    img: "/images/hero-3.jpg",
  },
  {
    id: "free_weights",
    phase: "04 / POIDS LIBRES & CHARGES",
    title: "ZONE HALTÈRES & FONTE",
    desc: "L'arène de puissance aux finitions chromées et acier brut",
    img: "/images/hero-4.jpg",
  },
  {
    id: "cardio_deck",
    phase: "05 / PERFORMANCE & CARDIO",
    title: "MEZZANINE ENDURANCE",
    desc: "Tapis de course et entraînements de haute intensité",
    img: "/images/hero-5.jpg",
  },
  {
    id: "wide_shot",
    phase: "06 / PANORAMA CINÉMATIQUE",
    title: "LE SANCTUAIRE ATHLÉTIQUE",
    desc: "Le club révélé dans toute son envergure et sa splendeur",
    img: "/images/hero-6.jpg",
  },
];

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinTrigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "+=3800",
      pin: containerRef.current,
      scrub: 1.2,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const total = CINEMATIC_4K_SCENES.length;
        const index = Math.min(Math.floor(progress * total), total - 1);
        setActiveStep(index);
      },
    });

    return () => {
      pinTrigger.kill();
    };
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={triggerRef} className="relative h-[4600px] bg-[#090909]">
      <div
        ref={containerRef}
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Layered 4K Cinematic Walkthrough Scenes */}
        <div className="absolute inset-0 w-full h-full">
          {CINEMATIC_4K_SCENES.map((scene, index) => {
            const isCurrent = activeStep === index;
            const isPrev = activeStep > index;

            return (
              <div
                key={scene.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out will-change-transform ${
                  isCurrent
                    ? "opacity-100 scale-100 z-10"
                    : isPrev
                    ? "opacity-0 scale-105 pointer-events-none z-0"
                    : "opacity-0 scale-95 pointer-events-none z-0"
                }`}
              >
                {/* 4K Image with enhanced cinematic contrast */}
                <Image
                  src={scene.img}
                  alt={scene.title}
                  fill
                  priority={index < 2}
                  className="object-cover object-center filter brightness-[0.70] contrast-[1.12]"
                  sizes="100vw"
                  quality={90}
                />

                {/* Subtle Cinematic Vignette, Fog & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/70 pointer-events-none" />
                <div className="absolute inset-0 bg-radial-vignette pointer-events-none mix-blend-multiply opacity-75" />
                <div className="absolute inset-0 bg-[#090909]/20 backdrop-contrast-[1.05] pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Clean Top Bar & Club Badge */}
        <div className="relative z-20 pointer-events-none p-6 sm:p-10 flex flex-col justify-between h-full max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between text-xs tracking-widest text-zinc-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                LAGUNE FITNESS • SOMONE
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-zinc-300 font-mono text-[11px] bg-black/50 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#00F59B]" />
              <span>EXPÉRIENCE 4K CINÉMATIQUE</span>
            </div>
          </div>

          {/* Hero Core Content */}
          <div className="pointer-events-auto flex flex-col items-center text-center max-w-4xl mx-auto my-auto py-12">
            {/* Step badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/75 border border-[#00F59B]/40 backdrop-blur-xl mb-6 shadow-xl shadow-[#00F59B]/10">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#00F59B] uppercase font-semibold">
                {CINEMATIC_4K_SCENES[activeStep].phase}
              </span>
            </div>

            {/* Main Club Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-display leading-[0.95] drop-shadow-2xl">
              LAGUNE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#00F59B]">FITNESS</span> CLUB
            </h1>

            {/* Club Creed Motto */}
            <p className="mt-5 text-sm sm:text-lg md:text-xl font-bold tracking-[0.3em] sm:tracking-[0.4em] text-zinc-300 uppercase font-display max-w-2xl text-glow-white">
              YOUR BODY. YOUR LIMITS. YOUR JOURNEY.
            </p>

            {/* Active Scene dynamic subtitle */}
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-medium max-w-lg tracking-wide hidden sm:block">
              {CINEMATIC_4K_SCENES[activeStep].desc}
            </p>

            {/* Single Clean Primary Action Button */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center">
              <button
                onClick={scrollToAbout}
                className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#00F59B] hover:bg-[#00DC82] text-black font-extrabold tracking-widest text-xs sm:text-sm uppercase transition-all duration-300 shadow-xl shadow-[#00F59B]/25 hover:shadow-[#00F59B]/40 hover:scale-105 active:scale-95"
              >
                <span>DISCOVER THE CLUB</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bottom Navigation & Timeline Scrubber */}
          <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
            {/* Step navigation dots */}
            <div className="flex items-center gap-2 sm:gap-3">
              {CINEMATIC_4K_SCENES.map((scene, i) => (
                <div
                  key={scene.id}
                  className="flex flex-col items-center gap-1 group cursor-default"
                >
                  <div
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      activeStep === i
                        ? "w-8 sm:w-12 bg-[#00F59B] shadow-[0_0_12px_#00F59B]"
                        : i < activeStep
                        ? "w-3 sm:w-4 bg-zinc-500"
                        : "w-3 sm:w-4 bg-white/20"
                    }`}
                  />
                  <span
                    className={`text-[9px] font-mono tracking-wider transition-colors hidden md:inline ${
                      activeStep === i ? "text-[#00F59B]" : "text-zinc-600"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Current Scene Title & Scroll cue */}
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#00F59B]">
                  {CINEMATIC_4K_SCENES[activeStep].title}
                </div>
                <div className="text-xs text-zinc-300 font-bold tracking-wider">
                  Séquence 0{activeStep + 1} / 06
                </div>
              </div>

              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
                aria-label="Faire défiler"
              >
                <span>Scrollez pour explorer</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#00F59B] animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
