"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Subheading } from "@/components/ui/subheading";

const projects = [
  {
    issueId: 42,
    name: "OpenVid P2P",
    user: "CristianOlivera1",
    tags: ["WebRTC", "React"],
    detail:
      "Servidor descentralizado para streaming de video utilizando infraestructura mínima y conexiones peer-to-peer.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    issueId: 43,
    name: "AgroTracker",
    user: "dev_juan",
    tags: ["IoT", "Next.js"],
    detail:
      "Sistema visualizado en un dashboard web para monitoreo de humedad en los cultivos locales de la región.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
  },
  {
    issueId: 44,
    name: "Campus Map",
    user: "maria_labs",
    tags: ["PWA", "Maps"],
    detail:
      "Aplicación web progresiva con mapas interactivos y rutas para los estudiantes de nuevos ingresos en la sede.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
  },
];

interface CardHorizontalProps {
  issueId: number;
  name: string;
  user: string;
  tags: string[];
  detail: string;
  image: string;
}

function CardHorizontal({ issueId, name, user, tags, detail, image }: CardHorizontalProps) {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="min-w-[320px] md:min-w-[400px] w-full md:w-[400px] h-[520px] relative rounded-[2rem] overflow-hidden group shrink-0 snap-center"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent"></div>

      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
        <span className="glass-panel px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase flex items-center space-x-2 text-accent border-accent/20">
          <Icon
            icon="solar:record-circle-bold"
            width="12"
            height="12"
            className="animate-pulse shrink-0"
          />
          <span className="leading-none pt-[1px]">Issue #{issueId}</span>
        </span>

      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-border flex items-center justify-center text-[10px]">
            {user.charAt(0)}
          </div>
          <span className="text-xs text-white/60">@{user}</span>
        </div>
        <h3 className="text-3xl font-medium mb-4">{name}</h3>
        <div className="glass-panel bg-card/80 rounded-2xl p-6 flex flex-col gap-3 border-none">
          <p className="text-sm font-light text-white/90 leading-relaxed">
            {detail}
          </p>
          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SlideProjects() {
  return (
    <section
      id="projects"
      data-slide
      className="py-24 overflow-hidden min-h-screen flex flex-col justify-center bg-background"
    >
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto mb-12 w-full">
        <Subheading text="Proyectos" />
        <h2 className="text-4xl md:text-5xl font-medium max-w-2xl leading-tight text-white">
           Últimos proyectos inscritos.
        </h2>
      </div>

      <div className="w-full">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-12 max-w-[1440px] mx-auto pb-12 snap-x snap-mandatory">
          {projects.map((project, idx) => (
            <CardHorizontal key={idx} {...project} />
          ))}
          <div className="min-w-[1px] md:min-w-[40px] shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>

  );
}
