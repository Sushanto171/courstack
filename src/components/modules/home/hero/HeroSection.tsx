import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const HeroSection: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-white pb-16 pt-12 md:pb-24 md:pt-20 lg:pb-32 lg:pt-28">
    <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#4913ec_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  </section>
);