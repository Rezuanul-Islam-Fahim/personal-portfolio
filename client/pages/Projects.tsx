import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart productivity app that uses machine learning to prioritize tasks and predict completion times. Built with React and TensorFlow, it learns from user behavior to optimize workflow efficiency.",
    longDescription: "This project leverages machine learning algorithms to analyze user task patterns and automatically prioritize tasks based on urgency, importance, and historical completion times. The application features a modern React frontend with real-time updates and a Python backend using TensorFlow for predictive analytics.",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Docker", "AWS"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2024",
    status: "Live",
    category: "AI/ML"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing. Features include user authentication, shopping cart, order tracking, and admin dashboard.",
    longDescription: "A comprehensive e-commerce platform built with Next.js and Node.js. Includes features like real-time inventory updates, Stripe payment integration, order management system, and a complete admin dashboard for managing products and customers.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB", "Redis", "Express", "Tailwind CSS"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Full-Stack"
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat app with video calling, file sharing, and end-to-end encryption. Built for teams and organizations requiring secure communication.",
    longDescription: "A real-time communication platform featuring instant messaging, video calls, file sharing, and group channels. Implements WebRTC for peer-to-peer video calls and Socket.io for real-time messaging with end-to-end encryption.",
    tech: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL", "JWT"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Real-time"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with geolocation, forecasts, and historical data visualization. Responsive design with dark/light mode support.",
    longDescription: "A comprehensive weather application that provides current conditions, 7-day forecasts, and historical weather data with interactive charts. Features geolocation support, city search, and beautiful data visualizations built with Chart.js.",
    tech: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS", "Local Storage"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Frontend"
  },
  {
    title: "Task Automation Tool",
    description: "Python-based automation tool for repetitive tasks including file organization, email processing, and data analysis with a web-based interface.",
    longDescription: "A powerful automation suite that helps users automate repetitive tasks. Features include automated file organization, email processing, data cleaning and analysis, and scheduled task execution with a clean web interface for configuration.",
    tech: ["Python", "Flask", "Celery", "SQLite", "HTML/CSS", "JavaScript"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2022",
    status: "Archived",
    category: "Backend"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
    longDescription: "A modern portfolio website showcasing projects and skills. Built with React and Tailwind CSS, featuring smooth animations, responsive design, and optimal performance. Includes contact forms and project showcases.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Netlify"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2024",
    status: "Live",
    category: "Frontend"
  }
];

const categories = ["All", "AI/ML", "Full-Stack", "Frontend", "Backend", "Real-time"];

export default function Projects() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              My Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A collection of projects that showcase my skills in web development,
              machine learning, and software engineering. Each project represents
              a unique challenge and learning experience.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="mt-16 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-accent"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
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
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Let's discuss how we can bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
