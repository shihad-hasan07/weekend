"use client";

import { useState, useEffect, useContext } from "react";
import { User, Mail, LogOut, ChevronDown } from 'lucide-react';
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "@/context/AuthContext";

const Navbar = () => {
  const { loading, user, logOut } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log('user from navbar', user);
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
            {
              user
                ? <div className="relative">
                  {/* Profile Button */}
                  <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 px-2 py-1 bg-[#e7f8f3] hover:bg-[#98cfbd] rounded-full transition-colors duration-200 border border-gray-200">
                    <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src={user?.photoURL} alt={user?.displayName} />
                    <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Modal */}
                  {isOpen && (
                    <>
                      {/* Backdrop */}
                      <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                      {/* Modal Content */}
                      <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                        <div className="bg-gradient-to-br from-[#98cfbd] to-[#e7f8f3] p-6">
                          <div className="flex items-center gap-4">
                            <img
                              className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
                              src={user?.photoURL}
                              alt={user?.displayName}
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-800 text-lg truncate">
                                {user?.displayName}
                              </h3>
                              <p className="text-sm text-gray-600 truncate">
                                {user?.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* User Details */}
                        <div className="p-4 space-y-3">
                          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <User className="w-5 h-5 text-gray-500" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-gray-500 font-medium">Name</p>
                              <p className="text-sm text-gray-800 truncate">{user?.displayName}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-gray-500 font-medium">Email</p>
                              <p className="text-sm text-gray-800 truncate">{user?.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-gray-200" />

                        {/* Logout Button */}
                        <div className="p-4">
                          <button onClick={() => (logOut(), setIsOpen(false))} className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors duration-200 font-medium shadow-sm">
                            <LogOut className="w-5 h-5" />
                            Logout
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                : <>
                  <Link href='/sign-in'>
                    <button className="cursor-pointer font-semibold text-sm lg:text-base">Sign in</button>
                  </Link>

                  <Link href='/sign-up'>
                    <button className="cursor-pointer bg-[#20B486] px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-semibold text-white text-sm lg:text-base hover:bg-[#169b6b] transition">
                      Create free account</button>
                  </Link>
                </>
            }
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl sm:text-2xl text-gray-700 focus:outline-none">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out z-50 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="flex flex-col items-center gap-3 sm:gap-3 py-4 sm:py-6 font-semibold text-sm sm:text-base">
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

            {user
              ?
              <div className=" flex flex-col items-center gap-3 pt-3 border-t border-gray-200 w-full px-6">
                <div className="flex items-center gap-3 justify-center">
                  <img className="w-14 h-14 rounded-full border-4 border-[#e7ebf7] object-cover flex-shrink-0"
                    src={user.photoURL} alt={user.displayName} />
                  <div className="flex-1 min-w-0 max-w-72">
                    <p className="font-semibold text-gray-800 text-base truncate">
                      {user.displayName}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>

                <button onClick={logOut}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 text-sm font-semibold w-full max-w-[200px]">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
              :
              <div className="flex flex-col items-center pt-3 border-t border-gray-200 w-full gap-2 sm:gap-3 mt-2 sm:mt-3 ">
                <a href='/sign-in' onClick={() => setMenuOpen(false)}>
                  <button className="font-semibold text-sm sm:text-base">Sign in</button>
                </a>
                <a href='/sign-up' onClick={() => setMenuOpen(false)}>
                  <button className="bg-[#20B486] px-4 py-2 rounded-lg font-semibold text-sm sm:text-base text-white hover:bg-[#169b6b] transition">
                    Create free account
                  </button>
                </a>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;