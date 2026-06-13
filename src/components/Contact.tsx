export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20 text-center">
      <h2 className="text-2xl font-bold text-white mb-3">Let's build something.</h2>
      <p className="text-[#909090] mb-8 text-sm">Based in New York City.</p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a href="mailto:kennethmelendez@protonmail.com" className="text-[#909090] hover:text-white transition-colors text-sm font-mono">
          Email
        </a>
        <a href="https://linkedin.com/in/kennethmelendez" target="_blank" rel="noreferrer" className="text-[#909090] hover:text-white transition-colors text-sm font-mono">
          LinkedIn
        </a>
        <a href="https://github.com/KennethMelendez" target="_blank" rel="noreferrer" className="text-[#909090] hover:text-white transition-colors text-sm font-mono">
          GitHub
        </a>
      </div>
    </section>
  );
}
