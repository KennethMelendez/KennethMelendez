import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface Job {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    role: "Full Stack Engineer",
    company: "WorkWave RealGreen",
    dates: "Feb 2022 – Present",
    bullets: [
      "Engineered database query optimizations, indexing strategies, and caching layers that cut Tenant List load times from 10s to 0.8s (92%) and User List queries from 8s to 0.1s (99%), directly improving daily operations for customer success teams managing thousands of accounts",
      "Architected and shipped a Bulk Account Upload tool (React + .NET Core) that automated previously manual QA workflows, reducing setup time by 80% and enabling broader test coverage across the platform",
      "Built User Suspension tooling integrated with the permission and authorization system, reducing account management resolution time by 50% for the Support Team",
      "Drove SQL profiling, execution plan analysis, and front-end rendering audits across the admin portal to surface and eliminate critical performance bottlenecks",
      "Collaborated cross-functionally with product, QA, and customer success teams to scope and deliver high-impact features on a multi-tenant SaaS platform serving thousands of service businesses nationwide",
    ],
    tech: ["React", "TypeScript", "C#", "ASP.NET Core", ".NET", "SQL Server", "Entity Framework", "Azure DevOps", "AWS"],
  },
  {
    role: "Software Engineer II",
    company: "FYE (For Your Entertainment)",
    dates: "Jun 2021 – Feb 2022",
    bullets: [
      "Integrated a Salesforce-backed personalized discount modal into the main e-commerce shopping flow, coordinating between React frontend components and Salesforce APIs to deliver targeted promotions at scale",
      "Built an internal employee portal from greenfield using Next.js and REST APIs, consolidating fragmented tooling into a single interface and eliminating cross-system context switching for operations staff",
      "Developed a Spring Boot microservice to automate return refund processing, eliminating manual data entry and reducing processing errors across the operations team",
      "Shipped production features across the full stack in a fast-paced agile environment with weekly release cycles",
    ],
    tech: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "Salesforce", "REST APIs", "JavaScript"],
  },
  {
    role: "Associate Software Engineer",
    company: "Bestpass",
    dates: "Sep 2019 – Jun 2021",
    bullets: [
      "Led the complete redesign and rebranding of the Customer Portal, owning the full project lifecycle from design coordination to backend implementation in partnership with design and product teams",
      "Migrated legacy Visual Basic codebase to modern C# and .NET, reducing technical debt, improving maintainability, and increasing team velocity on a shared critical service",
      "Built an Angular vehicle registration onboarding application from greenfield, digitizing a paper-heavy process and improving data accuracy and end-to-end processing speed",
      "Coordinated across design, product, and operations to deliver brand-aligned, user-tested experiences on schedule",
    ],
    tech: ["Angular", "TypeScript", "C#", ".NET", "SQL Server", "Visual Basic"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
      <div className="space-y-6">
        {jobs.map((job) => (
          <Card key={job.company} className="bg-white/[0.04] border-white/[0.08] backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <p className="font-bold text-white">{job.role}</p>
                  <p className="text-[#ffffff] text-sm">{job.company}</p>
                </div>
                <span className="font-mono text-xs text-[#606060]">{job.dates}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-[#909090] leading-relaxed flex gap-3">
                    <span className="text-[#ffffff] mt-[3px] shrink-0 text-xs">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {job.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="font-mono text-xs border-white/10 text-[#606060] hover:border-white/40 hover:text-white transition-colors cursor-default bg-transparent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
