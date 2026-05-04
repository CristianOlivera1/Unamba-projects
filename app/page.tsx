import { Hero } from "@/components/sections/hero";
import { SlideHowToParticipate } from "@/components/sections/slide-how-participate";
import { SlideRules } from "@/components/sections/slide-rules";
import { SlideProjects } from "@/components/sections/slide-projects";
import { SlideConclusion } from "@/components/sections/slide-conclusion";
import { Footer } from "@/components/layout/footer";
import { InfiniteImageCarousel } from "@/components/sections/infinite-image-carousel";
import { SlideAwards } from "@/components/sections/slide-awards";
import { HackathonPopover } from "@/components/ui/hackathon-modal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center opacity-40 grayscale bg-[#212121]"></div>
      <HackathonPopover />
      <Hero />
      <InfiniteImageCarousel speed="fast" direction="left" />
      <SlideHowToParticipate/>
      <SlideRules />
      <SlideAwards />
      <SlideProjects />
      <SlideConclusion />
      <Footer />
    </div>
  );
}
