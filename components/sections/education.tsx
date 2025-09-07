"use client";

import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education, certifications, workExperience } from '@/lib/config';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container-responsive section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{edu.description}</p>
                  {edu.gpa && (
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              💼 Work Experience
            </h3>
            
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <div
                  key={work.id}
                  className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${(index + 2) * 0.1}s`,
                  }}
                >
                  <h4 className="text-lg font-semibold mb-1">{work.position}</h4>
                  <div className="text-primary font-medium mb-2">{work.company}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {work.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {work.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {work.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              🏆 Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${(index + 5) * 0.1}s`,
                  }}
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <div className="text-primary font-medium mb-2">{cert.issuer}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>
              ))}

              {/* Additional Achievement */}
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Always staying updated with the latest technologies and best practices
                  </p>
                </div>
              </div>
            </div>
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

export default Education;