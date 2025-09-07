import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Upwork from '@/components/sections/upwork';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Upwork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}