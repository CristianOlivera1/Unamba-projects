"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Subheading } from "@/components/ui/subheading";

const rules = [
  {
    icon: "solar:server-square-linear",
    title: "Alojamiento",
    detail:
      "La aplicación debe estar desplegada y accesible en la web durante la evaluación.",
  },
  {
    icon: "solar:rocket-linear",
    title: "Proyecto Nuevo",
    detail:
      "No puede tener usuarios reales ni estar operando comercialmente previo al evento.",
  },
  {
    icon: "solar:code-circle-linear",
    title: "Código Abierto",
    detail:
      "El repositorio debe ser completamente público e incluir un README detallado.",
  },
  {
    icon: "solar:users-group-two-rounded-linear",
    title: "Registro",
    detail:
      "Participación individual o en equipos. Un solo registro por proyecto mediante una Issue oficial en el repositorio matriz.",
  },
];

export function SlideRules() {
  return (
    <section id="bases"
      data-slide
      className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2"
        >
          <Subheading text="Slide 3: Bases" />
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8 max-w-2xl">
            Criterios de evaluación y bases del concurso.
          </h2>

          <div className="flex items-center space-x-6 border-b border-white/10 pb-8 max-w-md">
            <p className="text-white/60 font-light text-base leading-relaxed">
              Se evaluará la experiencia de usuario (UX/UI), el nivel de
              innovación, la utilidad real del proyecto para la comunidad y la
              complejidad técnica de la implementación.
            </p>
          </div>
        </motion.div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
          {rules.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-card border border-border hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-6">
                <Icon icon={item.icon} width="24" height="24" />
              </div>
              <span className="text-xl font-medium mb-3">
                {item.title}
              </span>
              <span className="text-white/60 font-light text-base leading-relaxed">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
