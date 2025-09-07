export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  date: string;
  status: string;
  category: string;
  gradient: string;
}

export interface ContactMethod {
  icon: any;
  title: string;
  description: string;
  value: string;
  href?: string;
  primary?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: any;
  color: string;
  bgColor: string;
}

export interface SkillLevel {
  name: string;
  level: number;
  color: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = "dark" | "light" | "system";

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
