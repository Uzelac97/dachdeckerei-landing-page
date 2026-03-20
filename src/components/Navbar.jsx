import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dachdeckerei.jpg";
import menuIcon from "../assets/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", id: "hero", path: "/" },
    { name: "Über uns", id: "ueber-uns", path: "/" },
    { name: "Dienstleistungen", id: "dienstleistungen", path: "/" },
    { name: "Kontakt", id: "kontakt", path: "/" },
    { name: "Impressum", id: "impressum", path: "/impressum" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md z-50 border-b border-white/5">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-20">
          {/* LOGO */}

          <div className="flex items-center">
            <img src={logo} className="w-32 h-auto" alt="logo" />
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-8 items-center text-white">
            {navLinks.map((link) =>
              link.id === "impressum" ? (
                <Link
                  key={link.id}
                  to={link.path}
                  className="hover:text-red-600 transition font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={`${link.path}#${link.id}`}
                  className="hover:text-red-600 transition font-medium"
                >
                  {link.name}
                </a>
              ),
            )}
          </div>

          {/* Menu Icon */}

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <img
                src={menuIcon}
                className="w-8 h-8 md:hidden"
                alt="menu-icon"
              />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-60"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-screen w-64 bg-black z-70 p-10 shadow-2xl flex flex-col items-end border-l border-white/10">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-600 text-2xl cursor-pointer mb-12"
            >
              ✕
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-8 text-right w-full">
              {navLinks.map((link) =>
                link.id === "impressum" ? (
                  <Link
                    key={link.id}
                    to={link.path}
                    className="text-gray-300 text-sm font-medium uppercase tracking-[0.2em] hover:text-red-500 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.id}
                    href={`${link.path}#${link.id}`}
                    className="text-gray-300 text-sm font-medium uppercase tracking-[0.2em] hover:text-red-500 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ),
              )}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
