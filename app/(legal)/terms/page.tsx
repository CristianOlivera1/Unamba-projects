"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function TermsPage() {

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

        <header className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Términos de <span className="text-[#F9DA86]">Participación</span>
          </h1>
          <p className="text-white/40 text-sm font-mono uppercase tracking-widest">
            Última actualización: {lastUpdatedDate}
          </p>
        </header>

        <main className="space-y-12 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Aceptación del Desafío</h2>
            <p>Al inscribirte en esta Hackathon mediante la creación de un Issue en el repositorio oficial, declaras haber leído las reglas de participación y te comprometes a seguir el código de conducta de la comunidad.</p>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
               <Icon icon="lucide:terminal" className="text-[#F9DA86]" />
               2. Reglas del Juego
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-4">
                <span className="text-[#F9DA86] font-bold">A.</span>
                <p><strong className="text-white">Originalidad:</strong> Todo el código debe ser escrito durante el periodo de la hackathon. Se permite el uso de librerías y frameworks Open Source.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#F9DA86] font-bold">B.</span>
                <p><strong className="text-white">Equipo:</strong> La participación puede ser individual o en grupos de máximo 3 personas, siempre que estén registrados correctamente.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#F9DA86] font-bold">C.</span>
                <p><strong className="text-white">Deadline:</strong> Los proyectos enviados después del 03/05/2026 no serán considerados para los premios principales.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. Propiedad Intelectual</h2>
            <p>El código desarrollado te pertenece. Sin embargo, al participar, otorgas a la organización el derecho de exhibir el proyecto (capturas, demos y links) en la ceremonia de clausura y en los materiales promocionales del evento.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. Descalificación</h2>
            <p className="mb-3">Serán motivos de descalificación automática:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 marker:text-red-500">
              <li>Plagio directo de proyectos existentes.</li>
              <li>Comportamiento ofensivo hacia otros participantes o el jurado.</li>
              <li>Presentar proyectos fuera de la temática establecida.</li>
            </ul>
          </section>
        </main>

        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/30 text-center md:text-left">
            Si tienes dudas técnicas, contacta a los organizadores.
          </p>
          <Link href="/privacy" className="text-xs font-mono text-white/50 hover:text-[#F9DA86] flex items-center gap-2 uppercase tracking-widest transition-colors">
            Ver Privacidad <Icon icon="lucide:external-link" />
          </Link>
        </footer>
      </div>
    </div>
  );
}