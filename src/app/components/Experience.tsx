import React from "react";
import { Timeline } from "../components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "💼 Work Experience",
      content: (
        <div className="space-y-6">
          {[
            {
              company: "Kannaway",
              role: "Designer",
              period: "July 2023 - Present",
              description:
                "Web design, UX/UI, intern documents design (forms, PDFs, etc.), social media graphics for a global audience, e-commerce.",
            },
            {
              company: "RedGirasol",
              role: "Designer",
              period: "August 2021 - July 2022",
              description:
                "Brand identity re-design (colors, elements, etc.), web design, UX/UI, newsletters, email marketing, company documents (forms, PDFs, etc.).",
            },
            {
              company: "Emanente",
              role: "Head Designer",
              period: "September 2022 - April 2023",
              description:
                "Identity design, branding, concept creation, web design, UX/UI, e-commerce development, printed materials, digital campaigns.",
            },
            {
              company: "Más Prospectos",
              role: "Graphic Designer Jr.",
              period: "January 2020 - August 2020",
              description:
                "Landing pages, social media branding, email marketing, executive presentations, editorial design.",
            },
            {
              company: "Futurité",
              role: "Graphic Designer Jr.",
              period: "August 2020 - July 2021",
              description:
                "Landing pages, social media art, branding, email marketing, executive presentations, editorial design, web design.",
            },
            {
              company: "Dimex Capital",
              role: "Graphic Design Intern",
              period: "January 2019 - July 2019",
              description:
                "Digital & printed materials, executive presentations, editorial design, graphics for digital campaigns.",
            },
            {
              company: "CHRISTUS MUGUERZA",
              role: "Marketing Executive",
              period: "July 2019 - December 2019",
              description:
                "Digital & printed materials, executive presentations, editorial design, graphics for digital campaigns, supplier contact.",
            },
          ].map((exp, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
              <p className="text-sm text-gray-400">{exp.period} | {exp.role}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "📚 Study Experience",
      content: (
        <div className="space-y-6 pt-7">
          {[
            {
              institution: "UANL, Facultad de Artes Visuales",
              period: "2014 - 2019",
              degree: "Bachelor in Graphic Design",
            },
            {
              institution: "BEDU",
              period: "2020 - 2021",
              degree: "UX-UI Design",
            },
            {
              institution: "Istituto di Moda Burgo",
              period: "2023",
              degree: "Fashion / Dressmaker",
            },
            {
              institution: "Noise Mag",
              period: "2023",
              degree: "Fashion Stylist",
            },
            {
              institution: "WTF is Fashion",
              period: "2023",
              degree: "Fashion Stylist",
            },
            {
              institution: "Domus Academy Milano",
              period: "2024",
              degree: "Fashion Styling & Visual Merchandising",
            },
          ].map((edu, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
              <p className="text-sm text-gray-400">{edu.period} | {edu.degree}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-10">
      <Timeline data={data} />
    </div>
  );
}

