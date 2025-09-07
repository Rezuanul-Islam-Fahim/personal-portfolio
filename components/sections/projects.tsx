"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '@/lib/config';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container-responsive section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work and creative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground hover:bg-accent'
              }`}
            >
              <Filter className="h-4 w-4" />
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'featured'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground hover:bg-accent'
              }`}
            >
              ⭐ Featured Only
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {allTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full font-medium hover:bg-accent transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;