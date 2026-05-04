"use client";

import { motion } from "framer-motion";
import { Subheading } from "@/components/ui/subheading";

const steps = [
   {
    num: "1",
    title: "Crea tu proyecto",
    desc: (
      <>
        Usa la tecnología que quieras y despliega tu app web. 
        Mira nuestras <a href="/suggest" className="text-accent hover:underline font-normal">sugerencias de hosting gratuito</a>.
      </>
    ),
  },
  {
    num: "2",
    title: "Registra tu participación",
    desc: (
      <>
        Sube tu issue en el <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-normal">repositorio oficial</a> utilizando la plantilla indicada.
      </>
    ),
  },
];

export function SlideHowToParticipate() {
  return (
    <section id="stake"
      data-slide
      className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <Subheading text="Slide 2: Cómo Participar" />
          <div id="pet-destination" className="w-16 h-16 mb-4 mt-2"></div>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-10 max-w-2xl">
            Proceso de inscripción.
          </h2>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center font-bold text-xl shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">{step.title}</h4>
                  <p className="text-white/60 font-light text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex items-center"
        >
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-4174-large.mp4"
            ></video>
            <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
