"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dumbbell, Activity, Flame, UserCheck, ChevronRight } from "lucide-react";

interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  intensity: "Élevée" | "Modérée / Haute" | "Maximale" | "Personnalisée";
  focus: string[];
  equipment: string[];
}

const PROGRAMS: TrainingProgram[] = [
  {
    id: "strength",
    title: "STRENGTH TRAINING",
    subtitle: "Musculation & Développement Athlétique",
    description:
      "Cages de squat, presses, poulies vis-à-vis et appareils guidés biomécaniques pour sculpter chaque groupe musculaire en toute sécurité.",
    icon: Dumbbell,
    image: "/images/training-strength.jpg",
    intensity: "Maximale",
    focus: ["Hypertrophie", "Force pure", "Posture & Renforcement"],
    equipment: ["Racks à squat", "Presses à cuisses", "Poulies réglables"],
  },
  {
    id: "cardio",
    title: "CARDIO TRAINING",
    subtitle: "Endurance, V02 Max & Brûlage Calorique",
    description:
      "Tapis de course professionnels, vélos elliptiques et rameurs pour stimuler votre endurance cardiovasculaire sous le soleil de la Petite Côte.",
    icon: Activity,
    image: "/images/training-cardio.jpg",
    intensity: "Modérée / Haute",
    focus: ["Capacité aérobie", "Endurance générale", "Perte de masse grasse"],
    equipment: ["Tapis de course haute vitesse", "Vélos cardio", "Rameurs"],
  },
  {
    id: "free_weights",
    title: "FREE WEIGHTS",
    subtitle: "Haltères, Barres & Fonte Olympique",
    description:
      "Un espace fonte complet avec haltères de 2kg à 40kg+, bancs inclinables et barres droites/olympiques pour un travail fonctionnel sans compromis.",
    icon: Flame,
    image: "/images/training-weights.jpg",
    intensity: "Élevée",
    focus: ["Gain de puissance", "Stabilité articulaire", "Coordination motrice"],
    equipment: ["Haltères pro 2-40+ kg", "Barres olympiques 20kg", "Disques calibrés"],
  },
  {
    id: "coaching",
    title: "PERSONAL TRAINING",
    subtitle: "Coaching Privé & Suivi de Progression",
    description:
      "Séances individuelles dirigées par des coachs expérimentés. Programmes d'entraînement personnalisés, correction posturale et motivation sans faille.",
    icon: UserCheck,
    image: "/images/training-coaching.jpg",
    intensity: "Personnalisée",
    focus: ["Objectifs spécifiques", "Correction technique", "Dépassement de soi"],
    equipment: ["Bilan de condition physique", "Plan périodisé", "Accompagnement 1-on-1"],
  },
];

export default function TrainingSection() {
  const [activeId, setActiveId] = useState<string>("strength");

  return (
    <section id="training" className="relative py-28 bg-[#090909] text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00F59B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#00F59B]" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#00F59B] font-semibold">
                ZONES & DISCIPLINES D&apos;ENTRAÎNEMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              PERFORMANCE SANS COMPROMIS.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Chaque zone a été conçue pour stimuler l&apos;intensité, la concentration et la progression continue de nos adhérents.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => {
            const Icon = program.icon;
            const isHovered = activeId === program.id;

            return (
              <div
                key={program.id}
                onMouseEnter={() => setActiveId(program.id)}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#00F59B]/80 bg-[#121214] shadow-2xl shadow-[#00F59B]/15 -translate-y-1.5"
                    : "border-white/10 bg-[#0d0d0f] hover:border-white/20"
                }`}
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-90" />

                  {/* Top Badge: Intensity */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider text-zinc-300 uppercase">
                    Intensité: <span className="text-[#00F59B] font-bold">{program.intensity}</span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#090909]/80 border border-white/15 backdrop-blur-md flex items-center justify-center text-[#00F59B] group-hover:bg-[#00F59B] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black uppercase font-display tracking-tight text-white group-hover:text-[#00F59B] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#00F59B] font-medium tracking-wide mt-1">
                      {program.subtitle}
                    </p>
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed font-light">
                      {program.description}
                    </p>
                  </div>

                  {/* Focus Badges & Equipment */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {program.focus.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[10px] text-zinc-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/221775526052?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20séances%20de%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-300 group-hover:text-[#00F59B] transition-colors pt-2"
                    >
                      <span>Séance d&apos;essai</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
