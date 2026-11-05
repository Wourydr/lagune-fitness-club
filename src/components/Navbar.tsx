"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import AudioController from "./AudioController";

const NAV_LINKS = [
  { label: "Le Club", href: "#about" },
  { label: "Entraînements", href: "#training" },
  { label: "Galerie", href: "#gallery" },
  { label: "Abonnements", href: "#membership" },
  { label: "Contact & Accès", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#090909]/85 backdrop-blur-md border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Lagune Fitness Club"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00F59B] to-[#00DC82] p-[1px] shadow-lg shadow-[#00F59B]/20 group-hover:shadow-[#00F59B]/40 transition-shadow">
              <div className="w-full h-full bg-[#090909] rounded-[7px] flex items-center justify-center font-black text-white text-base tracking-tighter">
                L<span className="text-[#00F59B]">F</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-[0.2em] text-white uppercase font-display group-hover:text-zinc-100 transition-colors">
                LAGUNE <span className="text-[#00F59B]">FITNESS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-medium">
                Somone • Sénégal
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-white/[0.03] border border-white/[0.08] px-6 py-2 rounded-full backdrop-blur-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors relative py-1 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00F59B] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right actions: Audio Toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <AudioController />
            <a
              href="https://wa.me/221775526052?text=Bonjour%20Lagune%20Fitness%20Club,%20je%20souhaite%20d%C3%A9couvrir%20le%20club%20et%20conna%C3%AEtre%20les%20modalit%C3%A9s%20d'adh%C3%A9sion."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00F59B] hover:bg-[#00DC82] text-black text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#00F59B]/25 hover:shadow-[#00F59B]/45 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Nous Rejoindre</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <AudioController />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#090909]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-widest text-zinc-200 hover:text-[#00F59B] transition-colors font-medium py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://wa.me/221775526052?text=Bonjour%20Lagune%20Fitness%20Club,%20je%20souhaite%20d%C3%A9couvrir%20le%20club."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00F59B] text-black text-sm font-bold tracking-wider uppercase shadow-lg shadow-[#00F59B]/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contacter sur WhatsApp</span>
            </a>
            <div className="text-center text-xs text-zinc-500">
              Somone • Tél: +221 77 552 60 52
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
