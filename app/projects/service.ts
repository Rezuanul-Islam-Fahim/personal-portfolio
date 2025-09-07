import { Project } from "@/types";
import { projectRepository } from "./repository";

export class ProjectService {
  async getAllProjects(): Promise<Project[]> {
    return await projectRepository.getAll();
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await projectRepository.getFeatured();
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return await projectRepository.getByCategory(category);
  }

  async getProjectById(id: string): Promise<Project | null> {
    return await projectRepository.getById(id);
  }
}

export const projectService = new ProjectService();
