"use client";

import React, { useState } from "react";
import {
  X,
  Check,
  Copy,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amountXOF: string;
  amountEUR: string;
}

export default function PaymentModal({
  isOpen,
  onClose,
  planName,
  amountXOF,
  amountEUR,
}: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<"wave" | "om" | "cash">("wave");
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<"choose" | "instructions" | "success">("choose");
  const [receiptRef, setReceiptRef] = useState("");

  if (!isOpen) return null;

  const CLUB_PHONE = "+221 77 552 60 52";
  const CLUB_PHONE_RAW = "221775526052";

  const handleCopy = () => {
    navigator.clipboard.writeText("775526052");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
    const randomRef = "LFC-" + Math.floor(100000 + Math.random() * 900000);
    setReceiptRef(randomRef);
    setStep("success");
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#1DC3F4", "#FF7900", "#00F59B", "#FFFFFF"],
      });
    } catch {
      // ignore confetti errors
    }
  };

  const getWhatsAppReceiptUrl = () => {
    const methodLabel =
      selectedMethod === "wave"
        ? "Wave Sénégal"
        : selectedMethod === "om"
        ? "Orange Money"
        : "Paiement à l'accueil";

    const text = `Bonjour Lagune Fitness Club !
J'ai effectué mon règlement pour :
• Formule : ${planName} (${amountXOF})
• Moyen : ${methodLabel}
• Nom : ${senderName || "[Mon Nom]"}
• Téléphone : ${senderPhone || CLUB_PHONE}
• Réf transaction : ${receiptRef}

Merci de confirmer la validation de mon accès !`;

    return `https://wa.me/${CLUB_PHONE_RAW}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#0f0f12] border border-white/15 p-6 sm:p-8 shadow-2xl text-white my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {step !== "success" ? (
          <>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-[#00F59B] uppercase mb-2">
                <ShieldCheck className="w-3 h-3 text-[#00F59B]" />
                <span>Règlement Sécurisé • Sénégal</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase font-display">
                {planName}
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#00F59B] font-display">
                  {amountXOF}
                </span>
                <span className="text-xs text-zinc-400 font-mono">({amountEUR})</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 mb-6">
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                Sélectionnez votre moyen de paiement :
              </label>

              {/* Wave */}
              <div
                onClick={() => setSelectedMethod("wave")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedMethod === "wave"
                    ? "bg-[#1DC3F4]/10 border-[#1DC3F4] shadow-lg shadow-[#1DC3F4]/15"
                    : "bg-zinc-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#1DC3F4] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md">
                    <span className="tracking-tighter">wave</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Wave Sénégal</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1DC3F4]/20 text-[#1DC3F4] font-mono">
                        0% ou 1% frais
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      Paiement instantané via l&apos;application Wave
                    </p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedMethod === "wave"
                      ? "border-[#1DC3F4] bg-[#1DC3F4]"
                      : "border-zinc-600"
                  }`}
                >
                  {selectedMethod === "wave" && <Check className="w-3 h-3 text-black font-bold" />}
                </div>
              </div>

              {/* Orange Money */}
              <div
                onClick={() => setSelectedMethod("om")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedMethod === "om"
                    ? "bg-[#FF7900]/10 border-[#FF7900] shadow-lg shadow-[#FF7900]/15"
                    : "bg-zinc-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#FF7900] flex items-center justify-center text-black font-black text-xs shrink-0 shadow-md">
                    <span>OM</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Orange Money Sénégal</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF7900]/20 text-[#FF7900] font-mono">
                        #144# / App
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      Transfert direct au numéro officiel du club
                    </p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedMethod === "om"
                      ? "border-[#FF7900] bg-[#FF7900]"
                      : "border-zinc-600"
                  }`}
                >
                  {selectedMethod === "om" && <Check className="w-3 h-3 text-black font-bold" />}
                </div>
              </div>

              {/* Cash à l'accueil */}
              <div
                onClick={() => setSelectedMethod("cash")}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedMethod === "cash"
                    ? "bg-[#00F59B]/10 border-[#00F59B] shadow-lg shadow-[#00F59B]/15"
                    : "bg-zinc-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#00F59B]/20 border border-[#00F59B]/40 flex items-center justify-center text-[#00F59B] font-bold text-xs shrink-0">
                    CASH
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Paiement en Espèces au Club
                    </div>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      Règlement à l&apos;accueil lors de votre arrivée à La Somone
                    </p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedMethod === "cash"
                      ? "border-[#00F59B] bg-[#00F59B]"
                      : "border-zinc-600"
                  }`}
                >
                  {selectedMethod === "cash" && <Check className="w-3 h-3 text-black font-bold" />}
                </div>
              </div>
            </div>

            {/* Transfer Instructions Box */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 mb-6">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-mono">
                <span>NUMÉRO OFFICIEL DE TRANSFERT</span>
                <span className="text-[#00F59B] font-bold">Lagune Fitness Club</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg sm:text-xl font-mono font-bold text-white tracking-wide">
                  77 552 60 52
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-zinc-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00F59B]" />
                      <span className="text-[#00F59B]">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {selectedMethod === "wave" && (
                <p className="mt-3 text-[11px] text-[#1DC3F4] font-light border-t border-white/5 pt-2">
                  👉 Ouvrez votre application Wave et effectuez un envoi de{" "}
                  <strong>{amountXOF}</strong> au <strong>77 552 60 52</strong>.
                </p>
              )}

              {selectedMethod === "om" && (
                <p className="mt-3 text-[11px] text-[#FF7900] font-light border-t border-white/5 pt-2">
                  👉 Composez <strong>#144#</strong> ou ouvrez Orange Money et envoyez{" "}
                  <strong>{amountXOF}</strong> au <strong>77 552 60 52</strong>.
                </p>
              )}

              {selectedMethod === "cash" && (
                <p className="mt-3 text-[11px] text-[#00F59B] font-light border-t border-white/5 pt-2">
                  👉 Vous réglerez <strong>{amountXOF}</strong> directement à la réception du club avant votre séance.
                </p>
              )}
            </div>

            {/* Sender Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Votre Nom Complet *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ousmane Diop"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Votre Téléphone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="Ex: 77 XXX XX XX"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-[#00F59B] focus:outline-none text-white text-xs font-mono"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleConfirmPayment}
                className="w-full py-3.5 rounded-full bg-[#00F59B] hover:bg-[#00DC82] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#00F59B]/20 flex items-center justify-center gap-2"
              >
                <span>Confirmer mon paiement / réservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          /* Success Screen */
          <div className="text-center py-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#00F59B]/20 border border-[#00F59B]/40 text-[#00F59B] flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F59B]/10 text-[#00F59B] text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RÉSERVATION ENREGISTRÉE</span>
            </div>

            <h3 className="text-2xl font-black uppercase font-display text-white">
              Paiement Pris en Compte !
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light mt-2 max-w-sm mx-auto">
              Merci pour votre adhésion à <strong>Lagune Fitness Club</strong>. Votre référence de réservation est :
            </p>

            <div className="mt-4 p-3 rounded-xl bg-zinc-900 border border-white/10 inline-block font-mono text-sm font-bold text-[#00F59B]">
              {receiptRef}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-1.5 text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500 font-mono">Formule :</span>
                <span className="font-semibold text-white">{planName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-mono">Montant :</span>
                <span className="font-bold text-[#00F59B]">{amountXOF}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-mono">Moyen :</span>
                <span className="font-semibold text-white uppercase">
                  {selectedMethod === "wave"
                    ? "Wave"
                    : selectedMethod === "om"
                    ? "Orange Money"
                    : "Espèces"}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={getWhatsAppReceiptUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Envoyer la confirmation sur WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
