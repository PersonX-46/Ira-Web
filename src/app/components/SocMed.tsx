"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { PinContainer } from "./ui/3d-pin";

const SocialMediaSection: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <section className="bg-black py-8 md:py-16 mb-10">
      <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text mb-11">
          Connect With Us
        </h2>

        {/* Social Media Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pt-10">
          {/* TikTok */}
          <div className="h-[15rem] w-full flex items-center justify-center space-y-4">
            <PinContainer title="https://www.linkedin.com/in/irasema-orozco" href="https://www.linkedin.com/in/irasema-orozco-50b983187/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  LinkedIn
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Check out our TikTok videos and follow us for more updates.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-orange-500 via-orange-700 to-orange-950 items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-6xl"
                  />
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Email */}
          <div className="h-[15rem] w-full flex items-center justify-center space-y-4">
            <PinContainer
              title="mailto:irasema.m.orozco@gmail.com"
              href="mailto:irasema.m.orozco@gmail.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  Email Us
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Reach out via email for any inquiries or assistance.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-orange-500 via-orange-700 to-orange-950 items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white text-6xl"
                  />
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Instagram */}
          <div className="h-[15rem] w-full flex items-center justify-center space-y-4">
            <PinContainer title="https://www.instagram.com/iorozcox" href="https://www.instagram.com/iorozcox/?hl=es-la">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  Official Instagram
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Follow us on Instagram for the latest updates and content.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-orange-500 via-orange-700 to-orange-950 items-center justify-center">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white text-6xl"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;

