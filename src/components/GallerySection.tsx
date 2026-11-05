"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Compass } from "lucide-react";

interface GalleryPhoto {
  id: number;
  src: string;
  span: string;
}

// 100% Real Google Maps photographs from Lagune Fitness Club Somone upscaled to 4K (=s3840)
// Pure high-resolution photography without inaccurate text overlays or forced labels
const REAL_GMAPS_4K_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "/images/gallery-7.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 8,
    src: "/images/gallery-8.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 9,
    src: "/images/gallery-9.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 10,
    src: "/images/gallery-10.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 11,
    src: "/images/gallery-11.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 12,
    src: "/images/gallery-12.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 13,
    src: "/images/gallery-13.jpg",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 14,
    src: "/images/gallery-14.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImage((prev) =>
      prev !== null ? (prev + 1) % REAL_GMAPS_4K_PHOTOS.length : null
    );
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImage((prev) =>
      prev !== null
        ? (prev - 1 + REAL_GMAPS_4K_PHOTOS.length) % REAL_GMAPS_4K_PHOTOS.length
        : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative py-28 bg-[#090909] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#00F59B]" />
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#00F59B] font-semibold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                PERSPECTIVES & ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              L&apos;ÉNERGIE DU SANCTUAIRE.
            </h2>
          </div>
          <div className="text-sm text-zinc-400 max-w-md font-light leading-relaxed">
            Découvrez le Lagune Fitness Club à travers ses installations, ses volumes et son atmosphère d&apos;entraînement à La Somone.
          </div>
        </div>

        {/* Asymmetric Bento Grid - Pure Photography without misleading labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] sm:auto-rows-[300px] gap-4 sm:gap-6">
          {REAL_GMAPS_4K_PHOTOS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-zinc-950 transition-all duration-500 hover:border-[#00F59B]/80 hover:shadow-2xl hover:shadow-[#00F59B]/20 ${item.span}`}
            >
              <Image
                src={item.src}
                alt="Lagune Fitness Club Somone"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-[1.05]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Minimal Clean Zoom Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="w-12 h-12 rounded-full bg-black/70 border border-[#00F59B]/60 text-white backdrop-blur-md flex items-center justify-center shadow-lg shadow-[#00F59B]/25 group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5 text-[#00F59B]" />
                </span>
              </div>

              {/* Minimal discrete photo numbering in bottom-right corner */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal in 4K */}
      {selectedImage !== null && REAL_GMAPS_4K_PHOTOS[selectedImage] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10 animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#00F59B] hover:text-black text-white flex items-center justify-center transition-colors z-20"
            aria-label="Fermer le plein écran"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#00F59B] hover:text-black text-white flex items-center justify-center transition-colors z-20"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#00F59B] hover:text-black text-white flex items-center justify-center transition-colors z-20"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container in 4K */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[78vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <Image
                src={REAL_GMAPS_4K_PHOTOS[selectedImage].src}
                alt="Lagune Fitness Club Somone"
                fill
                className="object-contain filter contrast-[1.05]"
                sizes="100vw"
                priority
                quality={95}
              />
            </div>

            {/* Pure, Clean Indicator without false labels */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-300">
                LAGUNE FITNESS CLUB • SOMONE
              </span>
              <span className="text-xs font-mono text-[#00F59B] font-semibold">
                {selectedImage + 1 < 10 ? `0${selectedImage + 1}` : selectedImage + 1} / {REAL_GMAPS_4K_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
