import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rezuanul Islam Fahim - Flutter & Full-Stack Developer",
    short_name: "Fahim Portfolio",
    description:
      "Professional Flutter & Full-Stack Developer with 7+ years experience. Specializing in mobile apps, React, Node.js, and Firebase.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
