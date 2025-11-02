"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className={`w-full bg-white z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'fixed top-0 left-0 right-0 shadow-md animate-slideDown'
        : 'relative'
        }`}>
        <style jsx>{`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slideDown {
            animation: slideDown 0.4s ease-out;
          }
        `}</style>
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href='/'>
              <img src="/logo.png" alt="Logo" className="h-8 sm:h-10 lg:h-12" />
            </Link>
          </div>

          <div className="flex-1 flex justify-center px-2 sm:px-4">
            <div className="relative w-full max-w-[180px] sm:max-w-xs lg:max-w-sm">
              <input
                type="text"
                placeholder="Want to learn?"
                className="w-full pl-8 sm:pl-10 pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#20B486] text-xs sm:text-sm"
              />
              <IoSearch className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base sm:text-lg" />
            </div>
          </div>

          <div className="hidden lg:flex items-center mr-7 gap-6 xl:gap-8 font-semibold text-sm lg:text-base">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/contact-us">Contact us</Link>
            <Link href="/faq">FAQ's</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link href='/sign-in'>
              <button className="cursor-pointer font-semibold text-sm lg:text-base">Sign in</button>
            </Link>

            <Link href='/sign-up'>
              <button className="cursor-pointer bg-[#20B486] px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-semibold text-white text-sm lg:text-base hover:bg-[#169b6b] transition">
                Create free account</button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl sm:text-2xl text-gray-700 focus:outline-none"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out z-50 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-6 font-semibold text-sm sm:text-base">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#20B486] transition">
              Home
            </Link>
            <Link href="/courses" onClick={() => setMenuOpen(false)} className="hover:text-[#20B486] transition">
              Courses
            </Link>
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-[#20B486] transition">
              About us
            </Link>
            <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-[#20B486] transition">
              Contact us
            </Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-[#20B486] transition">
              FAQ's
            </Link>

            <div className="flex flex-col items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
              <button className="font-semibold text-sm sm:text-base">Sign in</button>
              <button className="bg-[#20B486] px-4 py-2 rounded-lg font-semibold text-sm sm:text-base text-white hover:bg-[#169b6b] transition">
                Create free account
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;