'use client'
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";
import SocialMediaSection from "./components/SocMed";
import { FocusCardsDemo } from "./components/MyDesigns";
import { TimelineUI } from "./components/AllDesigns";
import { LampDemo } from "./components/MakeUp";
import Footer from "./components/Footer";
import { Experience } from "./components/Experience";
import { SkillsUI } from "./components/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FocusCardsDemo/>
      <LampDemo/>
      <Experience/>
      <SkillsUI/>
      <SocialMediaSection/>
      <Footer/>
      
      {/* Radial Bubbles */}
      {/* Bubbles shown only on larger screens (hidden on mobile devices) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
        {/* Circle 1 */}
        <motion.div
          className="absolute blur-2xl rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200"
          style={{ width: "150px", height: "150px" }}
          animate={{
            x: ["10vw", "80vw", "10vw", "-20vw", "10vw"],  // Keeps the bubble within screen bounds
            y: ["10vh", "70vh", "10vh", "-20vh", "10vh"],  // Keeps the bubble within screen bounds
            scale: [1, 0.8, 1],  // Pulse effect
          }}
          transition={{
            repeat: Infinity,
            duration: 12,  // Slower movement for a bubble-like effect
            ease: "easeInOut",
            repeatType: "loop",  // Loops infinitely
          }}
        />
        {/* Circle 2 */}
        <motion.div
          className="absolute blur-2xl rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200 opacity-60"
          style={{ width: "200px", height: "200px" }}
          animate={{
            x: ["10vw", "-20vw", "10vw", "80vw", "10vw"],  // Keeps the bubble within screen bounds
            y: ["10vh", "60vh", "10vh", "-20vh", "10vh"],  // Keeps the bubble within screen bounds
            scale: [1, 0.8, 1],  // Pulse effect
          }}
          transition={{
            repeat: Infinity,
            duration: 15,  // Slower movement for a bubble-like effect
            ease: "easeInOut",
            repeatType: "loop",  // Loops infinitely
          }}
        />
        {/* Circle 3 */}
        <motion.div
          className="absolute blur-2xl rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200"
          style={{ width: "180px", height: "180px" }}
          animate={{
            x: ["10vw", "-20vw", "10vw", "60vw", "10vw"],  // Keeps the bubble within screen bounds
            y: ["10vh", "50vh", "10vh", "-20vh", "10vh"],  // Keeps the bubble within screen bounds
            scale: [1, 0.9, 1],  // Pulse effect
          }}
          transition={{
            repeat: Infinity,
            duration: 13,  // Slower movement for a bubble-like effect
            ease: "easeInOut",
            repeatType: "loop",  // Loops infinitely
          }}
        />
      </div>

      {/* Radial Gradient shown only on mobile devices (hidden on desktop) */}
      {/* <div className="blur-2xl absolute inset-0 pointer-events-none z-0 sm:hidden bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200 rounded-full"
           style={{ width: "150px", height: "150px", top: "10vh", left: "10vw" }} /> */}
    </>
  );
}
