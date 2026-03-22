import { CheckCircle2 } from "lucide-react";
import roof from "../assets/roof.jpg";

const About = () => {
  const benefits = [
    "20+ Jahre Erfahrung",
    "Zertifizierter Meisterbetrieb",
    "5 Jahre Garantie",
    "Kostenlose Beratung",
  ];

  return (
    <section id="ueber-uns" className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* LEFT COLUMN: Visuals */}
          <div className="w-full lg:w-1/2">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Decorative design elements */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-red-600 transition-all duration-500 group-hover:-top-5 group-hover:-left-5" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-red-600 transition-all duration-500 group-hover:-bottom-5 group-hover:-right-5" />

              {/* Main image container */}
              <div className="relative h-125 overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                <img
                  src={roof}
                  alt="Dachdecker Detail"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: Content & Details */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Heading & accent line */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
                Wer <span className="text-red-600">wir sind</span>
              </h2>
              <div className="w-20 h-1.5 bg-red-600" />
            </div>

            {/* Main description text */}
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Seit Jahren sind wir Ihr zuverlässiger Partner für hochwertige
              Dachabdichtungen. Unser Fokus liegt auf Präzision, Langlebigkeit
              und der Zufriedenheit unserer Kunden. Wir kombinieren
              traditionelles Handwerk mit modernster Technik.
            </p>

            {/* Benefits feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 pt-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="bg-red-600/10 p-1.5 rounded-full group-hover/item:bg-red-600/20 transition-colors">
                    <CheckCircle2 className="text-red-600" size={20} />
                  </div>
                  <span className="text-white font-bold uppercase text-xs tracking-widest">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
