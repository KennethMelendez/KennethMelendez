export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <h2 className="text-2xl font-bold text-white mb-8">About</h2>
      <div className="space-y-4 text-[#909090] leading-relaxed">
        <p>
          Full Stack Engineer with 6+ years building and scaling enterprise SaaS applications.
          At WorkWave RealGreen, I work on performance-critical systems serving thousands of
          service businesses across the U.S. A lot of my time goes into finding where things
          are slow and fixing them, whether that's a bad query, a render bottleneck, or
          a workflow that someone's been doing by hand for years.
        </p>
        <p>
          I work across the whole stack: React and TypeScript on the frontend, C# and ASP.NET
          Core on the backend, SQL Server for data, AWS for infrastructure. I've helped modernize
          legacy codebases, built internal tooling that saves teams real time every week, and
          shipped features that touched every layer of the system.
        </p>
        <p>
          I care about writing code that actually solves the problem and that the next person
          can pick up without a wall of Slack messages to explain it. Good engineering to me
          means understanding the business impact first, then building something clean enough
          to last.
        </p>
      </div>
    </section>
  );
}
