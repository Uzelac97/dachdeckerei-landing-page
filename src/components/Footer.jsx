import logo from "../assets/dachdeckerei.jpg";
import { contactData } from "../data/contactData";
import { Link } from "react-router-dom";
import { User, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* LEFT: BRANDING */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto cursor-pointer hover:brightness-125 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <p className="text-sm max-w-60 mt-6 leading-relaxed font-light">
            Ihr zertifizierter Partner für Flachdachabdichtung und moderne
            Dachlösungen in Nagold.
          </p>
        </div>

        {/* RIGHT: CONTACT INFO BLOCK */}
        <div className="flex flex-col md:flex-row md:justify-end flex-1 gap-12 lg:gap-20 text-left w-full">
          {contactData.team.map((member, index) => (
            <div key={index} className="flex flex-col gap-2 min-w-fit">
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1 text-red-600 flex items-center gap-2">
                <User size={12} /> {member.name}
              </h4>
              <p className="text-xs text-zinc-500 uppercase">{member.role}</p>
              <a
                href={member.telHref}
                className="text-white hover:text-red-600 transition-colors font-medium text-sm"
              >
                {member.phone}
              </a>
            </div>
          ))}

          <div className="flex flex-col gap-2 min-w-fit">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-1 text-white flex items-center gap-2">
              <MapPin size={12} /> Zentrale
            </h4>
            <p className="text-sm">
              {contactData.address}, <br /> {contactData.zipCode}{" "}
              {contactData.city}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Mail size={14} className="text-red-600" />
              <a
                href={`mailto:${contactData.email}`}
                className="text-white hover:text-red-600 transition-colors text-sm font-medium"
              >
                {contactData.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        <p>
          &copy; {currentYear} {contactData.companyName}.
        </p>
        <div className="flex gap-8">
          <Link to="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="hover:text-white transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
