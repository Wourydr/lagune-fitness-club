"use client";

import React, { useState } from "react";
import { Check, MessageCircle, Sparkles, Smartphone, ArrowRight } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface Plan {
  id: string;
  name: string;
  tagline: string;
  priceXOF: string;
  priceEUR: string;
  billing: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  waMessage: string;
}

const MEMBERSHIP_PLANS: Plan[] = [
  {
    id: "daily",
    name: "PASS SÉANCE",
    tagline: "Accès libre pour visiteurs, vacanciers & entraînements ponctuels",
    priceXOF: "1 000 FCFA",
    priceEUR: "~ 1,50 €",
    billing: "la séance",
    features: [
      "Accès complet au plateau musculation",
      "Accès à l'espace cardio & tapis",
      "Espace charges libres & haltères",
      "Accès aux vestiaires",
      "Sans aucun engagement ni frais d'inscription",
      "Paiement Wave, Orange Money ou Espèces",
    ],
    ctaText: "Réserver une Séance (1 000 FCFA)",
    waMessage: "Bonjour Lagune Fitness Club, je souhaite venir faire une séance d'entraînement (1 000 FCFA).",
  },
  {
    id: "monthly",
    name: "ABONNEMENT MENSUEL",
    tagline: "La formule de référence pour progresser avec régularité",
    priceXOF: "15 000 FCFA",
    priceEUR: "~ 23 €",
    billing: "par mois (accès illimité)",
    popular: true,
    features: [
      "Accès illimité tous les jours d'ouverture",
      "Plateau complet charges guidées et poids libres",
      "Zone cardio et endurance haute intensité",
      "Conseils personnalisés de l'équipe du club",
      "Vestiaires et casiers à disposition",
      "Renouvellement mensuel sans contrainte",
    ],
    ctaText: "Choisir l'Abonnement (15 000 FCFA/mois)",
    waMessage: "Bonjour Lagune Fitness Club, je souhaite m'inscrire à l'Abonnement Mensuel illimité à 15 000 FCFA.",
  },
  {
    id: "coaching",
    name: "MENSUEL + COACHING PRIVÉ",
    tagline: "L'accompagnement sur-mesure pour maximiser vos résultats",
    priceXOF: "30 000 FCFA",
    priceEUR: "~ 45 €",
    billing: "par mois (coaching inclus)",
    features: [
      "Accès illimité mensuel à l'ensemble du club",
      "Séances individuelles avec coach diplômé",
      "Programme d'entraînement personnalisé",
      "Suivi de progression et correction posturale",
      "Conseils d'hygiène de vie et de récupération",
      "Vestiaires et casiers sécurisés",
    ],
    ctaText: "Prendre la Formule avec Coaching",
    waMessage: "Bonjour Lagune Fitness Club, je souhaite des renseignements sur la formule Mensuelle avec Coaching Privé.",
  },
];

export default function MembershipSection() {
  const [currencyMode, setCurrencyMode] = useState<"XOF" | "EUR">("XOF");
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState<Plan | null>(null);

  return (
    <section id="membership" className="relative py-28 bg-[#090909] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F59B]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00F59B]" />
            <span className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#00F59B] font-semibold">
              TARIFS OFFICIELS & ADHÉSIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            INVESTISSEZ DANS VOTRE FORME.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Tarifs clairs et accessibles pour tous les sportifs à La Somone et sur la Petite Côte. Entraînez-vous à votre rythme, à la séance ou au mois.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-zinc-900 border border-white/10">
            <button
              onClick={() => setCurrencyMode("XOF")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                currencyMode === "XOF"
                  ? "bg-[#00F59B] text-black font-bold shadow-md shadow-[#00F59B]/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              FCFA (XOF)
            </button>
            <button
              onClick={() => setCurrencyMode("EUR")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                currencyMode === "EUR"
                  ? "bg-[#00F59B] text-black font-bold shadow-md shadow-[#00F59B]/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Euros (€)
            </button>
          </div>

          {/* Pricing Highlight Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F59B]/10 border border-[#00F59B]/30 text-[#00F59B] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>1 000 FCFA la séance • 15 000 FCFA par mois en illimité</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#101311] border-2 border-[#00F59B] shadow-2xl shadow-[#00F59B]/15 lg:-translate-y-2"
                    : "bg-[#111114] border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00F59B] text-black font-extrabold text-[11px] uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-[#00F59B]/30">
                    <Sparkles className="w-3 h-3" />
                    <span>FORMULE RECOMMANDÉE</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <h3 className="text-xl font-bold uppercase font-display tracking-wide text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                      {currencyMode === "XOF" ? plan.priceXOF : plan.priceEUR}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      / {plan.billing}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? "bg-[#00F59B]/20 text-[#00F59B]"
                              : "bg-white/10 text-white"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Double Action: Wave/Orange Money Checkout + WhatsApp */}
                <div className="mt-8 pt-6 border-t border-white/5 space-y-2.5">
                  {/* Wave & OM Checkout Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedPlanForPayment(plan)}
                    className="w-full py-3.5 px-5 rounded-full bg-white hover:bg-zinc-100 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] active:scale-95"
                  >
                    <div className="flex items-center -space-x-1">
                      <span className="w-4 h-4 rounded-full bg-[#1DC3F4] text-white flex items-center justify-center text-[8px] font-black">
                        W
                      </span>
                      <span className="w-4 h-4 rounded-full bg-[#FF7900] text-black flex items-center justify-center text-[7px] font-black">
                        OM
                      </span>
                    </div>
                    <span>Payer via Wave / Orange Money</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>

                  {/* Direct WhatsApp Contact Button */}
                  <a
                    href={`https://wa.me/221775526052?text=${encodeURIComponent(plan.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#00F59B]" />
                    <span>Réserver sur WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Money Senegal Acceptance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#111114] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#00F59B]/10 border border-[#00F59B]/25 flex items-center justify-center text-[#00F59B] shrink-0 mx-auto md:mx-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase font-display">
                Paiements Mobiles Acceptés au Club
              </h4>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                Réglez en toute simplicité au numéro officiel du club :{" "}
                <strong className="text-white font-mono">+221 77 552 60 52</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Wave Badge */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#1DC3F4]/10 border border-[#1DC3F4]/40 text-white">
              <span className="w-7 h-7 rounded-lg bg-[#1DC3F4] text-white flex items-center justify-center font-black text-xs shadow-md">
                W
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-[#1DC3F4]">Wave Sénégal</div>
                <div className="text-[10px] text-zinc-400 font-mono">Transfert direct</div>
              </div>
            </div>

            {/* Orange Money Badge */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#FF7900]/10 border border-[#FF7900]/40 text-white">
              <span className="w-7 h-7 rounded-lg bg-[#FF7900] text-black flex items-center justify-center font-black text-xs shadow-md">
                OM
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-[#FF7900]">Orange Money</div>
                <div className="text-[10px] text-zinc-400 font-mono">#144# Sénégal</div>
              </div>
            </div>

            {/* Cash Badge */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white">
              <span className="w-7 h-7 rounded-lg bg-zinc-800 text-[#00F59B] flex items-center justify-center font-bold text-xs">
                CASH
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-zinc-200">Espèces</div>
                <div className="text-[10px] text-zinc-400 font-mono">À l&apos;accueil</div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Direct Inquiries */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-zinc-400">
            Une question sur les inscriptions ou les horaires ?{" "}
            <a
              href="https://wa.me/221775526052?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20les%20abonnements."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F59B] hover:underline font-semibold"
            >
              Échangez directement sur WhatsApp avec le club au +221 77 552 60 52
            </a>
          </p>
        </div>
      </div>

      {/* Interactive Payment Modal */}
      {selectedPlanForPayment && (
        <PaymentModal
          isOpen={true}
          onClose={() => setSelectedPlanForPayment(null)}
          planName={selectedPlanForPayment.name}
          amountXOF={selectedPlanForPayment.priceXOF}
          amountEUR={selectedPlanForPayment.priceEUR}
        />
      )}
    </section>
  );
}
