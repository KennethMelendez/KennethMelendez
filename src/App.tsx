import GameBoyFrame from "./components/GameBoyFrame";
import PixelBackground from "./components/PixelBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GitHubContributions from "./components/GitHubContributions";
import CertsEducation from "./components/CertsEducation";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#141410] min-h-screen">
      <PixelBackground />
      <GameBoyFrame />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <GitHubContributions />
        <CertsEducation />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}
