"use client";

import React from 'react';
import { Code2, Smartphone, Database, Zap } from 'lucide-react';
import { personalInfo, services } from '@/lib/config';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container-responsive section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">
              Crafting Digital Solutions with{' '}
              <span className="gradient-text">Precision & Passion</span>
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">
                  <strong>{personalInfo.experience}</strong> of hands-on experience
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">
                  <strong>{personalInfo.projectsCompleted}</strong> successful projects delivered
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">
                  <strong>{personalInfo.clientsSatisfied}</strong> satisfied clients worldwide
                </span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Profile Image Placeholder */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <Code2 className="h-20 w-20 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold">Professional Developer</p>
                  <p className="text-muted-foreground">Building the Future</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12">What I Do Best</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;