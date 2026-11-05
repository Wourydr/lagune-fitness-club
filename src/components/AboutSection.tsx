"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Zap, MapPin } from "lucide-react";

const STATS = [
  { value: "500m²", label: "Espace d'entraînement dédié" },
  { value: "100%", label: "Équipements Pro & Poids Libres" },
  { value: "+221", label: "Ancré à La Somone, Petite Côte" },
  { value: "7j / 7", label: "Accès & Suivi Personnalisé" },
];

const HIGHLIGHTS = [
  "Zone musculation équipée de charges guidées et barres olympiques",
  "Plateau cardio haute intensité avec vue dégagée",
  "Accompagnement de coachs certifiés et programmes sur-mesure",
  "Atmosphère intimiste, énergique et sécurisée",
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#090909] border-t border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00F59B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00F59B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Pill */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[2px] w-8 bg-[#00F59B]" />
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#00F59B] font-semibold">
            ABOUT THE CLUB • LA SOMONE
          </span>
        </div>

        {/* Split Layout: Typography + 4K Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Credo */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-display leading-[1.05] tracking-tight">
              MORE THAN A GYM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#00DC82] to-white">
                A LIFESTYLE.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              Niché sur la Petite Côte à <strong className="text-white font-medium">La Somone (Sénégal)</strong>, 
              le <strong className="text-white font-semibold">Lagune Fitness Club</strong> redéfinit les standards de l&apos;entraînement physique.
              Conçu pour les athlètes chevronnés comme pour les passionnés de bien-être, notre club allie exigence internationale et énergie chaleureuse sénégalaise.
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              Ici, chaque séance est pensée comme une immersion totale. Fini les environnements aseptisés et sans âme : 
              notre sanctuaire vous propulse vers vos records personnels dans une ambiance feutrée, puissante et inspirante.
            </p>

            {/* Feature List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00F59B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 leading-snug font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Location Badge */}
            <div className="mt-10 inline-flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-md">
              <div className="w-10 h-10 rounded-lg bg-[#00F59B]/10 flex items-center justify-center text-[#00F59B] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Situation Géographique Privilégiée
                </div>
                <div className="text-xs text-zinc-400">
                  Route Ngaparou - Somone, à quelques minutes des plages et de la lagune.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Photography Collage with 4K Revealing Frames */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main atmospheric 4K photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <Image
                  src="/images/about-athlete.jpg"
                  alt="Athlète au Lagune Fitness Club Somone"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />

                {/* Floating badge inside photo */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#00F59B] flex items-center justify-center text-black font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        Atmosphère Haute Intensité
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Ambiance feutrée, finitions sombres et motivation constante.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offset secondary 4K photo */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden border-2 border-[#090909] shadow-2xl z-20">
                <Image
                  src="/images/about-workout.jpg"
                  alt="Entraînement fonctionnel"
                  fill
                  className="object-cover"
                  sizes="200px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-2 left-3 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                  Force & Énergie
                </div>
              </div>

              {/* Glow accent element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#00F59B] rounded-tr-3xl pointer-events-none opacity-60" />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
                <span className="text-[#00F59B]">{stat.value.slice(0, 1)}</span>
                {stat.value.slice(1)}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wider text-zinc-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
