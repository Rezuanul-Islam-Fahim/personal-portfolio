import {
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Code,
  Zap,
  Rocket,
  Star,
  Clock,
  Users,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const coreSkills = [
  "Flutter",
  "Dart",
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Next.js",
  "Vue.js",
  "Angular",
  "Python",
  "Django",
  "FastAPI",
  "Java",
  "Spring Boot",
  "Kotlin",
  "Swift",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "GraphQL",
  "REST APIs",
  "Microservices",
];

const skillLevels = [
  { name: "Flutter", level: 98, color: "from-cyan-400 to-blue-600" },
  { name: "Dart", level: 96, color: "from-blue-400 to-cyan-600" },
  { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
  { name: "TypeScript", level: 92, color: "from-blue-500 to-blue-700" },
  { name: "React Native", level: 90, color: "from-purple-400 to-blue-500" },
  { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
  { name: "JavaScript", level: 94, color: "from-yellow-400 to-yellow-600" },
  { name: "Python", level: 85, color: "from-green-400 to-yellow-500" },
  { name: "Firebase", level: 92, color: "from-orange-400 to-red-500" },
  { name: "AWS", level: 80, color: "from-orange-400 to-orange-600" },
  { name: "Next.js", level: 89, color: "from-gray-400 to-gray-600" },
  { name: "Vue.js", level: 82, color: "from-green-400 to-green-600" },
  { name: "MongoDB", level: 87, color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", level: 84, color: "from-blue-500 to-indigo-600" },
  { name: "Express.js", level: 86, color: "from-gray-500 to-gray-700" },
  { name: "REST APIs", level: 93, color: "from-indigo-400 to-purple-500" },
  { name: "GraphQL", level: 78, color: "from-pink-400 to-rose-500" },
  { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
  { name: "Git", level: 95, color: "from-red-400 to-red-600" },
  { name: "Redux", level: 88, color: "from-purple-400 to-purple-600" },
  { name: "Material Design", level: 91, color: "from-blue-400 to-green-500" },
  { name: "iOS Development", level: 83, color: "from-gray-400 to-gray-600" },
  {
    name: "Android Development",
    level: 85,
    color: "from-green-400 to-green-600",
  },
  { name: "Supabase", level: 79, color: "from-green-400 to-teal-500" },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2022-2024",
    description:
      "Specialized in Machine Learning and Software Engineering. GPA: 3.9/4.0",
    achievements: [
      "Dean's List",
      "Research Assistant",
      "Published 2 papers in AI conferences",
    ],
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University of California, Berkeley",
    year: "2018-2022",
    description:
      "Focused on full-stack development and algorithms. GPA: 3.8/4.0",
    achievements: [
      "Summa Cum Laude",
      "President of Computer Science Club",
      "Hackathon Winner x3",
    ],
    icon: "🏆",
  },
];

const projects = [
  {
    title: "AI-Powered Task Manager",
    description:
      "Smart productivity app using ML to optimize workflows and predict completion times.",
    tech: ["React", "TypeScript", "Python", "TensorFlow"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack solution with real-time inventory and payment processing.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Real-time Chat App",
    description: "Scalable chat with video calling and end-to-end encryption.",
    tech: ["React", "Socket.io", "WebRTC", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    gradient: "from-green-500 to-teal-500",
  },
];

const stats = [
  { label: "Years Experience", value: "10+", icon: Code },
  { label: "Projects Completed", value: "50+", icon: Rocket },
  { label: "Technologies", value: "15+", icon: Zap },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: Linkedin,
    color: "hover:text-blue-500",
    bgColor: "from-blue-500 to-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: Github,
    color: "hover:text-gray-400",
    bgColor: "from-gray-700 to-gray-800",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-handle",
    icon: Twitter,
    color: "hover:text-blue-400",
    bgColor: "from-blue-400 to-blue-500",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/your-handle",
    icon: Instagram,
    color: "hover:text-pink-500",
    bgColor: "from-pink-500 to-purple-600",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@your-channel",
    icon: Youtube,
    color: "hover:text-red-500",
    bgColor: "from-red-500 to-red-600",
  },
];

export default function Index() {
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
                I'm{" "}
                <span className="text-gradient animate-glow inline-block">
                  Rezuanul Islam Fahim
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Flutter expert and full-stack developer crafting{" "}
                <span className="text-primary font-semibold">
                  cross-platform applications
                </span>{" "}
                and{" "}
                <span className="text-accent font-semibold">
                  innovative solutions
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 pt-8">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group"
              >
                <Link to="/projects" className="flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Quick Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Follow me:
                </span>
                {socialLinks.slice(0, 4).map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
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
                I'm a passionate mobile and full-stack developer with over 10
                years of experience crafting innovative applications. My core
                expertise lies in{" "}
                <span className="text-primary font-semibold">
                  Flutter development
                </span>
                , where I've built countless cross-platform applications that
                deliver exceptional user experiences.
              </p>
              <p>
                Beyond Flutter, I have extensive experience in web technologies,
                backend development, and cloud architecture. I love turning
                complex problems into elegant solutions and am always eager to
                learn and adopt new technologies that can improve development
                efficiency and user satisfaction.
              </p>
              <p>
                When I'm not coding, you'll find me exploring emerging tech
                trends, contributing to open-source projects, or mentoring
                fellow developers in the community.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="group">
                <Link to="/about" className="flex items-center gap-2">
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

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillLevels.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg group-hover:text-gradient transition-all">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden backdrop-blur-glass">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:glow-neon`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              Let's Work Together on{" "}
              <span className="text-gradient">Upwork</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your app idea to life? With 10+ years of experience
              and expertise in Flutter development, I deliver high-quality,
              cross-platform applications that exceed expectations.
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
                  <span className="text-lg">
                    Flutter Mobile App Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">Cross-Platform Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">React Native Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">API Development & Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <span className="text-lg">UI/UX Implementation</span>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 glow-neon group"
                >
                  <a
                    href="https://www.upwork.com/freelancers/~your-upwork-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z" />
                    </svg>
                    Hire Me on Upwork
                    <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
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
              <Card
                key={index}
                className="backdrop-blur-glass border-border/50 overflow-hidden group hover:glow-neon transition-all duration-300"
              >
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/projects" className="flex items-center gap-2">
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
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm always excited to
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
              <Link to="/contact" className="flex items-center gap-2">
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
