"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0c0c0e] py-34 px-4 sm:px-6 lg:px-8 font-sans selection:bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors group">
            <Icon icon="lucide:arrow-left" width="16" className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Volver al Home
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Políticas de <span className="text-accent">Privacidad</span>
          </h1>
          <p className="text-white/40 text-sm font-mono">
            Última actualización: {lastUpdatedDate}
          </p>
        </header>

        <main className="space-y-12 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <span className="text-accent/50 font-mono text-sm">01.</span> Introducción
            </h2>
            <p>En la Unamba Hackathon, valoramos la privacidad de cada desarrollador. Este documento detalla cómo manejamos la información que recopilamos durante el registro y la fase de competición en nuestra plataforma.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <span className="text-accent/50 font-mono text-sm">02.</span> Datos Recopilados
            </h2>
            <p className="mb-3">Para gestionar tu participación y la entrega de premios, recolectamos:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mono text-accent/80">
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                <Icon icon="lucide:user" className="shrink-0" /> Nombre y Apellidos
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                <Icon icon="lucide:github" className="shrink-0" /> Usuario de GitHub
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                <Icon icon="lucide:mail" className="shrink-0" /> Correo Institucional
              </li>
              <li className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                <Icon icon="lucide:code" className="shrink-0" /> URL del Repositorio
              </li>
            </ul>
          </section>

          <section className="relative overflow-hidden p-6 bg-accent/5 border border-accent/20 rounded-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icon icon="lucide:shield-check" width="80" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                <Icon icon="lucide:cpu" className="text-accent" width="18" />
                Procesamiento de Proyectos
              </h3>
              <p className="text-sm text-white/60">
                Tu código fuente y documentación técnica serán revisados únicamente por el jurado calificador bajo criterios de innovación, código limpio y escalabilidad.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <span className="text-accent/50 font-mono text-sm">03.</span> Uso de la Información
            </h2>
            <ul className="list-none space-y-3">
              {[
                "Validación de requisitos de inscripción.",
                "Comunicación de actualizaciones de la competencia.",
                "Publicación de ganadores en el Leaderboard.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle-2" className="text-accent mt-1 shrink-0" width="16" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="mt-20 pt-8 border-t border-white/10 text-center md:text-left">
          <p className="text-sm text-white/30">
            Al registrarte en el repositorio de GitHub, aceptas nuestras políticas. 
            Revisa también nuestros{" "}
            <Link href="/terms" className="text-white hover:text-accent transition-colors underline underline-offset-4">
              Términos y Condiciones
            </Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}