"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AutoPetSprite from "./autopetsprite";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollPetAnimation() {
  const petRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1px)", () => {
      const particles = gsap.utils.toArray<HTMLDivElement>(".pet-particle", petRef.current);
      
      particles.forEach((p) => {
        const flairId = Math.floor(gsap.utils.random(2, 31)); 
        p.style.backgroundImage = `url(https://assets.codepen.io/16327/flair-${flairId}.png)`;
        
        gsap.set(p, { 
          xPercent: -50, 
          yPercent: -50, 
          left: "50%", 
          top: "50%", 
          scale: 0, 
          opacity: 0,
          rotation: () => gsap.utils.random(0, 360)
        });
      });

      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const isScrollingDown = self.direction === 1;

          if (Math.abs(velocity) < 50) return;

          const activeParticles = gsap.utils.shuffle(particles).slice(0, 5);

          gsap.fromTo(activeParticles, 
            { 
              x: 0, 
              y: 0, 
              scale: 0.2, 
              opacity: 1,
              rotation: () => gsap.utils.random(0, 360)
            }, 
            {
              x: () => gsap.utils.random(-120, 120), 
              y: () => isScrollingDown ? gsap.utils.random(-150, -300) : gsap.utils.random(150, 300),
              scale: () => gsap.utils.random(0.5, 1.5), 
              rotation: () => `+=${gsap.utils.random(-200, 200)}`,
              opacity: 0,
              duration: () => gsap.utils.random(0.6, 1.2),
              ease: "power2.out",
              overwrite: true 
            }
          );
        }
      });

      const initAnimation = () => {
        const target = document.querySelector("#pet-destination");
        const home = document.querySelector("#home");
        
        if (!target || !home || !petRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#home",
            start: "bottom 85%", 
            endTrigger: "#stake",
            end: "center center", 
            scrub: 0.5,
            invalidateOnRefresh: true, 
          }
        });

        const getDistanceY = () => {
          const el = document.querySelector("#pet-destination");
          if (!el || !petRef.current) return 0;
          return el.getBoundingClientRect().top - petRef.current.getBoundingClientRect().top;
        };
        const getDistanceX = () => {
          const el = document.querySelector("#pet-destination");
          if (!el || !petRef.current) return 0;
          return el.getBoundingClientRect().left - petRef.current.getBoundingClientRect().left;
        };

        tl.to(petRef.current, {
          x: getDistanceX,
          y: getDistanceY,
          ease: "none",
          duration: 1 
        }, 0);

        tl.to(petRef.current, {
          keyframes: [
            { scaleY: 0.9, scaleX: 1.1, duration: 0.1 },
            { scaleY: 1.15, scaleX: 0.9, duration: 0.7 },
            { scaleY: 0.7, scaleX: 1.3, duration: 0.1 },
            { scaleY: 1.2, scaleX: 1.2, duration: 0.1 } 
          ],
          ease: "none"
        }, 0); 
      };

      const timer = setTimeout(() => {
        initAnimation();
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    });
  }, { scope: petRef });

  return (
    <div
      ref={petRef}
      className="absolute z-[100] left-[6%] md:left-[12%] top-[65vh] md:top-[50vh] pointer-events-none origin-bottom"
    >
      <div className="absolute inset-0 z-[-1]">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="pet-particle absolute bg-center bg-no-repeat bg-contain"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        ))}
      </div>

      <AutoPetSprite />
    </div>
  );
}