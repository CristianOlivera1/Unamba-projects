"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Underline } from "../ui/underline";
import AutoPetSprite from "../ui/autopetsprite";

export function Hero() {
  return (
    <div id="home" data-slide className="p-2 md:p-4 h-[95vh] md:h-screen flex items-center justify-center relative">
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster-hero.avif"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none mask-b-from-50% mask-b-to-99%"
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos.
        </video>
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen opacity-25"
          style={{
            background: 'linear-gradient(130deg, transparent 40%, transparent 50%, #319197 76.05%)'
          }}
        ></div>
        <Navbar />

        <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 z-20 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
              <AutoPetSprite />

            <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-6 font-sans text-white">
              Impulsando el talento
              <br />
              <span className="text-white/90">de nuestra región.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-12 w-full lg:w-auto"
          >
            <div className="text-lg font-light text-white/80 max-w-sm">
              Desarrolla tu proyecto y demuestra tu talento en{" "}
              <span className="relative inline-block whitespace-nowrap text-white">
                3 semanas.
                <Underline color="var(--color-accent)"
                  delay={1}
                  strokeWidth={4} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
