import { Project, SkillLevel, Education, Stat } from "@/types";
import { Code, Zap, Rocket } from "lucide-react";

export const skillLevels: SkillLevel[] = [
  { name: "Flutter", level: 96, color: "from-cyan-400 to-blue-600" },
  { name: "Dart", level: 94, color: "from-blue-400 to-cyan-600" },
  { name: "React.js", level: 92, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", level: 92, color: "from-indigo-400 to-indigo-600" },
  { name: "Express.js", level: 88, color: "from-gray-500 to-gray-700" },
  { name: "Firebase", level: 90, color: "from-orange-400 to-red-500" },
  { name: "MongoDB", level: 86, color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", level: 82, color: "from-blue-500 to-indigo-600" },
  { name: "Tailwind CSS", level: 90, color: "from-sky-400 to-indigo-500" },
  { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
  { name: "CI/CD", level: 80, color: "from-green-400 to-emerald-600" },
  { name: "Git", level: 95, color: "from-red-400 to-red-600" },
  { name: "REST APIs", level: 93, color: "from-indigo-400 to-purple-500" },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Daffodil International University",
    year: "2017-2021",
    description:
      "Focused on software engineering, algorithms, and mobile app development. Strong foundation in computer science fundamentals.",
    achievements: [
      "Graduated with Honors",
      "Mobile App Development Specialist",
      "Final Project: Flutter E-commerce App",
    ],
    icon: "🎓",
  },
  {
    degree: "Continuing Professional Development",
    school: "Online Platforms & Certifications",
    year: "2021-Present",
    description:
      "Continuously learning new technologies and frameworks through online courses, certifications, and hands-on projects.",
    achievements: [
      "Google Flutter Certified",
      "Meta React Developer Professional Certificate",
      "AWS Cloud Practitioner",
    ],
    icon: "📚",
  },
];

export const projects: Project[] = [
  {
    title: "AI-Powered Task Manager",
    description:
      "Smart productivity app using ML to optimize workflows and predict completion times.",
    longDescription:
      "This project leverages machine learning algorithms to analyze user task patterns and automatically prioritize tasks based on urgency, importance, and historical completion times. The application features a modern React frontend with real-time updates and a Python backend using TensorFlow for predictive analytics.",
    tech: ["React", "TypeScript", "Python", "TensorFlow"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2024",
    status: "Live",
    category: "AI/ML",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack solution with real-time inventory and payment processing.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js. Includes features like real-time inventory updates, Stripe payment integration, order management system, and a complete admin dashboard for managing products and customers.",
    tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Full-Stack",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Real-time Chat App",
    description: "Scalable chat with video calling and end-to-end encryption.",
    longDescription:
      "A real-time communication platform featuring instant messaging, video calls, file sharing, and group channels. Implements WebRTC for peer-to-peer video calls and Socket.io for real-time messaging with end-to-end encryption.",
    tech: ["React", "Socket.io", "WebRTC", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://demo.com",
    date: "2023",
    status: "Live",
    category: "Real-time",
    gradient: "from-green-500 to-teal-500",
  },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: "7+", icon: Code },
  { label: "Projects Completed", value: "40+", icon: Rocket },
  { label: "Technologies", value: "20+", icon: Zap },
];
