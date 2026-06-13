export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl font-bold text-[#f0f0f0] mb-3">Let's build something.</h2>
      <p className="text-[#888] mb-8 text-sm">Based in New York City.</p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <a
          href="mailto:kennethmelendez@protonmail.com"
          className="text-[#888] hover:text-[#f97316] transition-colors text-sm font-mono"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/kennethmelendez"
          target="_blank"
          rel="noreferrer"
          className="text-[#888] hover:text-[#f97316] transition-colors text-sm font-mono"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/KennethMelendez"
          target="_blank"
          rel="noreferrer"
          className="text-[#888] hover:text-[#f97316] transition-colors text-sm font-mono"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
