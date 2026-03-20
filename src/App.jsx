import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}

export default App;
