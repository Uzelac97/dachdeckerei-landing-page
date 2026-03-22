import { services } from "../data/servicesData";

const Services = () => {
  return (
    <section
      id="dienstleistungen"
      className="bg-black py-24 w-full overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl text-white md:text-5xl font-extrabold uppercase tracking-tighter">
            Unsere <span className="text-red-600">Dienstleistungen</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="group bg-zinc-900/40 p-10 border border-white/5 hover:border-red-600/50 transition-all duration-500 h-full relative overflow-hidden"
              >
                {/* ICON */}
                <div className="text-red-600 mb-8 transition-transform duration-500 group-hover:-translate-y-1">
                  <IconComponent size={38} strokeWidth={1.5} />
                </div>

                {/* ANIMATED LINE */}
                <div className="w-8 h-1 bg-red-600 mb-8 group-hover:w-full transition-all duration-700 ease-in-out"></div>

                {/* TEXT */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* BG GLOW */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-all duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
