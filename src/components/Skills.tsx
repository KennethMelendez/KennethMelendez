import { Badge } from "./ui/badge";

const skills: Record<string, string[]> = {
  Languages: ["C#", "TypeScript", "JavaScript", "Java", "SQL", "Python", "HTML / CSS"],
  Frontend: ["React", "Angular", "Next.js", "Tailwind CSS", "Redux", "Webpack", "Vite"],
  Backend: ["ASP.NET Core", ".NET", "Spring Boot", "Node.js", "Entity Framework", "REST APIs", "GraphQL", "Microservices"],
  Databases: ["SQL Server", "PostgreSQL", "MySQL", "Redis"],
  "Cloud & DevOps": ["AWS", "Lambda", "EC2", "S3", "RDS", "SQS", "API Gateway", "Docker", "CI/CD", "Azure DevOps", "Git"],
  Practices: ["System Design", "Performance Engineering", "Agile / Scrum", "Code Review", "TDD"],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
      <div className="space-y-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2">
            <span className="font-mono text-xs text-[#606060] sm:w-32 sm:shrink-0 sm:pt-1">{category}</span>
            <div className="flex flex-wrap gap-2 flex-1">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="font-mono border-white/10 text-[#909090] hover:border-white/40 hover:text-white transition-colors cursor-default bg-transparent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
