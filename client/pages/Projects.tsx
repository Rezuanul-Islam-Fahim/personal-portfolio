import { ExternalLink, Github, Calendar, Tag, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { useState } from "react";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart productivity app that uses machine learning to prioritize tasks and predict completion times.",
    longDescription: "This project leverages machine learning algorithms to analyze user task patterns and automatically prioritize tasks based on urgency, importance, and historical completion times. The application features a modern React frontend with real-time updates and a Python backend using TensorFlow for predictive analytics.",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Docker", "AWS"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2024",
    status: "Live",
    category: "AI/ML",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    longDescription: "A comprehensive e-commerce platform built with Next.js and Node.js. Includes features like real-time inventory updates, Stripe payment integration, order management system, and a complete admin dashboard for managing products and customers.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB", "Redis", "Express", "Tailwind CSS"],
    image: "/placeholder.svg", 
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Full-Stack",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat app with video calling, file sharing, and end-to-end encryption.",
    longDescription: "A real-time communication platform featuring instant messaging, video calls, file sharing, and group channels. Implements WebRTC for peer-to-peer video calls and Socket.io for real-time messaging with end-to-end encryption.",
    tech: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL", "JWT"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Real-time",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with geolocation, forecasts, and historical data visualization.",
    longDescription: "A comprehensive weather application that provides current conditions, 7-day forecasts, and historical weather data with interactive charts. Features geolocation support, city search, and beautiful data visualizations built with Chart.js.",
    tech: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS", "Local Storage"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Frontend",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Task Automation Tool",
    description: "Python-based automation tool for repetitive tasks including file organization and email processing.",
    longDescription: "A powerful automation suite that helps users automate repetitive tasks. Features include automated file organization, email processing, data cleaning and analysis, and scheduled task execution with a clean web interface for configuration.",
    tech: ["Python", "Flask", "Celery", "SQLite", "HTML/CSS", "JavaScript"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2022",
    status: "Archived",
    category: "Backend",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS.",
    longDescription: "A modern portfolio website showcasing projects and skills. Built with React and Tailwind CSS, featuring smooth animations, responsive design, and optimal performance. Includes contact forms and project showcases.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Netlify"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2024",
    status: "Live",
    category: "Frontend",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const categories = ["All", "AI/ML", "Full-Stack", "Frontend", "Backend", "Real-time"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="py-24 sm:py-32 bg-grid bg-noise relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full opacity-25 animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my passion for{" "}
              <span className="text-primary font-semibold">innovation</span>,{" "}
              <span className="text-accent font-semibold">creativity</span>, and{" "}
              <span className="text-primary font-semibold">technical excellence</span>. 
              Each project represents a unique challenge and learning journey.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Filter className="h-4 w-4" />
              Filter by category:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-primary to-accent glow-neon" 
                      : "hover:glow-neon backdrop-blur-glass"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="backdrop-blur-glass border-border/50 overflow-hidden group hover:glow-neon transition-all duration-500">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">{project.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge 
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={project.status === "Live" ? "bg-gradient-to-r from-green-500 to-green-600" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {project.category}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-border/50 hover:border-primary/50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild className="flex-1 group/btn backdrop-blur-glass">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 group/btn">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-muted/30 backdrop-blur-glass border border-border/50 rounded-2xl p-12 glow-neon">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">Collaborate</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to take on new challenges and work on innovative projects. 
              Let's discuss how we can bring your vision to life with cutting-edge technology 
              and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-neon group">
                <a href="/contact" className="flex items-center gap-2">
                  Start a Project
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-glass border-border/50 hover:bg-muted/50 group">
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
