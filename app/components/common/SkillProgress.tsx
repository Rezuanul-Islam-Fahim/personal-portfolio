import { SkillLevel } from "@/types";

interface SkillProgressProps {
  skills: SkillLevel[];
}

export default function SkillProgress({ skills }: SkillProgressProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2 group">
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg group-hover:text-gradient transition-all">
                {skill.name}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden backdrop-blur-glass">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:glow-neon`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
