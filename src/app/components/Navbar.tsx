"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">LT</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 hidden md:block">
              LedgerTower
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Onboarding
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Login
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Signup
            </Button>
          </div>

          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
