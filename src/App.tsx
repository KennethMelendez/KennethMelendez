import ManhattanGrid from "./components/ManhattanGrid";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CertsEducation from "./components/CertsEducation";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <ManhattanGrid />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Skills />
        <Experience />
        <CertsEducation />
        <Contact />
      </div>
    </div>
  );
}
