"use client";

import React, { useEffect, useRef, useState } from 'react';
import { skills } from '@/lib/config';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: isVisible ? '0.2s' : '0s',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Frontend Development', skills: skills.frontend, icon: '🎨' },
    { title: 'Mobile Development', skills: skills.mobile, icon: '📱' },
    { title: 'Backend Development', skills: skills.backend, icon: '⚡' },
    { title: 'Tools & Technologies', skills: skills.tools, icon: '🛠️' },
  ];

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container-responsive section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="space-y-6"
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                animationDelay: `${categoryIndex * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    style={{
                      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                      animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <SkillBar skill={skill} isVisible={isVisible} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass-effect">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-medium">
              Always learning and adapting to new technologies
            </span>
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

export default Skills;