"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  Navigation,
  CheckCircle,
  Calendar,
  User,
  Mail,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Musculation & Force",
    paymentMethod: "Wave Sénégal",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#00F59B", "#00DC82", "#FFFFFF"],
        });
      } catch {
        // ignore confetti errors
      }
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Bonjour Lagune Fitness Club !
Je souhaite rejoindre le club :
• Nom : ${formData.name || "[Votre Nom]"}
• Téléphone : ${formData.phone || "Non renseigné"}
• Objectif : ${formData.goal}
• Moyen de paiement : ${formData.paymentMethod}
${formData.message ? `• Message : ${formData.message}` : "• Formule : 1 000 FCFA la séance / 15 000 FCFA par mois"}`;

    window.open(
      `https://wa.me/221775526052?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative py-28 bg-[#090909] border-t border-white/5 text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#00F59B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#00F59B]" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#00F59B] font-semibold">
                LOCALISATION & PRISE DE CONTACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              NOUS TROUVER & ÉCHANGER.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Situé au cœur de la zone Somone–Ngaparou. Venez visiter les installations et échanger avec notre équipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards, Schedule & Google Maps Location */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <a
                href="tel:+221775526052"
                className="p-5 rounded-2xl bg-[#111114] border border-white/10 hover:border-[#00F59B]/60 transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00F59B]/10 flex items-center justify-center text-[#00F59B] group-hover:bg-[#00F59B] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Appel Direct
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    +221 77 552 60 52
                  </div>
                  <div className="text-[11px] text-[#00F59B] mt-1 font-medium">
                    Joignable 7j / 7
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/221775526052?text=Bonjour%20Lagune%20Fitness%20Club,%20je%20souhaite%20des%20informations%20sur%20les%20abonnements."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#111114] border border-white/10 hover:border-emerald-500/60 transition-all group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    WhatsApp Officiel
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    +221 77 552 60 52
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-medium">
                    Réponse rapide
                  </div>
                </div>
              </a>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00F59B]/10 flex items-center justify-center text-[#00F59B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Horaires d&apos;Ouverture
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                      <AlertCircle className="w-3 h-3 text-[#00F59B]" />
                      <span>Horaires indicatifs — à confirmer avec le club</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-300 font-medium">Lundi – Vendredi</span>
                  <span className="font-mono text-white font-semibold">06:30 – 21:00</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-300 font-medium">Samedi</span>
                  <span className="font-mono text-white font-semibold">08:00 – 20:00</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-zinc-300 font-medium">Dimanche</span>
                  <span className="font-mono text-[#00F59B] font-semibold">09:00 – 18:00</span>
                </div>
              </div>
            </div>

            {/* Google Maps Location Showcase */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111114]">
              {/* Map Header */}
              <div className="p-4 bg-zinc-900/60 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00F59B]" />
                  <span className="text-xs font-semibold text-white tracking-wider uppercase">
                    Route de Ngaparou–Somone, Sénégal
                  </span>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Lagune+Fitness+Club+Somone+Ngaparou+Senegal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00F59B] hover:bg-[#00DC82] text-black text-[11px] font-extrabold uppercase tracking-wider transition-colors shadow-md shadow-[#00F59B]/20"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Ouvrir dans Maps</span>
                </a>
              </div>

              {/* Map Container */}
              <div className="relative w-full h-[280px] bg-zinc-900">
                <iframe
                  title="Lagune Fitness Club Location Map"
                  src="https://maps.google.com/maps?q=Lagune%20Fitness%20Club%2C%20Somone%2C%20Senegal&t=m&z=15&output=embed&iwloc=near"
                  className="w-full h-full border-0 filter grayscale contrast-[1.15] invert-[0.88] hue-rotate-[190deg]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                  <span className="text-[#00F59B] font-bold">LAGUNE FITNESS</span> • Petite Côte (Somone / Ngaparou)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111114] border border-white/10 relative">
              <div className="flex items-center gap-2 mb-2 text-xs uppercase font-mono tracking-widest text-[#00F59B]">
                <Calendar className="w-3.5 h-3.5" />
                <span>RÉSERVATION & CONTACT DIRECT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-white">
                REJOIGNEZ LE CLUB.
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light">
                Remplissez ce formulaire pour planifier une découverte du club, obtenir des conseils d&apos;adhésion ou échanger directement par WhatsApp.
              </p>

              {submitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-[#00F59B]/10 border border-[#00F59B]/40 text-center animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-[#00F59B] mx-auto mb-3" />
                  <h4 className="text-lg font-bold uppercase font-display text-white">
                    Demande Reçue avec Succès !
                  </h4>
                  <p className="text-xs text-zinc-300 mt-2 font-light">
                    Merci pour votre intérêt envers le Lagune Fitness Club. Notre équipe vous recontactera très rapidement.
                  </p>
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Transférer sur WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Ousmane Diop"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Téléphone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                          type="tel"
                          required
                          placeholder="+221 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Email (optionnel)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                          type="email"
                          placeholder="adresse@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Objective & Payment Method Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Objectif principal
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                      >
                        <option value="Musculation & Force">Musculation & Force pure</option>
                        <option value="Cardio & Perte de poids">Cardio & Perte de poids</option>
                        <option value="Coaching Privé 1-on-1">Coaching Privé 1-on-1</option>
                        <option value="Pass Vacances / Découverte">Pass Vacances / Découverte</option>
                        <option value="Remise en forme générale">Remise en forme générale</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Moyen de règlement préféré
                      </label>
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                      >
                        <option value="Wave Sénégal (Transfert direct)">Wave Sénégal</option>
                        <option value="Orange Money Sénégal (#144#)">Orange Money Sénégal</option>
                        <option value="Espèces à l'accueil du club">Espèces sur place</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Votre Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Indiquez vos disponibilités ou toute question particulière..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 rounded-xl bg-[#00F59B] hover:bg-[#00DC82] text-black font-extrabold tracking-wider text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00F59B]/25 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wider text-xs uppercase flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Par WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
