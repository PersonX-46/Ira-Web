"use client";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/pfp.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-xl rounded-full px-6 py-3 z-50 w-8/12">
      <div className="flex items-center justify-between ">
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
            <Link href="/">CutePortfolio</Link>
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
        <div className="hidden md:flex space-x-6  pl-3 items-center">
          <Link
            href="/"
            className="text-white font-medium hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-white font-medium hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href="/#work"
            className="text-white font-medium hover:text-gray-200"
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="text-white font-medium hover:text-gray-200"
          >
            Contact
          </Link>
          
        </div>

        <div className="hidden md:flex space-x-6  pl-3 items-center">
        <Link
            href="/api/auth/signin"
            className="px-4 py-2 bg-white text-orange-600 font-medium rounded-full hover:bg-gray-100"
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg py-4 mt-2 w-64">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="text-orange-600 font-medium hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-orange-600 font-medium hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#work"
              className="text-orange-600 font-medium hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/#contact"
              className="text-orange-600 font-medium hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700"
              onClick={() => setIsOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
