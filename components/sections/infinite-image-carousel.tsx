"use client";

import { useSyncExternalStore } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    alt: "Programadores trabajando en equipo",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    alt: "Código en pantalla",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    alt: "Equipo colaborando en pizarra",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    alt: "Setup de desarrollo",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    alt: "Hackathon ambiente",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    alt: "Desarrollador enfocado",
  },
];

const subscribeToMotionPreference = (callback: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getMotionPreferenceSnapshot = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getServerMotionPreferenceSnapshot = () => false;

interface InfiniteImageCarouselProps {
  speed?: "fast" | "slow";
  direction?: "left" | "right";
}

export function InfiniteImageCarousel({ speed = "fast", direction = "left" }: InfiniteImageCarouselProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreferenceSnapshot,
    getServerMotionPreferenceSnapshot
  );

  const animationDuration = speed === "fast" ? "20s" : "40s";
  const animationDirection: "normal" | "reverse" = direction === "left" ? "normal" : "reverse";

  return (
    <section className="relative w-full py-30 sm:py-50 overflow-hidden mt-10">
      
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-35">
        <picture className="w-full h-full">
          <source type="image/avif" srcSet="/images/unamba-pixel.avif" />
          <img
            src="/images/unamba-pixel.avif"
            alt=""
            className="w-full h-full object-cover mask-y-from-70% mask-y-to-99%"
          />
        </picture>
      </div>

      <div className="w-full flex justify-center relative z-10">
        <div
          className="max-w-[1000px] w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            className={`flex gap-4 w-max py-4 ${!prefersReducedMotion ? "animate-infinite-scroll hover:[animation-play-state:paused]" : ""}`}
            style={{
              "--animation-duration": animationDuration,
              "--animation-direction": animationDirection,
              animationName: !prefersReducedMotion ? "scroll" : "none",
              animationDuration: animationDuration,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDirection: animationDirection,
            } as React.CSSProperties}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={`${img.id}-${index}`}
                className="relative h-[190px] w-[290px] sm:h-[250px] sm:w-[350px] shrink-0 rounded-xl overflow-hidden border border-white/10 cursor-pointer group bg-[#121212]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
      `}</style>
    </section>
  );
}