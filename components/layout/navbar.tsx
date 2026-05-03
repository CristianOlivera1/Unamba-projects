"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex items-center justify-between px-4 md:px-8 w-full max-w-[1440px] mx-auto"
    >
      <div className="flex items-center cursor-pointer shrink-0">
        <img
          src="/images/logo.webp"
          alt="Logo UNAMBA Hack"
          className="w-16 h-16 object-contain"
        />

        <span className="font-semibold text-lg pt-2 tracking-widest  text-white">
          UNAMBA Hackaton
        </span>
      </div>

      <div className="hidden md:flex mx-auto glass-panel rounded-full px-6 py-2.5 items-center justify-center space-x-10 bg-black/40 border border-white/10 text-white/80 text-sm">
        <a href="#home" className="cursor-pointer hover:text-white transition-colors text-white">
          Inicio
        </a>

        <a href="#stake" className="cursor-pointer hover:text-white transition-colors">
          Participación
        </a>

        <a href="#bases" className="cursor-pointer hover:text-white transition-colors">
          Bases
        </a>

        <a href="#projects" className="cursor-pointer hover:text-white transition-colors">
          Proyectos
        </a>
      </div>
      <div className="hidden md:flex items-center justify-end w-[180px] shrink-0">
        <a
          href="https://github.com/CristianOlivera1/Unamba-hack"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold  tracking-widest hover:bg-accent hover:text-white transition-all duration-300 active:scale-95"
        >
          Inscribirse
        </a>
      </div>
    </motion.nav>
  );
}
