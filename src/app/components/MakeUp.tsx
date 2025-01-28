"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Carousel } from "./ui/carousel";
import { FocusCards } from "./ui/focus-cards";

export function LampDemo() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          I do Makeups and tattoos <br /> when I am bored!
        </motion.h1>
      </LampContainer>
      <FocusCardsDemo />
    </>
  );
}

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Horror Makeups",
      src: "https://static.wixstatic.com/media/5313f0_690cb33b3d724aa7a5dbc89785ac8abf~mv2.png/v1/fill/w_232,h_270,al_c,q_80,usm_0.66_1.00_0.01/5313f0_690cb33b3d724aa7a5dbc89785ac8abf~mv2.png",
    },
    {
      title: "Other Horrors",
      src: "https://static.wixstatic.com/media/5313f0_89de566346874bb6b6785c15b48d268a~mv2.png/v1/fill/w_232,h_270,al_c,q_80,usm_0.66_1.00_0.01/5313f0_89de566346874bb6b6785c15b48d268a~mv2.png",
    },
    {
      title: "Make myself look pretty",
      src: "https://static.wixstatic.com/media/5313f0_6e7719785fa941cbbc1998632e469191~mv2.png/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/5313f0_6e7719785fa941cbbc1998632e469191~mv2.png",
    },
    {
      title: "Fictional Characters",
      src: "https://static.wixstatic.com/media/5313f0_d01cee525f3944f89ece28720b8339a7~mv2.png/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/5313f0_d01cee525f3944f89ece28720b8339a7~mv2.png",
    },
    {
      title: "Tattoo Designs",
      src: "https://static.wixstatic.com/media/5313f0_4f0b09a28c0442adbbc4ebfcda13949e~mv2.png/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/5313f0_4f0b09a28c0442adbbc4ebfcda13949e~mv2.png",
    },
    {
      title: "Do Tattoos",
      src: "https://static.wixstatic.com/media/5313f0_a585686a1c3647388b9a3af0813b5878~mv2.png/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/5313f0_a585686a1c3647388b9a3af0813b5878~mv2.png",
    },
  ];

  return (
    <div className="bg-black">
      <FocusCards cards={cards} />
    </div>
  );
}
