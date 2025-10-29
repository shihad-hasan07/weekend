import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebookF, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1c2536] text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">

          {/* Logo and Description */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 text-center md:text-left">
            <div className="mb-4 flex flex-col items-center md:items-start">
              <Link href='/'>
                <Image
                  src="/logo.png"
                  alt="Weekend Logo"
                  width={120}
                  height={40}
                  className="mb-2"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Product */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Overview</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                  Press
                  <span className="bg-white text-[#1c2536] text-xs px-2 py-0.5 rounded-full font-medium">New</span>
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">News</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Dribbble</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 weekend. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}