"use client";

import React from 'react';
import { Star, ExternalLink, CheckCircle, Users, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const Upwork = () => {
  const upworkStats = [
    { label: 'Job Success Score', value: '95%', icon: '📈' },
    { label: 'Total Earnings', value: '$50K+', icon: '💰' },
    { label: 'Hours Worked', value: '2000+', icon: '⏰' },
    { label: 'Clients Served', value: '50+', icon: '👥' },
  ];

  const services = [
    'Flutter Mobile App Development',
    'React.js Web Development', 
    'Node.js Backend Development',
    'Firebase Integration',
    'UI/UX Implementation',
    'API Development & Integration',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container-responsive section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              Available for Hire
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Hire me directly on Upwork for your next project. Top-rated freelancer with proven track record.
            </p>
          </div>

          {/* Upwork Card */}
          <div className="glass-effect rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              {/* Upwork Logo Placeholder */}
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                U
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-2">Rezuanul Islam Fahim</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Senior Software Engineer • Top Rated Freelancer
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">(25+ reviews)</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {upworkStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={siteConfig.links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="h-5 w-5" />
              Hire Me on Upwork
            </a>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Services I Offer on Upwork</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-300"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Preview */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">What Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="text-left">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Exceptional work quality and communication. Delivered the Flutter app exactly as specified with clean, maintainable code."
                </p>
                <footer className="font-semibold">— Sarah M., Startup Founder</footer>
              </blockquote>
              
              <blockquote className="text-left">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Great developer! Built our React.js dashboard with excellent attention to detail. Highly recommend for complex projects."
                </p>
                <footer className="font-semibold">— Michael T., CTO</footer>
              </blockquote>
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

export default Upwork;