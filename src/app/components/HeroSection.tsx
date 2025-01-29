"use client";
import Image from "next/image";
import image from "../assets/logo.png";
import TypeWriter from "./TypeWriter";
import { motion } from "framer-motion";
import { BackgroundLines } from "./ui/background-lines";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen flex items-center justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-24 md:py-24">
      <BackgroundLines className="absolute flex items-center justify-center w-full flex-col px-4">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">
          {/* Text Section */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/2">
            <motion.p
              className="text-lg font-bold text-white mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello There! 👋
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
                <TypeWriter />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
              Welcome to the portfolio of a{" "}
              <strong className="text-orange-600">
                creative graphic designer
              </strong>
              . Dive into a world of bold designs and endless creativity where
              ideas come to life in vibrant ways.
            </p>

            <Button
              borderRadius="1.75rem"
              className="bg-white font-extrabold dark:bg-[#25110b] text-black dark:text-white border-neutral-200 dark:border-black"
            >
              <Link href="/resume.pdf" passHref>
                Download CV
              </Link>
            </Button>
          </div>

          <div className="relative flex items-center justify-center md:ml-10 mt-10 md:mt-0">
            {/* Gradient Background */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[350px] lg:h-[350px] bg-gradient-to-r bg-white rounded-full z-10 "></div>
            <div className="absolute w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] lg:w-[370px] lg:h-[370px] bg-gradient-to-r from-orange-300 via-orange-600 to-orange-400 rounded-full"></div>

            {/* Image */}
            <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full bg-orange shadow-lg flex items-center justify-center z-20">
              <Image
                src={image}
                alt="Graphic Designer"
                className="object-cover rounded-full"
                width={300}
                height={300}
              />
            </div>

            {/* Ripple Effects */}
            <motion.div
              className="absolute w-[390px] h-[390px] sm:w-[390px] sm:h-[390px] lg:w-[390px] lg:h-[390px] rounded-full blur-3xl bg-white"
              style={{
                background: "conic-gradient(#fdba74, #ea580c, #fb923c)",
              }}
              animate={{
                rotate: 360, // Rotate the circle 360 degrees
                backgroundPosition: ["0% 50%", "100% 50%"], // Animate gradient flow
              }}
              transition={{
                repeat: Infinity, // Continuous animation
                duration: 4, // Total animation duration
                ease: "linear", // Smooth and continuous rotation
              }}
            />
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default HeroSection;
