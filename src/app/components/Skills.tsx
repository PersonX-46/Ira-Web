'use client'
import React from "react";
import { FaFigma, FaShopify, FaWix } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobeindesign, SiCanva } from "react-icons/si";
import { BackgroundGradient } from "./ui/background-gradient";
import { SiWebflow, SiAdobe } from "react-icons/si";

const skills = [
  { name: "Photoshop", icon: <SiAdobephotoshop size={50} color="#31A8FF" />, rating: 8 },
  { name: "Illustrator", icon: <SiAdobeillustrator size={50} color="#FF9A00" />, rating: 6 },
  { name: "After Effects", icon: <SiAdobeaftereffects size={50} color="#9999FF" />, rating: 9 },
  { name: "InDesign", icon: <SiAdobeindesign size={50} color="#FF3366" />, rating: 5 },
  { name: "Figma", icon: <FaFigma size={50} color="#F24E1E" />, rating: 8 },
  { name: "Unbounce", icon: <SiWebflow size={50} color="#1A82E2" />, rating: 7 },
  { name: "Dreamweaver", icon: <SiAdobe size={50} color="#35C759" />, rating: 8 },
  { name: "Wix", icon: <FaWix size={50} color="#fff" />, rating: 5 },
  { name: "Shopify", icon: <FaShopify size={50} color="#96BF48" />, rating: 10 },
  { name: "Canva", icon: <SiCanva size={50} color="#00C4CC" />, rating: 6 },
];

const SkillRating = ({ rating }: { rating: number }) => {
  const circles = [];
  for (let i = 0; i < 10; i++) {
    circles.push(
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${i < rating ? "bg-orange-500" : "bg-gray-300"} transition-colors`}
      />
    );
  }
  return <div className="flex space-x-1 mt-2">{circles}</div>;
};

export function SkillsUI() {
  return (
    <div className="bg-black w-full py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Software Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 justify-center">
        {skills.map((skill, index) => (
          <BackgroundGradient key={index}>
            <div className="bg-black text-white p-10 rounded-3xl flex flex-col items-center justify-center shadow-md hover:scale-110 transition-transform">
              {skill.icon}
              <p className="mt-4 text-xl font-semibold">{skill.name}</p>
              <SkillRating rating={skill.rating} />
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
