"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Subheading } from "@/components/ui/subheading";

// Registramos el plugin fuera del componente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prizes = [
  {
    id: "basic",
    place: "3er Premio",
    title: "$200 Amazon",
    desc: "+ $50 PayPal & 1 mes midu.dev",
    image: "/images/awards/bronze.png",
    imgWidth: "w-[80px] md:w-[100px]",
    featured: false,
    offset: "lg:-translate-y-[60px]",
  },
  {
    id: "ultimate",
    place: "1er Premio",
    title: "$500 Amazon",
    desc: "+ $150 PayPal & 1 año midu.dev",
    image: "/images/awards/gold-new.png",
    imgWidth: "w-[200px] md:w-[280px]",
    featured: true,
    offset: "lg:translate-y-0",
  },
  {
    id: "pro",
    place: "2do Premio",
    title: "$300 Amazon",
    desc: "+ $100 PayPal & 3 meses midu.dev",
    image: "/images/awards/silver.png",
    imgWidth: "w-[100px] md:w-[130px]",
    featured: false,
    offset: "lg:-translate-y-[20px]",
  },
];

export function SlideAwards() {
  const starsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const balloonsWrapperRef = useRef<HTMLDivElement>(null);
  const balloonsImgRef = useRef<HTMLPictureElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        balloonsWrapperRef.current,
        {
          y: 350,
          scale: 0.7,
          opacity: 0
        },
        {
          y: -150,
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      gsap.to(balloonsImgRef.current, {
        y: -30,
        x: 15,
        rotation: 4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const stars = starsRef.current?.querySelectorAll(".star-item");

      if (stars) {
        stars.forEach((star, index) => {
          gsap.timeline({
            repeat: -1,
            defaults: { ease: "sine.inOut" }
          })
            .to(star, {
              scale: 1.2,
              filter: "brightness(1.5) drop-shadow(0 0 8px rgba(249, 218, 134, 0.8))",
              duration: 0.8 + index * 0.2,
              yoyo: true,
              repeat: 1
            })
            .to(star, {
              y: -10,
              rotation: index % 2 === 0 ? 10 : -10,
              duration: 1.5 + index * 0.3,
              yoyo: true,
              repeat: 1
            }, 0);
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-slide
      className="py-24 px-6 md:px-12 max-w-360 mx-auto relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Contenedor Ref para el ScrollTrigger */}
      <div
        ref={balloonsWrapperRef}
        className="absolute top-0 left-0 right-0 w-full flex justify-center pointer-events-none -z-10"
      >
        {/* Contenedor Ref para el movimiento infinito */}
        <picture ref={balloonsImgRef}>
          <source srcSet="/images/awards/balloons.avif" type="image/avif" />
          <img
            src="/images/awards/balloons.png"
            alt="Globos decorativos"
            className="w-[822px] max-w-full mix-blend-screen"
          />
        </picture>
      </div>

      <div className="w-full relative z-10">
        <div className="text-center mb-32 flex flex-col items-center">
          <Subheading text="Slide 4: Premios" />
          <h2 className="text-4xl md:text-5xl font-medium max-w-2xl leading-tight text-white">
            Más de $1,300 en recompensas
          </h2>
          <p className="text-white/60 mt-4 max-w-xl font-light">
            Adicionalmente, se sortearán 3 copias del libro &quot;Aprendiendo Git&quot;
            solo por registrar un proyecto válido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] items-end justify-center gap-28 lg:gap-8 max-w-[70rem] mx-auto">
          {prizes.map((prize, idx) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`relative ${prize.offset}`}
            >
              {prize.featured ? (
                <div className="relative w-full max-w-[28rem] mx-auto flex flex-col rounded-[24px] bg-[#0c0c0e] border border-white/10 shadow-[0_0_50px_rgba(218,129,11,0.15)] group">
                  <div className="relative w-full pt-[55%] overflow-visible rounded-t-[24px]">
                    <div className="absolute top-2 left-2 right-2 bottom-0 rounded-b-3xl overflow-hidden">
                      <div
                        className="absolute inset-0 rounded-t-[1000px] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "conic-gradient(from -90deg at 50% 45%, rgb(218, 129, 11), rgb(249, 218, 134) 12.5%, rgb(255, 241, 204) 25%, rgb(249, 218, 134) 37.5%, rgb(218, 129, 11) 50.5%) 0% 0% / 100% 200%",
                          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                        }}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center translate-y-[20%]">
                      <div className="relative flex justify-center items-end">
                        <picture>
                          <source type="image/avif" srcSet="/images/awards/gold-new.avif" />
                          <img
                            src={prize.image}
                            alt="Gold Trophy"
                            className={`${prize.imgWidth} relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                          />
                        </picture>
                        <div
                          ref={starsRef}
                          className="absolute bottom-[60%] left-0 right-0 flex justify-center items-end gap-1 w-full z-20"
                        >
                          <img src="/images/awards/left-star.png" alt="" className="star-item max-w-[20px]" />
                          <img src="/images/awards/middle-star.png" alt="" className="star-item max-w-[35px]" />
                          <img src="/images/awards/right-star.png" alt="" className="star-item max-w-[20px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-12 pt-16 text-center relative z-20">
                    <span className="text-xs font-bold uppercase text-[#F9DA86] tracking-[0.2em]">
                      {prize.place}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mt-2 mb-3 text-white">
                      {prize.title}
                    </h3>
                    <p className="text-white/60 text-sm font-medium">
                      {prize.desc}
                    </p>
                  </div>
                </div>
              ) : (
                <article className="relative max-w-[24rem] mx-auto rounded-[20px] bg-[#0c0c0e] border border-white/5 p-6 pb-10 text-center shadow-xl flex flex-col group transition-colors hover:border-white/10 hover:bg-[#111114]">
                  <div className="absolute left-0 right-0 top-0 flex justify-center -translate-y-[65%] pointer-events-none">
                    <picture>
                      <source type="image/avif" srcSet={prize.image.replace(".png", ".avif")} />
                      <img
                        src={prize.image}
                        alt="Trophy"
                        className={`${prize.imgWidth} drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-3`}
                      />
                    </picture>
                  </div>
                  <div className="pt-16">
                    <span className="text-xs font-semibold uppercase text-white/80 tracking-[0.2em]">
                      {prize.place}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3 text-white">
                      {prize.title}
                    </h3>
                    <p className="text-white/50 text-sm font-light">
                      {prize.desc}
                    </p>
                  </div>
                </article>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}