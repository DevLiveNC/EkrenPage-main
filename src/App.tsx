import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Transformation from "./components/Transformation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen font-sans overflow-x-hidden">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Story />
      <Packages />
      <Transformation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
