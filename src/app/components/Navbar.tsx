"use client";

import Link from "next/link";
import Search from "./Search";
import React, { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when window is resized to larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-10 bg-black text-white border-b border-gray-800 ${scrolled ? 'shadow-lg' : 'shadow-md'} transition-shadow`}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-3 sm:p-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat tracking-tight">
              <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
                <span className="text-white">Vista</span>
                <span className="text-gray-400">Vault</span>
              </Link>
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="sm:hidden text-xl text-white p-1 z-20 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
          
          {/* Navigation items - responsive */}
          <div 
            className={`${menuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center sm:items-center 
                        fixed sm:static inset-0 sm:inset-auto pt-20 sm:pt-0 bg-black sm:bg-transparent 
                        z-10 overflow-y-auto sm:overflow-visible`}
          >
            {/* Search - moved to be wider on mobile */}
            <div className="w-[90%] sm:w-auto mb-8 sm:mb-0 sm:mr-4">
              <Search />
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 md:space-x-4 w-full sm:w-auto items-center">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className="text-white hover:text-gray-300 font-poppins text-center sm:text-left px-3 py-2 w-full sm:w-auto
                         border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                href="/categories" 
                onClick={handleLinkClick}
                className="text-white hover:text-gray-300 font-poppins text-center sm:text-left px-3 py-2 w-full sm:w-auto
                         border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                Explore
              </Link>
              <Link 
                href="/about" 
                onClick={handleLinkClick}
                className="text-white hover:text-gray-300 font-poppins text-center sm:text-left px-3 py-2 w-full sm:w-auto
                         border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className="text-white hover:text-gray-300 font-poppins text-center sm:text-left px-3 py-2 w-full sm:w-auto
                         border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}