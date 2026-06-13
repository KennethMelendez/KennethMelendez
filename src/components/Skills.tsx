import { Badge } from "./ui/badge";

const skills: Record<string, string[]> = {
  Languages: ["C#", "Java", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React", "Angular", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Backend: [".NET / ASP.NET Core", "Spring Boot", "Node.js", "REST APIs"],
  "Cloud & Tools": ["AWS (Certified)", "Git", "Azure DevOps", "Salesforce"],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-[#f0f0f0] mb-8">Tech Stack</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-xs text-[#888] w-28 shrink-0">{category}</span>
            {items.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="font-mono border-[#1f1f1f] text-[#888] hover:border-[#f97316] hover:text-[#f97316] transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
