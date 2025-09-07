import { Project } from "@/types";

// Static project repository - in a real app, this would connect to a database/API
class ProjectRepository {
  private projects: Project[] = [];

  async getAll(): Promise<Project[]> {
    // In a real implementation, this would fetch from an API
    return this.projects;
  }

  async getFeatured(): Promise<Project[]> {
    return this.projects.filter((project) => project.status === "featured");
  }

  async getByCategory(category: string): Promise<Project[]> {
    return this.projects.filter((project) => project.category === category);
  }

  async getById(id: string): Promise<Project | null> {
    return this.projects.find((project) => project.title === id) || null;
  }
}

export const projectRepository = new ProjectRepository();
