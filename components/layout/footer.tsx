"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { siteConfig, personalInfo } from '@/lib/config';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: siteConfig.links.github },
    { name: 'LinkedIn', icon: Linkedin, href: siteConfig.links.linkedin },
    { name: 'Twitter', icon: Twitter, href: siteConfig.links.twitter },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container-responsive section-padding py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="text-2xl font-bold gradient-text mb-4 block">
              Rezuanul Islam Fahim
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Software Engineer specializing in building exceptional digital experiences. 
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
              <a
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Hire on Upwork
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>by Rezuanul Islam Fahim</span>
            </div>
            
            <div className="text-muted-foreground text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
              <p className="text-sm">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;