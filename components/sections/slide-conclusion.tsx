"use client";

import { Icon } from "@iconify/react";
import { Subheading } from "@/components/ui/subheading";

export function SlideConclusion() {
  return (
    <section
      data-slide
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster-conclusion.avif"
          className="w-full h-full object-cover mix-blend-luminosity"
        >
          <source src="/videos/conclusion.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-4xl px-6 md:px-12 relative z-10">
        <div className="flex justify-center mb-6">
          <Subheading text="Recta Final" />
        </div>

        <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-8 font-sans tracking-tight text-white">
          Límite de entrega: <br />
          <span className="text-accent">03 / 05 / 2026</span>
        </h2>
        <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
          El reloj corre (solo 3 semanas).
          la votación final será el <span className="text-white font-medium">[FECHA VOTACIÓN]</span> de forma
          <span className="text-white font-medium"> presencial en el auditorio de la universidad.</span>
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            className="inline-flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-accent hover:text-white transition-all active:scale-95 group"
          >
            <span className="leading-none pt-[1px]">Ir al Repositorio</span>

            <div className="flex items-center justify-center">
              <Icon
                icon="line-md:github-loop"
                width="20"
                height="20"
                className="shrink-0"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
