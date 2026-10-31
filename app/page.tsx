import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Journey />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
