import kenny from "../Images/kenny.gif";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#f0f0f0] mb-2 leading-tight">
            Kenneth Melendez
            <span className="animate-blink text-[#f97316] ml-1">|</span>
          </h1>
          <p className="text-base sm:text-xl text-[#f0f0f0] mb-3">Full Stack Engineer</p>
          <p className="font-mono text-xs sm:text-sm text-[#888] mb-8">
            New York City · Making slow things fast and old things new · AWS Certified · 5+ years
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button
              asChild
              variant="outline"
              className="border-[#1f1f1f] text-[#f0f0f0] hover:border-[#f97316] hover:text-[#f97316]"
            >
              <a href="https://github.com/KennethMelendez" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#1f1f1f] text-[#f0f0f0] hover:border-[#f97316] hover:text-[#f97316]"
            >
              <a href="https://linkedin.com/in/kennethmelendez" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#1f1f1f] text-[#f0f0f0] hover:border-[#f97316] hover:text-[#f97316]"
            >
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#f97316] text-[#0d0d0d] hover:bg-[#ea580c]"
            >
              <a href="mailto:kennethmelendez@protonmail.com">Email Me</a>
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 order-first md:order-last">
          <div className="p-1 border-2 border-[#f97316] rounded-lg">
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
