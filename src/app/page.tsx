/**
 * HOME PAGE
 * Cinematic scroll story - the main experience
 * Server component that composes client section components
 */

import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Hero with 3D Scene */}
      <Hero />

      {/* Featured Video */}
      <Showreel />

      {/* Project Grid */}
      <Projects />

      {/* Skills Visualization */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Contact CTA */}
      <Contact />
    </>
  );
}
