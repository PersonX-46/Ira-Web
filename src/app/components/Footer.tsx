import Image from "next/image";
import logo from "@/app/assets/pfp1.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black">
    
      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

      <div className="py-10 px-6 text-white max-w-[1200px] mx-auto">
        {/* Logo and Intro Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <Image
              height={50}
              width={50}
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-orange-400">
              Irasema
            </h1>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-gray-300 text-center">
            Let&apos;s create amazing things together! 🚀
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline hover:text-orange-300">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline hover:text-orange-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-orange-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-orange-400">Connect With Me</h2>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li>
                <a
                  href="mailto:irasema.m.orozco@gmail.com"
                  className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition-transform transform hover:scale-110"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/irasema-orozco-50b983187/"
                  className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition-transform transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iorozcox/?hl=es-la"
                  className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition-transform transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Collaborate Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-orange-400">Let&apos;s Collaborate</h2>
            <p className="text-gray-300">
              Got an idea or a project? I&apos;m just a message away! 🌟
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Irasema. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed with <FontAwesomeIcon icon={faCoffee} className="text-orange-400" /> and ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

