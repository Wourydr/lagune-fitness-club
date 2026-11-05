"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Master gain
        const master = ctx.createGain();
        master.gain.setValueAtTime(0.01, ctx.currentTime);
        master.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);
        master.connect(ctx.destination);
        masterGainRef.current = master;

        // Sub bass drone oscillator (48 Hz)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(48, ctx.currentTime);

        // Lowpass filter for warm tone
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        // Harmonic drone (96 Hz)
        const osc2 = ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(96.2, ctx.currentTime);

        const osc2Gain = ctx.createGain();
        osc2Gain.gain.setValueAtTime(0.04, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(osc2Gain);
        osc2Gain.connect(filter);
        filter.connect(master);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        setIsPlaying(true);
      } catch (e) {
        console.warn("Audio context could not start:", e);
      }
    } else {
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.8
        );
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 850);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      try {
        audioCtxRef.current?.close();
      } catch {
        // ignore cleanup error
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Couper l'ambiance sonore" : "Activer l'immersion sonore"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#00F59B]/60 hover:bg-[#00F59B]/10 transition-all text-xs font-medium text-zinc-300 hover:text-white group backdrop-blur-md"
      aria-label="Contrôle audio d'immersion"
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F59B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F59B]"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-[#00F59B]" />
          <span className="hidden sm:inline">Son 48Hz ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
          <span className="hidden sm:inline">Son Immersif</span>
        </>
      )}
    </button>
  );
}
