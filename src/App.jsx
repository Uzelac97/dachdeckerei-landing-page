import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Services />
                <Kontakt />
              </main>
            }
          />

          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
