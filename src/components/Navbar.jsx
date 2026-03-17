import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", id: "hero" },
    { name: "Über uns", id: "ueber-uns" },
    { name: "Dienstleistungen", id: "dienstleistungen" },
    { name: "Kontakt", id: "kontakt" },
    { name: "Impressum", id: "impressum" },
  ];

  return (
    <div>
      <nav className="sticky top-0 bg-black w-full z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-20">
          {/* LOGO */}

          <div className="flex items-center">
            <img src="/dachdeckerei.jpg" className="w-32 h-auto" alt="logo" />
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-8 items-center text-white">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-red-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Menu Icon */}

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <img
                src="/menu.png"
                className="w-8 h-8 md:hidden"
                alt="menu-icon"
              />
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="fixed top-0 right-0 h-full w-64 bg-black z-50 p-10 shadow-2xl">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-red-600 text-3xl cursor-pointer"
                >
                  x
                </button>
              </div>

              <nav className="flex flex-col space-y-5 text-lg text-white mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="hover:text-red-500 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
