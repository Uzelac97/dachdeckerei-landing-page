import heroImg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-screen w-full flex flex-col justify-center items-center text-white text-center px-6"
    >
      <div className="z-10 mt-[-10vh]">
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none">
          Dachdeckerei <br className="md:hidden" />
          <span className="text-red-600">Martin</span>
        </h1>
        <p className="text-red-500 font-bold text-lg md:text-2xl mt-4 uppercase tracking-widest">
          Ihr Experte für das Dach
        </p>
        <p className="text-gray-200 text-sm md:text-lg max-w-xs md:max-w-xl mt-4 mx-auto leading-relaxed">
          Traditionelle Handwerkskunst trifft moderne Technik. <br />
          Ihr Dach in unseren Händen
        </p>
        <a
          href="#kontakt"
          className="mt-10 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 active:scale-95 shadow-2xl uppercase text-sm tracking-widest text-center no-underline"
        >
          Kontakt Aufnehmen
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-red-600 text-3xl uppercase tracking-[0.2em] mb-2 font-bold animate-pulse">
          |
        </span>
        <div className="w-3px h-12 bg-linear-to-b from-red-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
