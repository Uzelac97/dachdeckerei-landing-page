import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Dodali smo useNavigate
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navLinks";
import logo from "../assets/dachdeckerei.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md z-50 border-b border-white/5">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-20">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src={logo}
              className="w-32 h-auto cursor-pointer"
              alt="logo"
              onClick={handleLogoClick}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-white">
            {navLinks.map((link) => (
              <div key={link.id}>
                {link.id === "impressum" ? (
                  <Link
                    to={link.path}
                    className="hover:text-red-600 transition font-medium text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={`${link.path}#${link.id}`}
                    className="hover:text-red-600 transition font-medium text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Menu Button (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none focus:ring-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-8 h-8 text-red-600" />
              ) : (
                <Menu className="w-8 h-8 text-red-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Overlay & Sidebar) */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-screen w-64 bg-zinc-950 z-60 p-10 shadow-2xl flex flex-col items-end border-l border-white/10 transition-transform duration-300">
            {/* Close Button - SAD JE RED */}
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer mb-12 outline-none"
            >
              <X className="w-8 h-8 text-red-600" />
            </button>

            {/* Navigation Links (Mobile) */}
            <nav className="flex flex-col space-y-8 text-right w-full">
              {navLinks.map((link) => (
                <div key={link.id}>
                  {link.id === "impressum" ? (
                    <Link
                      to={link.path}
                      className="text-gray-300 text-sm font-medium uppercase tracking-[0.2em] hover:text-red-500 transition-all duration-300 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={`${link.path}#${link.id}`}
                      className="text-gray-300 text-sm font-medium uppercase tracking-[0.2em] hover:text-red-500 transition-all duration-300 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
