// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "./ui/button";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-xl">LT</span>
//             </div>
//             <span className="text-xl font-semibold text-gray-900 hidden md:block">
//               LedgerTower
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {/* <Link href="/onboarding" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
//               Onboarding
//             </Link> */}
//             <Link
//               href="/onboarding"
//               className="text-sm md:text-base lg:text-lg text-gray-700 hover:text-gray-900 transition-colors font-medium"
//             >
//               Onboarding
//             </Link>

//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/terms"
//               className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
//             >
//               Terms
//             </Link>
//             <Link
//               href="#"
//               className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
//             >
//               About us
//             </Link>
//             <Link
//               href="#"
//               className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/login"
//               className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
//             >
//               Login
//             </Link>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
//               Signup
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={toggleMenu} className="md:hidden">
//             {menuOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu Items */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg">
//             <Link
//               href="/onboarding"
//               className="text-gray-700 hover:text-gray-900 text-sm font-medium"
//             >
//               Onboarding
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-gray-900 text-sm font-medium"
//             >
//               Contact
//             </Link>
//             <Link
//               href="/terms"
//               className="text-gray-700 hover:text-gray-900 text-sm font-medium"
//             >
//               Terms
//             </Link>
//             <Link
//               href="#"
//               className="text-gray-700 hover:text-gray-900 text-sm font-medium"
//             >
//               About us
//             </Link>
//             <Link
//               href="#"
//               className="text-gray-700 hover:text-gray-900 text-sm font-medium"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/login"
//               className="text-gray-700 hover:text-gray-900 text-sm font-medium"
//             >
//               Login
//             </Link>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 w-full">
//               Signup
//             </Button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Button } from "./ui/button";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const navLinks = [
//     { href: "/onboarding", label: "Onboarding" },
//     { href: "/contact", label: "Contact" },
//     { href: "/terms", label: "Terms" },
//     { href: "/about", label: "About us" },
//     { href: "/privacy-policy", label: "Privacy Policy" },
//     { href: "/login", label: "Login" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-xl">LT</span>
//             </div>
//             <span className="text-xl font-semibold text-gray-900 hidden md:block">
//               LedgerTower
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;
//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`relative text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 ${
//                     isActive
//                       ? "text-red-600"
//                       : "text-gray-700 hover:text-red-400"
//                   }`}
//                 >
//                   {link.label}

//                   {/* Active underline */}
//                   {isActive && (
//                     <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 rounded-full transition-all duration-300"></span>
//                   )}
//                 </Link>
//               );
//             })}

//             {/* Signup button */}
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
//               Signup
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={toggleMenu} className="md:hidden">
//             {menuOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;
//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`relative text-sm font-medium transition-colors duration-200 ${
//                     isActive
//                       ? "text-red-600 font-semibold"
//                       : "text-gray-700 hover:text-red-400"
//                   }`}
//                 >
//                   {link.label}
//                   {isActive && (
//                     <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-red-600 rounded-full transition-all duration-300"></span>
//                   )}
//                 </Link>
//               );
//             })}
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 w-full">
//               Signup
//             </Button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/onboarding", label: "Onboarding" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms" },
    { href: "/about", label: "About us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    // { href: "/login", label: "Login" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">LT</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 hidden md:block">
              LedgerTower
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm md:text-base lg:text-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 rounded-full transition-all duration-300"></span>
                  )}
                </Link>
              );
            })}

            <Button className="bg-black-600 hover:bg-blue-600 text-white px-8">
              <Link
                href="/login"
                className="text-gray-700 hover:text-black-900 text-xl font-semibold"
              >Login
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button ref={buttonRef} onClick={toggleMenu} className="md:hidden">
            {menuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden mt-4 flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // also close on navigation
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:text-red-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-red-600 rounded-full transition-all duration-300"></span>
                  )}
                </Link>
              );
            })}
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 w-full">
              Signup
            </Button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
