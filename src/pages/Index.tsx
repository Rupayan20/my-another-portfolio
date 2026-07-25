import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TrustedClients } from "../components/TrustedClients";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";

import ContactPopup from "../components/ContactPopup";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const delays = [10000, 15000, 20000];
    let timer: ReturnType<typeof setTimeout>;

    const startPopupSequence = (index: number) => {
      const delay = delays[index] ?? 30000;

      timer = setTimeout(() => {
        setIsPopupOpen(true);

        // Move to the next delay.
        // After 20 seconds, it stays at 30 seconds forever.
        startPopupSequence(Math.min(index + 1, delays.length));
      }, delay);
    };

    startPopupSequence(0);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-hidden">
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <TrustedClients />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ContactPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Index;
