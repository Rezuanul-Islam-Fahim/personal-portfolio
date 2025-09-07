import type { Metadata } from 'next';
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Star,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Layout } from "@/components";
import Link from "next/link";
import { skillLevels, education, projects, stats } from "@/data";
import { siteConfig } from "@/lib/config";
import { SkillProgress, ProjectCard } from "@/components";

export const metadata: Metadata = {
  title: 'Professional Flutter & Full-Stack Developer',
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: 'Rezuanul Islam Fahim - Professional Flutter & Full-Stack Developer',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Rezuanul Islam Fahim Portfolio',
    images: [
      {
        url: '/favicon.ico',
        width: 32,
        height: 32,
        alt: 'Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rezuanul Islam Fahim - Professional Flutter & Full-Stack Developer',
    description: siteConfig.description,
    images: ['/favicon.ico'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid bg-noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full opacity-25 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium tracking-wide">
                Welcome to my digital space
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                I&apos;m{" "}
                <span className="text-gradient animate-glow inline-block">
                  Rezuanul Islam Fahim
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Flutter & full-stack engineer — building scalable, production-ready web and mobile apps.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 pt-8">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-neon">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a professional Flutter developer with 7+ years of experience building robust hybrid mobile applications for Android and iOS. I deliver
                pixel-perfect UIs from Figma/Adobe XD, implement clean architecture (MVC/MVVM), and ship production-ready apps to the Play Store and App Store.
              </p>
              <p>
                As a Full Stack engineer, I build web apps using React/Next.js and Tailwind CSS, and backend APIs with Node.js, Express, and Firebase. I specialize in
                real-time features (chat, notifications, live tracking), payments (Stripe, PayPal), auth flows (Email/OTP, role-based), and cloud functions.
              </p>
              <p>
                I follow clean, modular patterns and deliver maintainable codebases. I&apos;m comfortable integrating 3rd-party services like Twilio, Google Maps, and
                various databases (MongoDB, Firestore, SQLite), and I wire CI/CD pipelines with GitHub Actions, Vercel, or Netlify.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="group">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Me
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 sm:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </div>

          <SkillProgress skills={skillLevels} />
        </div>
      </section>

      {/* Upwork Hiring Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full opacity-25 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Available for Hire
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Work Together on{" "}
              <span className="text-gradient">Upwork</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your idea to life? With 7+ years of professional experience and 3 years active on Upwork, I deliver scalable, production-ready
              Flutter and full-stack apps, polished UI/UX, and reliable backends — all with a focus on clean architecture and fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Me for Your{" "}
                <span className="text-gradient">Project</span>?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">
                      Top-Rated Freelancer
                    </h4>
                    <p className="text-muted-foreground">
                      Proven track record with 5-star ratings and satisfied
                      clients worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">
                      Fast Delivery
                    </h4>
                    <p className="text-muted-foreground">
                      Quick turnaround times without compromising on quality or
                      attention to detail
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">
                      24/7 Communication
                    </h4>
                    <p className="text-muted-foreground">
                      Clear communication and regular updates throughout the
                      project lifecycle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Services */}
            <div className="backdrop-blur-glass border border-border/50 rounded-2xl p-8 glow-neon">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="text-gradient">Services I Offer</span>
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">Flutter & Dart Mobile Development (iOS/Android)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">React / Next.js Frontend & SSR</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">Backend & API Development (Node.js, Express, Firebase)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">Payments & Integrations (Stripe, PayPal)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">Real-time Features (Websockets, Socket.io, Twilio)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">CI/CD, Docker, Deployment (GitHub Actions, Vercel)</span>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 glow-neon group"
                >
                  <a
                    href="https://www.upwork.com/freelancers/~01d36b93322b73e499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                    aria-label="View Upwork profile"
                  >
                    {/* Upwork logo */}
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
                    </svg>

                    <span className="font-semibold">View Upwork Profile</span>
                    <ExternalLink className="h-5 w-5 ml-3 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Start your project today with a free consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Educational <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic foundation that shaped my technical expertise and
              problem-solving approach.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 glow-neon"></div>

                    {/* Content */}
                    <div className="ml-20">
                      <Card className="backdrop-blur-glass border-border/50 hover:glow-neon transition-all duration-300 group-hover:translate-x-2">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="text-3xl">{edu.icon}</div>
                              <Badge variant="outline" className="px-3 py-1">
                                {edu.year}
                              </Badge>
                            </div>
                          </div>
                          <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {edu.school}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {edu.description}
                          </p>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                              Key Achievements
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs hover:bg-primary/20 transition-colors"
                                >
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline End Dot */}
              <div className="absolute left-6 bottom-0 w-5 h-5 bg-gradient-to-br from-accent to-primary rounded-full border-4 border-background shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work that demonstrates innovation,
              technical expertise, and creative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-muted/30 relative">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? I&apos;m always excited to
              discuss new opportunities and collaborate on innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-neon">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:rifahim98@gmail.com"
                className="text-muted-foreground hover:underline"
              >
                rifahim98@gmail.com
              </a>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-neon">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+8801815188895</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-neon">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Kishoreganj, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="text-center space-y-8">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
