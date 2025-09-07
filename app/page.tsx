import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Upwork from '@/components/sections/upwork';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import { pageMetadata } from '@/lib/seo-config';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: pageMetadata.home.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main role="main" id="main-content">
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