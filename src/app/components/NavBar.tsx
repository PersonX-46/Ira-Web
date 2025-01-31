"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu, Home, User, Briefcase, Mail } from "lucide-react";
import Logo from "../assets/pfp.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-10/12 md:w-8/12 lg:w-7/12">
      <div className="relative bg-transparent backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-orange-500/30 floating-container">
        {/* Gradient Outline */}
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-orange-700 via-orange-500 to-orange-800 p-[2px]">
          <div className="h-full w-full bg-black/80 backdrop-blur-xl rounded-full"></div>
        </div>

        {/* Navbar Content */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full border border-orange-500"
            />
            <h1 className="ml-3 text-white font-extrabold text-lg">
              <Link href="/">Irasema</Link>
            </h1>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

          {/* Desktop Links with Icons */}
          <div className="hidden md:flex space-x-6 pl-3 items-center">
            {[
              { name: "Home", href: "/", icon: <Home size={18} /> },
              { name: "About", href: "/#about", icon: <User size={18} /> },
              { name: "Work", href: "/#work", icon: <Briefcase size={18} /> },
            ].map(({ name, href, icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center gap-2 text-white font-bold hover:text-orange-300 transition-all"
              >
                {icon} {name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/#contact"
              className="px-4 py-2 bg-orange-700 text-white font-extrabold rounded-full shadow-md hover:bg-orange-600 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black/90 border-2 border-orange-600 shadow-lg rounded-lg py-4 mt-2 w-64 animate-fadeIn">
            <div className="flex flex-col items-center space-y-4">
              {[
                { name: "Home", href: "/", icon: <Home size={18} /> },
                { name: "About", href: "/#about", icon: <User size={18} /> },
                { name: "Work", href: "/#work", icon: <Briefcase size={18} /> },
                { name: "Contact Me", href: "/#contact", icon: <Mail size={18} />, button: true },
              ].map(({ name, href, icon, button }) => (
                <Link
                  key={name}
                  href={href}
                  className={`flex items-center gap-2 ${
                    button
                      ? "px-4 py-2 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700"
                      : " font-bold "
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {icon} {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Animation */}
      <style>
        {`
          .floating-container::before,
          .floating-container::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: rgba(255, 165, 0, 0.6);
            border-radius: 50%;
            filter: blur(3px);
            animation: floatAnimation 3s infinite alternate ease-in-out;
          }

          .floating-container::before {
            top: 50%;
            left: 15%;
            animation-duration: 3s;
          }

          .floating-container::after {
            top: 40%;
            left: 85%;
            animation-duration: 4s;
          }

          @keyframes floatAnimation {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-8px);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;