import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Interests from "@/components/sections/Interests";
import Experience from "@/components/sections/Experience";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Interests />
      <Experience />
      <GitHubActivity />
      <Contact />
    </>
  );
}
