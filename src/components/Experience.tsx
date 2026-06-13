import { type ReactNode } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface Job {
  role: string;
  company: string;
  dates: string;
  bullets: ReactNode[];
}

const jobs: Job[] = [
  {
    role: "Full Stack Engineer",
    company: "WorkWave",
    dates: "Feb 2022 – Present",
    bullets: [
      <>Reduced Tenant List load <strong className="text-[#f97316]">~10s → 0.8s</strong>, User List <strong className="text-[#f97316]">~8s → 0.1s</strong> — 80–99% improvement</>,
      <>Built Bulk Account Upload tool, accelerating QA workflows by <strong className="text-[#f97316]">80%</strong></>,
      <>Developed User Suspension tooling, boosting Support Team efficiency by <strong className="text-[#f97316]">50%</strong></>,
    ],
  },
  {
    role: "Software Engineer II",
    company: "FYE (For Your Entertainment)",
    dates: "Jun 2021 – Feb 2022",
    bullets: [
      <>Integrated Salesforce-backed discount modal now live for <strong className="text-[#f97316]">millions of users</strong></>,
      <>Built internal employee portal from scratch with Next.js</>,
      <>Automated return refund processing with Spring Boot, reducing manual handling</>,
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Bestpass",
    dates: "Sep 2019 – Jun 2021",
    bullets: [
      <>Led full rebranding of Customer Portal Site from concept to back-end delivery</>,
      <>Migrated legacy VB codebase to modern C#, improving maintainability</>,
      <>Built Angular onboarding app for vehicle registration from greenfield</>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-[#f0f0f0] mb-8">Experience</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.company} className="bg-[#141414] border-[#1f1f1f]">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <p className="font-bold text-[#f0f0f0]">{job.role}</p>
                  <p className="text-[#f97316] text-sm">{job.company}</p>
                </div>
                <span className="font-mono text-xs text-[#888]">{job.dates}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-[#888] flex gap-2">
                    <span className="text-[#f97316] mt-0.5 shrink-0">–</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
