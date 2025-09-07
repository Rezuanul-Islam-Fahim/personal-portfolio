export const seoConfig = {
  defaultTitle:
    'Rezuanul Islam Fahim - Software Engineer | Flutter & React Developer',
  titleTemplate: '%s | Rezuanul Islam Fahim',
  defaultDescription:
    'Software Engineer with 6+ years of experience building high-performance web & mobile apps using Flutter, React, Node.js, and Firebase. Available for freelance projects worldwide.',
  siteUrl: 'https://rezuanulislamfahim.me',
  siteName: 'Rezuanul Islam Fahim Portfolio',
  locale: 'en_US',
  type: 'website',

  // Core SEO keywords for different pages
  keywords: {
    home: [
      'Software Engineer',
      'Flutter Developer',
      'React Developer',
      'Node.js Developer',
      'Full Stack Developer',
      'Mobile App Development',
      'Web Development',
      'Cross-platform Development',
      'Firebase Developer',
      'TypeScript Developer',
      'JavaScript Developer',
      'Freelance Developer',
      'Remote Developer',
      'Bangladesh Developer',
      'Upwork Developer',
    ],
    about: [
      'Software Engineer Bangladesh',
      'Mobile App Developer Experience',
      'React Developer Portfolio',
      'Flutter Expert',
      'Full Stack Developer Skills',
      'Software Engineering Career',
      'Mobile Development Expert',
      'Web Development Professional',
    ],
    projects: [
      'Flutter App Projects',
      'React Web Applications',
      'Mobile App Portfolio',
      'Software Development Projects',
      'Cross-platform Apps',
      'Firebase Projects',
      'E-commerce Apps',
      'Real-time Applications',
    ],
    services: [
      'Mobile App Development Services',
      'Flutter Development Services',
      'React Development Services',
      'Web Development Services',
      'Cross-platform App Development',
      'UI/UX Implementation',
      'Backend Development Services',
      'Freelance Development Services',
    ],
    contact: [
      'Hire Flutter Developer',
      'Hire React Developer',
      'Software Engineer for Hire',
      'Freelance Mobile Developer',
      'Contact Software Engineer',
      'Mobile App Development Quote',
      'Web Development Services',
    ],
  },

  // Social media handles
  social: {
    twitter: '@rezuanul_fahim',
    github: 'Rezuanul-Islam-Fahim',
    linkedin: 'rezuanul-islam-fahim',
    upwork: '~01d36b93322b73e499',
  },

  // Open Graph images for different pages
  images: {
    default: '/og-image.jpg',
    about: '/og-about.jpg',
    projects: '/og-projects.jpg',
    services: '/og-services.jpg',
    contact: '/og-contact.jpg',
  },

  // Business information
  business: {
    name: 'Rezuanul Islam Fahim',
    type: 'Professional Services',
    address: {
      streetAddress: '',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka Division',
      postalCode: '',
      addressCountry: 'Bangladesh',
    },
    phone: '+880 123 456 789',
    email: 'contact@rezuanulislamfahim.me',
    url: 'https://rezuanulislamfahim.me',
  },

  // FAQ for structured data
  faq: [
    {
      question: 'What programming languages do you specialize in?',
      answer:
        'I specialize in Dart (Flutter), JavaScript/TypeScript (React, Node.js), and have extensive experience with Firebase, MongoDB, and various web technologies.',
    },
    {
      question: 'Do you develop both mobile and web applications?',
      answer:
        'Yes, I develop cross-platform mobile apps using Flutter and modern web applications using React.js/Next.js with Node.js backends.',
    },
    {
      question: 'Can you help with existing app maintenance?',
      answer:
        'Absolutely! I provide ongoing maintenance, bug fixes, feature additions, and performance optimization for existing applications.',
    },
    {
      question: 'What is your experience with Flutter development?',
      answer:
        'I have 6+ years of experience with Flutter development, having built 50+ mobile applications with 4.8+ average ratings on app stores.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes, I work with clients worldwide and am available in multiple time zones for effective communication and project delivery.',
    },
  ],
};

// Page-specific SEO metadata
export const pageMetadata = {
  home: {
    title:
      'Rezuanul Islam Fahim - Software Engineer | Flutter & React Developer',
    description:
      'Software Engineer with 6+ years of experience. Specializing in Flutter mobile apps, React web development, and Node.js backends. Available for freelance projects worldwide.',
    keywords: seoConfig.keywords.home,
  },
  about: {
    title: 'About - Software Engineer with 6+ Years Experience',
    description:
      'Learn about Rezuanul Islam Fahim, a passionate Software Engineer with expertise in Flutter, React, and Node.js. Dedicated to building scalable, user-centric solutions.',
    keywords: seoConfig.keywords.about,
  },
  projects: {
    title: 'Projects - Mobile & Web Development Portfolio',
    description:
      'Explore my portfolio of 100+ successful projects including Flutter mobile apps, React web applications, and full-stack solutions for clients worldwide.',
    keywords: seoConfig.keywords.projects,
  },
  services: {
    title: 'Services - Mobile App & Web Development',
    description:
      'Professional software development services: Flutter mobile apps, React web development, Node.js backends, and UI/UX implementation. Get a free quote today.',
    keywords: seoConfig.keywords.services,
  },
  contact: {
    title: 'Contact - Hire a Software Engineer',
    description:
      'Ready to start your project? Contact Rezuanul Islam Fahim for professional mobile app development, web development, and software engineering services.',
    keywords: seoConfig.keywords.contact,
  },
};
