export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export const personStructuredData: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rezuanul Islam Fahim',
  url: 'https://rezuanulislamfahim.me',
  image: 'https://rezuanulislamfahim.me/profile-image.jpg',
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer with 6+ years of experience building high-performance web & mobile apps using Flutter, React, Node.js, and Firebase',
  email: 'contact@rezuanulislamfahim.me',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer',
    url: 'https://rezuanulislamfahim.me',
  },
  knowsAbout: [
    'Flutter Development',
    'React.js Development',
    'Node.js Development',
    'Mobile App Development',
    'Web Development',
    'TypeScript',
    'JavaScript',
    'Firebase',
    'Cross-platform Development',
  ],
  sameAs: [
    'https://github.com/Rezuanul-Islam-Fahim',
    'https://www.linkedin.com/in/rezuanul-islam-fahim/',
    'https://x.com/rezuanul_fahim',
    'https://www.upwork.com/freelancers/~01d36b93322b73e499',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University of Engineering & Technology',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
  },
};

export const websiteStructuredData: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rezuanul Islam Fahim Portfolio',
  url: 'https://rezuanulislamfahim.me',
  description:
    'Professional portfolio showcasing software engineering projects and services',
  author: {
    '@type': 'Person',
    name: 'Rezuanul Islam Fahim',
  },
  inLanguage: 'en-US',
};

export const portfolioStructuredData: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Software Engineer Portfolio',
  creator: {
    '@type': 'Person',
    name: 'Rezuanul Islam Fahim',
  },
  description:
    'Professional portfolio showcasing mobile and web development projects',
  url: 'https://rezuanulislamfahim.me',
  keywords:
    'Software Engineer, Flutter Developer, React Developer, Mobile Apps, Web Development',
};

export const organizationStructuredData: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rezuanul Islam Fahim - Software Engineer',
  url: 'https://rezuanulislamfahim.me',
  logo: 'https://rezuanulislamfahim.me/logo.png',
  description:
    'Professional software development services specializing in Flutter, React, and Node.js',
  founder: {
    '@type': 'Person',
    name: 'Rezuanul Islam Fahim',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-123-456-789',
    contactType: 'customer service',
    email: 'contact@rezuanulislamfahim.me',
  },
  sameAs: [
    'https://github.com/Rezuanul-Islam-Fahim',
    'https://www.linkedin.com/in/rezuanul-islam-fahim/',
    'https://x.com/rezuanul_fahim',
    'https://www.upwork.com/freelancers/~01d36b93322b73e499',
  ],
};

export const professionalServiceStructuredData: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Software Development Services',
  description:
    'Professional software development services including mobile apps, web applications, and backend systems',
  provider: {
    '@type': 'Person',
    name: 'Rezuanul Islam Fahim',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Mobile App Development',
    'Web Development',
    'Backend Development',
    'UI/UX Implementation',
  ],
  url: 'https://rezuanulislamfahim.me',
};
