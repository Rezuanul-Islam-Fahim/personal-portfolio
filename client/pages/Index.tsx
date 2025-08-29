import { ArrowRight, ExternalLink, Github, Mail, MapPin, Phone, Code, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const skills = [
  { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
  { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
  { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
  { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
  { name: "Next.js", level: 92, color: "from-purple-400 to-purple-600" },
  { name: "AWS", level: 80, color: "from-orange-400 to-orange-600" },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2022-2024",
    description: "Specialized in Machine Learning and Software Engineering. GPA: 3.9/4.0",
    achievements: ["Dean's List", "Research Assistant", "Published 2 papers in AI conferences"],
    icon: "🎓"
  },
  {
    degree: "Bachelor of Science in Computer Engineering", 
    school: "University of California, Berkeley",
    year: "2018-2022",
    description: "Focused on full-stack development and algorithms. GPA: 3.8/4.0",
    achievements: ["Summa Cum Laude", "President of Computer Science Club", "Hackathon Winner x3"],
    icon: "🏆"
  }
];

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "Smart productivity app using ML to optimize workflows and predict completion times.",
    tech: ["React", "TypeScript", "Python", "TensorFlow"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack solution with real-time inventory and payment processing.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg", 
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Real-time Chat App",
    description: "Scalable chat with video calling and end-to-end encryption.",
    tech: ["React", "Socket.io", "WebRTC", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    gradient: "from-green-500 to-teal-500"
  }
];

const stats = [
  { label: "Years Experience", value: "5+", icon: Code },
  { label: "Projects Completed", value: "50+", icon: Rocket },
  { label: "Technologies", value: "15+", icon: Zap },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid bg-noise">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        
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
                Full-stack developer and AI enthusiast crafting{" "}
                <span className="text-primary font-semibold">innovative solutions</span>{" "}
                that bridge technology and creativity
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group">
                <Link to="/projects" className="flex items-center gap-2">
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
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  About <span className="text-gradient">Me</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate software engineer with expertise in full-stack development and artificial intelligence. 
                  With a strong foundation in computer science and hands-on experience building scalable applications, 
                  I enjoy solving complex problems and creating user-centric solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
              <Button asChild variant="outline" className="group">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Me
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
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
              My academic foundation that shaped my technical expertise and problem-solving approach.
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="backdrop-blur-glass border-border/50 hover:glow-neon transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-gradient transition-all">
                          {edu.degree}
                        </CardTitle>
                        <Badge variant="outline" className="mt-2 sm:mt-0">{edu.year}</Badge>
                      </div>
                      <CardDescription className="text-lg font-medium text-primary">
                        {edu.school}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              A showcase of my recent work that demonstrates innovation, technical expertise, and creative problem-solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="backdrop-blur-glass border-border/50 overflow-hidden group hover:glow-neon transition-all duration-300">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-gradient transition-all">{project.title}</CardTitle>
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
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-primary to-accent">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
              Ready to bring your next project to life? I'm always excited to discuss new opportunities 
              and collaborate on innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-neon">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">alex.johnson@email.com</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-neon">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-neon">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group">
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
