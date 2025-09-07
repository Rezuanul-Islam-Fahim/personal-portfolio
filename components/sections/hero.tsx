"use client";

import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { personalInfo, siteConfig } from '@/lib/config';
import AnimatedCounter from '@/components/ui/animated-counter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
      
      <div className="container-responsive section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">RF</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
            {personalInfo.title} • {personalInfo.subtitle}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Work Together
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <a
              href={siteConfig.links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Hire Me on Upwork
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;