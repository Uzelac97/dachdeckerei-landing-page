import React from "react";
import {
  Layers,
  Maximize,
  Wrench,
  ShieldCheck,
  Sun,
  Paintbrush,
  Footprints,
  DropletOff,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Flachdachabdichtung",
      description:
        "Professionelle Neu- und Sanierung von Flachdächern für langanhaltenden Schutz.",
      icons: <Layers size={32} />,
    },
    {
      title: "Balkon & Terrasse",
      description:
        "Hochwertige Abdichtung von Balkonen, Terrassen und Garagen.",
      icons: <Maximize size={32} />,
    },
    {
      title: "Reparatur & Wartung",
      description:
        "Schnelle Flachdach-Reparatur und regelmäßige Wartung zur Werterhaltung.",
      icons: <Wrench size={32} />,
    },
    {
      title: "ABS Safety",
      description:
        "Installation von zertifizierten Absturzsicherungssystemen für Ihre Sicherheit.",
      icons: <ShieldCheck size={32} />,
    },
    {
      title: "Dachfenster",
      description:
        "Einbau und Austausch von modernen Dachfenstern für mehr Licht und Komfort.",
      icons: <Sun size={32} />,
    },
    {
      title: "Flüssigkunststoff",
      description:
        "Spezialisierte Flüssigkunststoffabdichtung für komplizierte Details und Anschlüsse.",
      icons: <Paintbrush size={32} />,
    },
    {
      title: "Besichtigungssysteme",
      description:
        "Professionelle Besichtigungssysteme und Wartungsgänge für Ihr Dach.",
      icons: <Footprints size={32} />,
    },
    {
      title: "Leckageortung",
      description:
        "Präzise Ortung von Undichtigkeiten zur schnellen Schadensbehebung.",
      icons: <DropletOff size={32} />,
    },
  ];

  return (
    <section
      id="dienstleistungen"
      className="bg-black py-20 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white md:text-5xl font-bold uppercase tracking-tighter">
            Unsere <span className="text-red-600">Dienstleistungen</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 p-8 border border-white/5 hover:border-red-600 transition-all duration-300 h-full"
            >
              {/* 1. ICON CONTAINER */}
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icons}
              </div>

              {/* 2. DECORATIVE LINE */}
              <div className="w-10 h-1 bg-red-600 mb-6 group-hover:w-full transition-all duration-500"></div>

              {/* 3. TEXT CONTENT */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
