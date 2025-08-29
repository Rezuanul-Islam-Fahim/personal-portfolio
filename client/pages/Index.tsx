import { ArrowRight, Download, ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "JavaScript", "Next.js", 
  "TailwindCSS", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    year: "2022-2024",
    description: "Specialized in Machine Learning and Software Engineering. GPA: 3.9/4.0",
    achievements: ["Dean's List", "Research Assistant", "Published 2 papers in AI conferences"]
  },
  {
    degree: "Bachelor of Science in Computer Engineering", 
    school: "University of California, Berkeley",
    year: "2018-2022",
    description: "Focused on full-stack development and algorithms. GPA: 3.8/4.0",
    achievements: ["Summa Cum Laude", "President of Computer Science Club", "Hackathon Winner x3"]
  }
];

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart productivity app that uses machine learning to prioritize tasks and predict completion times.",
    tech: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB", "Redis"],
    image: "/placeholder.svg", 
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat app with video calling, file sharing, and end-to-end encryption.",
    tech: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Full-stack developer and AI enthusiast passionate about creating innovative solutions 
              that make a difference. I specialize in modern web technologies and machine learning.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm a passionate software engineer with expertise in full-stack development and artificial intelligence. 
              With a strong foundation in computer science and hands-on experience building scalable applications, 
              I enjoy solving complex problems and creating user-centric solutions.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">5+</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Years Experience</h3>
              <p className="mt-2 text-muted-foreground">Building web applications and solving complex problems</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Projects Completed</h3>
              <p className="mt-2 text-muted-foreground">From startups to enterprise applications</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">15+</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Technologies</h3>
              <p className="mt-2 text-muted-foreground">Modern tools and frameworks in my arsenal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Technologies</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-base">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My educational journey that shaped my technical foundation and problem-solving approach.
            </p>
          </div>
          
          <div className="mt-16 space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="mx-auto max-w-4xl">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium">{edu.school}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">{edu.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A selection of my recent work that showcases my skills and passion for innovation.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
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
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
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
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Work Together</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <Mail className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Email</h3>
              <p className="mt-2 text-muted-foreground">alex.johnson@email.com</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Location</h3>
              <p className="mt-2 text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
