'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';
import { Badge } from '@/ui/badge';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me an email anytime',
    value: 'rifahim98@gmail.com',
    href: 'mailto:rifahim98@gmail.com',
    primary: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call or WhatsApp me',
    value: '+8801815188895',
    href: 'tel:+8801815188895',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in Bangladesh',
    value: 'Kishoreganj, Dhaka, Bangladesh',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rezuanul-islam-fahim/',
    icon: Linkedin,
    color: 'hover:text-blue-500',
    bgColor: 'from-blue-500 to-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Rezuanul-Islam-Fahim',
    icon: Github,
    color: 'hover:text-gray-400',
    bgColor: 'from-gray-700 to-gray-800',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/rezuanul_fahim',
    icon: Twitter,
    color: 'hover:text-sky-400',
    bgColor: 'from-sky-400 to-sky-500',
  },
];

const services = [
  'Flutter Mobile Development',
  'React/Next.js Web Development',
  'Backend API Development',
  'Database Design & Integration',
  'Payment Gateway Integration',
  'Real-time Features',
  'UI/UX Implementation',
  'Code Review & Consultation',
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <div className="py-24 sm:py-32 bg-grid bg-noise relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full opacity-25 animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I&apos;m always excited to discuss new opportunities 
            and collaborate on innovative solutions. Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-glass border-border/50 glow-neon">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Send me a <span className="text-gradient">message</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="backdrop-blur-glass border-border/50"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="backdrop-blur-glass border-border/50"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="backdrop-blur-glass border-border/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="backdrop-blur-glass border-border/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="backdrop-blur-glass border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                      method.primary 
                        ? 'bg-gradient-to-br from-primary to-accent glow-neon' 
                        : 'bg-muted'
                    }`}>
                      <method.icon className={`h-6 w-6 ${method.primary ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-gradient transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {method.description}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-sm text-primary hover:underline"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="backdrop-blur-glass border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Available for Work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Timezone</p>
                    <p className="text-sm text-muted-foreground">GMT+6 (Bangladesh)</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <Button asChild className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 glow-neon group">
                    <a
                      href="https://www.upwork.com/freelancers/~01d36b93322b73e499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
                      </svg>
                      Hire on Upwork
                      <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="backdrop-blur-glass border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Services I Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-border/50">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links & CTA */}
        <div className="text-center bg-muted/30 backdrop-blur-glass border border-border/50 rounded-2xl p-12 glow-neon">
          <h2 className="text-3xl font-bold mb-4">
            Connect with me on <span className="text-gradient">Social Media</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Follow me on social platforms to stay updated with my latest projects, insights, and tech tips.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${social.bgColor} shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl glow-neon`}
              >
                <social.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group">
              <Link href="/projects" className="flex items-center gap-2">
                View My Projects
                <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="backdrop-blur-glass border-border/50 hover:bg-muted/50 group">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Me
                <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
