import React from "react";
import heroImg from "/src/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
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
          Ihr Dach u našim rukama.
        </p>
        <button className="mt-10 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 active:scale-95 shadow-2xl uppercase text-sm tracking-widest">
          Kontakt Aufnehmen
        </button>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <div className="w-[2px] h-10 bg-red-600"></div>
      </div>
    </section>
  );
};

export default Hero;
