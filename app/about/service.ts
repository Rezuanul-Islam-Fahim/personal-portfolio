export class AboutService {
  getPersonalInfo() {
    return {
      name: "Rezuanul Islam Fahim",
      title: "Flutter & Full-Stack Developer",
      experience: "7+ years",
      location: "Kishoreganj, Dhaka, Bangladesh",
      email: "rifahim98@gmail.com",
      phone: "+8801815188895",
    };
  }

  getSkills() {
    return [
      { category: "Mobile", skills: ["Flutter", "Dart", "iOS", "Android"] },
      {
        category: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "Firebase", "MongoDB"],
      },
      {
        category: "Tools",
        skills: ["Git", "GitHub Actions", "Vercel", "Docker"],
      },
    ];
  }

  getExperience() {
    return [
      {
        title: "Senior Flutter Developer",
        company: "Freelance",
        period: "2020 - Present",
        description:
          "Building cross-platform mobile applications for various clients",
        achievements: [
          "Delivered 20+ production apps",
          "5-star rating on Upwork",
          "Expert in Firebase integration",
        ],
      },
    ];
  }
}

export const aboutService = new AboutService();
