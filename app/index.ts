// Central app exports - use sparingly, prefer direct imports
// Avoid using this file for imports to prevent circular dependencies
// Instead, use direct imports from specific modules

// Re-export main components
export { Layout, Header } from "./components/layout";
export { ProjectCard } from "./components/cards";
export { SkillProgress } from "./components/common";

// Re-export main types
export type {
  Project,
  ContactForm,
  Theme,
  ThemeProviderProps,
  ThemeProviderState,
} from "./types";

// Re-export main hooks
export { useTheme } from "./hooks/use-theme";
export { useIsMobile } from "./hooks/use-mobile";

// Note: For other imports, use direct paths like:
// import { projects } from "@/data";
// import { aboutService } from "./about/service";
// import { contactService } from "./contact/service";
// import { projectService } from "./projects/service";
