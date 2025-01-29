"use client";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/pfp.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-8/12">
      <div className="relative bg-transparent rounded-full px-6 py-3 shadow-xl">
        {/* Gradient Outline */}
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-orange-700 via-orange-500 to-orange-800 p-[2px]">
          <div className="h-full w-full bg-black rounded-full"></div>
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
              className="rounded-full"
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
              {isOpen ? (
                <XIcon className="h-8 w-8" />
              ) : (
                <MenuIcon className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 pl-3 items-center">
            <Link
              href="/"
              className="text-white font-bold hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white font-bold hover:text-gray-200"
            >
              About
            </Link>
            <Link
              href="/#work"
              className="text-white font-bold hover:text-gray-200"
            >
              Work
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 pl-3 items-center">
            <Link
              href="/#contact"
              className="px-4 py-2 bg-orange-700 text-white font-extrabold rounded-full "
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg py-4 mt-2 w-64">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/"
                className="text-orange-600 font-bold hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-orange-600 font-bold hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#work"
                className="text-orange-600 font-bold hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/api/auth/signin"
                className="px-4 py-2 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
