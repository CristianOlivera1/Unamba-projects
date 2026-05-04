"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonAnchor } from "../ui/button-anchor";
import { Icon } from "@iconify/react";

const NAV_LINKS = [
  { id: "home", label: "Inicio" },
  { id: "stake", label: "Participación" },
  { id: "bases", label: "Bases" },
  { id: "projects", label: "Proyectos" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [desktopHole, setDesktopHole] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [mobileHole, setMobileHole] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Usamos getBoundingClientRect para mediciones hiperprecisas
  const updateHoles = useCallback(() => {
    // ESCRITORIO
    const desktopContainer = document.querySelector(".desktop-nav");
    const desktopEl = document.querySelector(`.desktop-nav a[href="#${activeSection}"]`);

    if (desktopContainer && desktopEl) {
      const cRect = desktopContainer.getBoundingClientRect();
      const eRect = desktopEl.getBoundingClientRect();
      setDesktopHole({
        left: eRect.left - cRect.left,
        top: eRect.top - cRect.top,
        width: eRect.width,
        height: eRect.height,
      });
    } else {
      setDesktopHole((prev) => ({ ...prev, width: 0 }));
    }

    // MÓVIL
    const mobileContainer = document.querySelector(".mobile-nav");
    const mobileEl = document.querySelector(`.mobile-nav a[href="#${activeSection}"]`);

    if (mobileContainer && mobileEl) {
      const cRect = mobileContainer.getBoundingClientRect();
      const eRect = mobileEl.getBoundingClientRect();
      setMobileHole({
        left: eRect.left - cRect.left,
        top: eRect.top - cRect.top,
        width: eRect.width,
        height: eRect.height,
      });
    } else {
      setMobileHole((prev) => ({ ...prev, width: 0 }));
    }
  }, [activeSection]);

  useEffect(() => {
    const timer = setTimeout(updateHoles, 50);
    window.addEventListener("resize", updateHoles);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHoles);
    };
  }, [updateHoles, isMobileOpen]);

  const desktopMaskSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' rx='18' fill='white'/%3E%3C/svg%3E")`;

  const mobileMaskSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' rx='12' fill='white'/%3E%3C/svg%3E")`;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex flex-col px-4 md:px-8 w-full max-w-[1440px] mx-auto"
    >
      <div className="flex items-center justify-between relative">
        <a href="#home" className="flex items-center cursor-pointer shrink-0 z-20">
          <img src="/images/logo.webp" alt="Logo UNAMBA Hack" className="w-16 h-16 object-contain" />
          <span className="font-semibold text-lg pt-2 tracking-widest text-white hidden sm:block">
            UNAMBA <span className="text-accent">Hackaton</span>
          </span>
        </a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-auto">
          <div className="relative flex p-1.5 items-center justify-center space-x-1 text-sm desktop-nav rounded-full border border-white/10">

            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full -z-10"
              style={{
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                WebkitMaskImage: `linear-gradient(white, white), ${desktopMaskSvg}`,
                WebkitMaskSize: `100% 100%, ${desktopHole.width}px ${desktopHole.height}px`,
                WebkitMaskPosition: `0 0, ${desktopHole.left}px ${desktopHole.top}px`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskComposite: "destination-out",
                maskImage: `linear-gradient(white, white), ${desktopMaskSvg}`,
                maskSize: `100% 100%, ${desktopHole.width}px ${desktopHole.height}px`,
                maskPosition: `0 0, ${desktopHole.left}px ${desktopHole.top}px`,
                maskRepeat: "no-repeat",
                maskComposite: "exclude",
              }}
            />

            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`cursor-pointer px-4 py-2 rounded-full transition-colors duration-300 relative z-10 ${activeSection === link.id
                  ? "text-white font-medium border border-white/50"
                  : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end w-[180px] shrink-0 z-20">
          <ButtonAnchor href="https://github.com/CristianOlivera1/Unamba-hack">
            <span className="mr-1">Inscribirse</span>
            <Icon icon="line-md:github-loop" width="18" />
          </ButtonAnchor>
        </div>

        <button
          className="md:hidden flex items-center justify-center p-2 text-white/80 hover:text-white glass-panel bg-black/40 backdrop-blur-md border border-white/10 rounded-xl z-20"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <Icon icon={isMobileOpen ? "line-md:close" : "line-md:menu"} width="24" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 w-full relative rounded-2xl border border-white/10 shadow-2xl mobile-nav overflow-hidden"
          >

            {/* FONDO OSCURO CON EL HUECO */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-2xl -z-10"
              style={{
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                WebkitMaskImage: `linear-gradient(white, white), ${mobileMaskSvg}`,
                WebkitMaskSize: `100% 100%, ${mobileHole.width}px ${mobileHole.height}px`,
                WebkitMaskPosition: `0 0, ${mobileHole.left}px ${mobileHole.top}px`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskComposite: "destination-out",
                maskImage: `linear-gradient(white, white), ${mobileMaskSvg}`,
                maskSize: `100% 100%, ${mobileHole.width}px ${mobileHole.height}px`,
                maskPosition: `0 0, ${mobileHole.left}px ${mobileHole.top}px`,
                maskRepeat: "no-repeat",
                maskComposite: "exclude",
              }}
            />

            <div className="p-5 flex flex-col space-y-2 relative z-10">
              {/* Título de la Sección / Marca */}
              <div className="px-4 py-2 mb-2">
                <h2 className="text-xl font-bold text-white mt-1">
                  UNAMBA <span className="text-accent">Hackaton</span>
                </h2>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-all duration-300 ${activeSection === link.id
                      ? "bg-white/5 text-white font-semibold border border-white/10 shadow-sm"
                      : "text-[#888] hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-6 mt-4 border-t border-[#2e2e2e] w-full">
                <ButtonAnchor
                  href="https://github.com/CristianOlivera1/Unamba-hack"
                  size="md"
                >
                  <span className="mr-2">Inscribirse en GitHub</span>
                  <Icon icon="line-md:github-loop" width="18" />
                </ButtonAnchor>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}