import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="backdrop-blur-glass border-border/50 overflow-hidden group hover:glow-neon transition-all duration-300">
      <div className="relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
        ></div>
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-gradient transition-all">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            asChild
            className="flex-1"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="flex-1 bg-gradient-to-r from-primary to-accent"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
