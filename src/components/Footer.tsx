import React from "react";
import { ArrowUpRight, Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050506] border-t border-white/10 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F59B] to-[#00DC82] p-[1px]">
                  <div className="w-full h-full bg-[#090909] rounded-[7px] flex items-center justify-center font-black text-white text-sm">
                    L<span className="text-[#00F59B]">F</span>
                  </div>
                </div>
                <span className="font-extrabold text-base tracking-[0.2em] uppercase font-display">
                  LAGUNE <span className="text-[#00F59B]">FITNESS</span>
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
                Le club de fitness haut de gamme de la Petite Côte. Un sanctuaire d&apos;entraînement moderne et énergique à La Somone, pensé pour transcender vos limites.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500 font-mono">
              <span>SOMONE • SÉNÉGAL</span>
              <span>•</span>
              <span className="text-[#00F59B]">14.486°N, 17.076°W</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#00F59B] font-semibold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Le Club & Philosophie
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Zones d&apos;Entraînement
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Galerie Immersive
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">
                  Abonnements & Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Accès & Localisation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#00F59B] font-semibold mb-4">
              CONTACT & ACCÈS
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00F59B] shrink-0 mt-0.5" />
                <span>Route de Ngaparou–Somone, Petite Côte, Région de Thiès, Sénégal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00F59B] shrink-0" />
                <a href="tel:+221775526052" className="hover:text-white transition-colors font-mono">
                  +221 77 552 60 52
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#00F59B] shrink-0" />
                <a
                  href="https://wa.me/221775526052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +221 77 552 60 52
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/221775526052?text=Bonjour,%20je%20souhaite%20rejoindre%20le%20club."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Échanger en direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00F59B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Credits Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} LAGUNE FITNESS CLUB. Somone, Sénégal. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>YOUR BODY. YOUR LIMITS. YOUR JOURNEY.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
