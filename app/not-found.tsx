import type { Metadata } from 'next';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found - Rezuanul Islam Fahim',
  description: 'The page you are looking for could not be found. Return to the homepage to explore my Flutter and full-stack development portfolio.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-grid bg-noise relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-40 right-20 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-gradient opacity-50 leading-none">
              404
            </h1>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Page <span className="text-gradient">Not Found</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oops! The page you&apos;re looking for seems to have wandered off into the digital void. 
              Don&apos;t worry, even the best developers sometimes take wrong turns in the code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg transition-all"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
            
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-foreground border border-border/50 hover:bg-muted/50 rounded-lg transition-all"
            >
              <Search className="h-5 w-5" />
              Explore Projects
            </Link>
          </div>

          <div className="mt-16 p-8 bg-muted/30 backdrop-blur-glass border border-border/50 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">
              While you&apos;re here, check out:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <Link
                href="/about"
                className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors group"
              >
                <div className="font-medium group-hover:text-gradient transition-colors">
                  About Me
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  Learn about my journey
                </div>
              </Link>
              
              <Link
                href="/projects"
                className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors group"
              >
                <div className="font-medium group-hover:text-gradient transition-colors">
                  Projects
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  View my portfolio
                </div>
              </Link>
              
              <Link
                href="/contact"
                className="p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors group"
              >
                <div className="font-medium group-hover:text-gradient transition-colors">
                  Contact
                </div>
                <div className="text-muted-foreground text-xs mt-1">
                  Let&apos;s connect
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
