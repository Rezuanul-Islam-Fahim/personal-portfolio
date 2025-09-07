import type { Metadata } from 'next';
import { Layout } from "@/components";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: 'Contact - Get in Touch with Flutter & Full-Stack Developer',
  description: 'Contact Rezuanul Islam Fahim for Flutter development, React projects, and full-stack development services. Available for freelance work and collaborations.',
  keywords: [
    'contact Flutter developer',
    'hire full-stack developer',
    'freelance developer contact',
    'React developer contact',
    'mobile app developer hire',
    'web development services',
    'contact Rezuanul Islam Fahim',
    'developer collaboration',
    'project consultation',
    'development services'
  ],
  openGraph: {
    title: 'Contact Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
    description: 'Get in touch for Flutter development, React projects, and full-stack development services. Available for freelance work and collaborations.',
    url: 'https://www.rezuanulislamfahim.me/contact',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
    description: 'Get in touch for Flutter development, React projects, and full-stack development services.',
    images: ['/twitter-contact.png'],
  },
  alternates: {
    canonical: 'https://www.rezuanulislamfahim.me/contact',
  },
};

export default function Contact() {
  return (
    <Layout>
      <ContactClient />
    </Layout>
  );
}
