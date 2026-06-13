import kenny from "../Images/kenny.gif";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-5">
            <span className="w-2 h-2 rounded-full bg-[#ffffff] animate-pulse" />
            <span className="font-mono text-xs text-[#909090] tracking-wider">Currently @ WorkWave RealGreen</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 leading-tight">
            Kenneth Melendez
            <span className="animate-blink text-[#ffffff] ml-1">|</span>
          </h1>
          <p className="text-base sm:text-xl text-white mb-3">Full Stack Engineer</p>
          <p className="font-mono text-xs sm:text-sm text-[#909090] mb-8">
            New York City · React · .NET · AWS · 6+ years in enterprise SaaS
          </p>


          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button asChild variant="outline" className="border-white/20 text-white bg-transparent hover:border-white hover:bg-white/5">
              <a href="https://github.com/KennethMelendez" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white bg-transparent hover:border-white hover:bg-white/5">
              <a href="https://linkedin.com/in/kennethmelendez" target="_blank" rel="noreferrer">LinkedIn</a>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white bg-transparent hover:border-white hover:bg-white/5">
              <a href="/resume.pdf" download>Resume</a>
            </Button>
            <Button asChild className="bg-white text-[#141410] hover:bg-[#d0d0d0] font-bold">
              <a href="mailto:kennethmelendez@protonmail.com">Email Me</a>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 order-first md:order-last">
          <div className="p-1 border-2 border-white/30 rounded-lg">
            <img
              src={kenny}
              alt="Kenneth Melendez"
              className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
