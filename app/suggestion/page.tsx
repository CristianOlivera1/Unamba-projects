"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Subheading } from "@/components/ui/subheading";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const platforms = [
  { name: "Vercel", icon: "ri:vercel-fill", monochrome: true, yt: "https://www.youtube.com/results?search_query=como+desplegar+en+vercel+nextjs" },
  { name: "Netlify", icon: "logos:netlify-icon", yt: "https://www.youtube.com/results?search_query=como+desplegar+en+netlify" },
  { name: "GitHub Pages", icon: "mdi:github", monochrome: true, yt: "https://www.youtube.com/results?search_query=como+desplegar+en+github+pages" },
  { name: "Render", icon: "simple-icons:render", monochrome: true, yt: "https://www.youtube.com/results?search_query=como+desplegar+backend+en+render" },
  { name: "Railway", icon: "simple-icons:railway", monochrome: true, yt: "https://www.youtube.com/results?search_query=como+desplegar+en+railway+app" },
  { name: "Fly.io", icon: "logos:fly-icon", yt: "https://www.youtube.com/results?search_query=deploy+app+on+fly.io" },
  { name: "Firebase", icon: "logos:firebase", yt: "https://www.youtube.com/results?search_query=deploy+to+firebase+hosting+tutorial" },
  { name: "Cloudflare", icon: "logos:cloudflare-icon", yt: "https://www.youtube.com/results?search_query=deploy+cloudflare+pages+tutorial" },
  { name: "Supabase", icon: "logos:supabase-icon", yt: "https://www.youtube.com/results?search_query=supabase+hosting+tutorial" },
  { name: "Surge", icon: "logos:surge", yt: "https://www.youtube.com/results?search_query=deploy+with+surge+sh" },
  { name: "Replit", icon: "logos:replit-icon", yt: "https://www.youtube.com/results?search_query=como+desplegar+en+replit" },
  { name: "AWS Free", icon: "logos:aws", yt: "https://www.youtube.com/results?search_query=aws+free+tier+deployment+guide" },
  { name: "Azure", icon: "logos:microsoft-azure", yt: "https://www.youtube.com/results?search_query=azure+free+tier+deploy+tutorial" },
  { name: "Google Cloud", icon: "logos:google-cloud", yt: "https://www.youtube.com/results?search_query=gcp+free+tier+deploy+tutorial" },
  { name: "Oracle Cloud", icon: "logos:oracle", yt: "https://www.youtube.com/results?search_query=oracle+cloud+free+tier+deploy" },
];

export default function DeploymentPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".platform-item");

    items.forEach((item) => {
      const circle = item.querySelector<HTMLElement>(".circle-anim");
      const playIcon = item.querySelector<HTMLElement>(".play-icon");
      
      if (!circle || !playIcon) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { 
        scale: 1.1, 
        duration: 1.2, 
        ease: "elastic.out(1.2, 0.3)",
        borderColor: "rgba(49, 145, 151, 0.5)", 
        boxShadow: "0 0 30px rgba(49, 145, 151, 0.2)"
      })
      .to(playIcon, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(2)"
      }, 0.1);

      item.addEventListener("mouseenter", () => {
        tl.timeScale(1).play();
      });

      item.addEventListener("mouseleave", () => {
        tl.timeScale(5).reverse();
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-[#0c0c0e] py-32 px-4 font-sans selection:bg-accent/30">
      <div className="max-w-5xl mx-auto">
        
        <nav className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm text-white/50 hover:text-white transition-colors group">
            <Icon icon="lucide:arrow-left" width="16" className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
            Volver al inicio
          </Link>
        </nav>

        <header className="mb-20 text-center flex flex-col items-center">
          <Subheading text="Recursos de Lanzamiento" />
          <h1 className="text-4xl md:text-6xl font-medium text-white mt-6 mb-4 tracking-tight">
            ¿Dónde desplegar tu <span className="text-accent">proyecto?</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl font-light">
            Selecciona una plataforma para ver un tutorial de despliegue. Todas ofrecen capas gratuitas para estudiantes.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-14">
          {platforms.map((platform) => (
            <Link 
              key={platform.name} 
              href={platform.yt} 
              target="_blank" 
              className="platform-item group flex flex-col items-center gap-4 text-center cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="circle-anim relative w-24 h-24 md:w-36 md:h-36 bg-[#111114] border border-white/5 rounded-full flex items-center justify-center shadow-2xl overflow-hidden transition-colors duration-300">
                  <Icon 
                    icon={platform.icon} 
                    width="55%" 
                    className={`
                      filter grayscale group-hover:grayscale-0 transition-all duration-300
                      ${platform.monochrome ? 'opacity-40 group-hover:opacity-100' : ''}
                    `} 
                  />
                </div>
                
                <div className="play-icon absolute -bottom-1 -right-1 bg-red-600 text-white p-2 rounded-full opacity-0 translate-y-2">
                  <Icon icon="lucide:play" width="14" fill="currentColor" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="block text-sm font-medium text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">
                  {platform.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent/0 group-hover:text-accent/100 transition-all duration-300 font-mono block">
                  Ver Tutorial
                </span>
              </div>
            </Link>
          ))}
          
        </div>
         <footer className="mt-32 pt-10 border-t border-white/5 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/5 border border-accent/10 text-accent/80 text-sm font-mono">
            <Icon icon="lucide:info" width="18" />
            <span>Tip: Prioriza Vercel para Frontend y Render para Backend.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}