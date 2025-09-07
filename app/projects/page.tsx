import type { Metadata } from 'next';
import { Layout } from "@/components";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: 'Projects - Flutter & Full-Stack Development Portfolio',
  description: 'Explore my portfolio of Flutter, React, and full-stack development projects. View live demos and source code for mobile apps, web applications, and AI-powered solutions.',
  keywords: [
    'Flutter projects',
    'React projects',
    'full-stack projects',
    'mobile app portfolio',
    'web development portfolio',
    'AI projects',
    'JavaScript projects',
    'TypeScript projects',
    'Node.js projects',
    'project showcase',
    'developer portfolio',
    'Rezuanul Islam Fahim projects'
  ],
  openGraph: {
    title: 'Projects - Rezuanul Islam Fahim Portfolio',
    description: 'Explore my portfolio of Flutter, React, and full-stack development projects. View live demos and source code.',
    url: 'https://www.rezuanulislamfahim.me/projects',
    images: [
      {
        url: '/og-projects.png',
        width: 1200,
        height: 630,
        alt: 'Projects Portfolio - Rezuanul Islam Fahim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Rezuanul Islam Fahim Portfolio',
    description: 'Explore my portfolio of Flutter, React, and full-stack development projects. View live demos and source code.',
    images: ['/twitter-projects.png'],
  },
  alternates: {
    canonical: 'https://www.rezuanulislamfahim.me/projects',
  },
};

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
  return (
    <Layout>
      <ProjectsClient projects={projects} categories={categories} />
    </Layout>
  );
}
