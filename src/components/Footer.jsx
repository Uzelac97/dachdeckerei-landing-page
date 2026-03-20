import logo from "../assets/dachdeckerei.jpg";
import { User, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Column 1 - LEFT: Logo and text */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Martin Logo"
            className="h-20 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <p className="text-sm max-w-xs mt-4 leading-relaxed italic">
            Ihr zertifizierter Partner für Flachdachabdichtung und moderne
            Dachlösungen in Nagold.
          </p>
        </div>

        {/* Column 2 - RIGHT: Contact info (Jurij, Eric, Zentrale) */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 text-left">
          {/* Jurij Martin */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-red-600 flex items-center gap-2">
              <User size={14} /> Jurij Martin
            </h4>
            <p className="text-sm">Geschäftsleitung</p>
            <a
              href="tel:+4917643488639"
              className="text-white hover:text-red-600 transition-colors font-medium"
            >
              +49 176 43488639
            </a>
          </div>

          {/* Eric Martin */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-red-600 flex items-center gap-2">
              <User size={14} /> Eric Martin
            </h4>
            <p className="text-sm">Geschäftsleitung</p>
            <a
              href="tel:+4917624571216"
              className="text-white hover:text-red-600 transition-colors font-medium"
            >
              +49 176 24571216
            </a>
          </div>

          {/* General Info */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-white flex items-center gap-2">
              <MapPin size={14} /> Zentrale
            </h4>
            <p className="text-sm">Musterstraße 123, 72202 Nagold</p>
            <div className="flex items-center gap-2 mt-1">
              <Mail size={14} className="text-red-600" />
              <a
                href="mailto:klarseric02@gmail.com"
                className="text-white hover:text-red-600 transition-colors text-sm underline decoration-red-600/30 font-medium"
              >
                klarseric02@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE - Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
        <p>
          &copy; {currentYear} Martin Flachdachbau. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-8">
          <a href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-white transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
