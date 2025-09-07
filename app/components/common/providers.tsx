"use client"

import { ReactNode } from "react";
import { ThemeProvider } from "@/hooks/use-theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      {children}
    </ThemeProvider>
  );
}
