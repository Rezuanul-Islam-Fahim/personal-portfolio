import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                I’m a Software Engineer with 7+ years of experience building high-performance mobile and web applications using
              Flutter, React, Node.js, and Firebase. I focus on clean architecture, modular code, and shipping production-ready
              applications with reliable backends and delightful user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h3 className="text-2xl font-semibold mb-3">What I do</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Cross-platform mobile apps (Flutter) for Android & iOS</li>
                  <li>Web applications with React / Next.js and Tailwind CSS</li>
                  <li>Backend APIs using Node.js, Express, and Firebase Cloud Functions</li>
                  <li>Realtime systems: chat, notifications, live location tracking</li>
                  <li>Auth flows (Email/OTP, role-based), payments (Stripe, PayPal)</li>
                  <li>Integrations: Google Maps, Twilio, third-party APIs</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-3">Approach</h3>
                <p className="text-muted-foreground">
                  I follow clean architecture (MVC/MVVM), write modular and reusable code, and prioritize maintainability. I
                  ensure apps are testable and ship-ready, and set up CI/CD pipelines using GitHub Actions, Vercel, or Netlify.
                </p>
              </section>
            </div>

            <aside className="backdrop-blur-glass border border-border/50 rounded-2xl p-6 glow-neon">
              <h4 className="text-lg font-semibold mb-3">Tech snapshot</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Flutter", "Dart", "React", "Next.js", "Node.js", "Express", "Firebase", "MongoDB", "PostgreSQL",
                  "Stripe", "Twilio", "Google Maps", "TypeScript", "Tailwind CSS",
                ].map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </aside>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Experience highlights</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Delivered production-ready Flutter apps, deployed to Play Store & App Store.</li>
              <li>Built full-stack web apps and REST APIs with Node.js and Firebase.</li>
              <li>Integrated payment gateways, maps, and real-time services for multiple clients.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
