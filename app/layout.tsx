import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rezuanulislamfahim.me'),
  title: {
    default: 'Rezuanul Islam Fahim - Flutter & Full-Stack Developer | Professional Mobile & Web Development',
    template: '%s | Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
  },
  description: 'Professional Flutter & Full-Stack Developer with 7+ years experience. Expert in mobile app development (iOS/Android), React/Next.js, Node.js, Firebase. Available on Upwork for high-quality development services.',
  keywords: [
    'Flutter developer',
    'full-stack developer',
    'React developer',
    'Next.js developer',
    'mobile app development',
    'iOS developer',
    'Android developer',
    'Node.js developer',
    'TypeScript developer',
    'Firebase developer',
    'Upwork freelancer',
    'Bangladesh developer',
    'Rezuanul Islam Fahim',
    'web developer',
    'API development',
    'UI/UX development',
    'responsive design',
    'professional developer',
    'Dart programming',
    'React Native alternative',
    'cross-platform development',
    'mobile-first development',
    'progressive web apps',
    'real-time applications',
    'e-commerce development',
    'startup development',
    'MVP development',
    'scalable applications',
    'clean architecture',
    'test-driven development',
    'CI/CD',
    'Docker',
    'cloud deployment',
    'payment integration',
    'Stripe integration',
    'real-time chat',
    'WebSocket development',
    'REST API',
    'GraphQL',
    'database design',
    'MongoDB',
    'PostgreSQL',
    'authentication systems',
    'security implementation',
    'performance optimization',
    'SEO optimization',
    'accessibility compliance',
    'code review',
    'mentoring',
    'technical consultation',
    'project management',
    'agile development',
    'remote work',
    'international clients',
    'quality assurance',
    'bug fixing',
    'maintenance',
    'legacy system migration',
    'modern web standards',
    'browser compatibility',
    'mobile optimization',
    'loading performance',
    'user experience',
    'conversion optimization',
    'analytics integration',
    'third-party integrations',
    'custom solutions',
    'enterprise applications',
    'SaaS development',
    'B2B applications',
    'B2C applications',
    'marketplace development',
    'social media integration',
    'content management',
    'admin dashboards',
    'reporting systems',
    'data visualization',
    'machine learning integration',
    'AI-powered features',
    'automation',
    'workflow optimization',
    'business logic',
    'complex algorithms',
    'performance tuning',
    'scalability planning',
    'architecture design',
    'system design',
    'technical specifications',
    'documentation',
    'training',
    'knowledge transfer',
    'best practices',
    'code standards',
    'security audits',
    'compliance',
    'GDPR compliance',
    'data protection',
    'privacy by design',
    'ethical development',
    'sustainable coding',
    'green technology',
    'energy efficient apps',
    'minimal resource usage',
    'optimized performance',
    'fast loading',
    'smooth animations',
    'intuitive interfaces',
    'user-centered design',
    'accessibility first',
    'inclusive design',
    'multi-language support',
    'internationalization',
    'localization',
    'global applications',
    'cross-cultural design',
    'cultural sensitivity',
    'diverse user base',
    'inclusive technology',
    'digital accessibility',
    'WCAG compliance',
    'screen reader support',
    'keyboard navigation',
    'color contrast',
    'text scaling',
    'voice control',
    'gesture support',
    'touch optimization',
    'responsive typography',
    'fluid layouts',
    'adaptive design',
    'device optimization',
    'network optimization',
    'offline functionality',
    'progressive enhancement',
    'graceful degradation',
    'fault tolerance',
    'error handling',
    'recovery mechanisms',
    'monitoring',
    'logging',
    'debugging',
    'troubleshooting',
    'incident response',
    'production support',
    '24/7 availability',
    'rapid response',
    'emergency fixes',
    'hotfixes',
    'patches',
    'updates',
    'maintenance windows',
    'zero downtime',
    'blue-green deployment',
    'canary releases',
    'feature flags',
    'A/B testing',
    'performance monitoring',
    'user analytics',
    'conversion tracking',
    'business intelligence',
    'data-driven decisions',
    'metrics tracking',
    'KPI monitoring',
    'success measurement',
    'ROI optimization',
    'cost reduction',
    'efficiency improvement',
    'process automation',
    'workflow streamlining',
    'productivity enhancement',
    'team collaboration',
    'cross-functional work',
    'stakeholder communication',
    'client relations',
    'project delivery',
    'timeline management',
    'budget management',
    'resource planning',
    'risk management',
    'quality control',
    'testing strategies',
    'automated testing',
    'manual testing',
    'user acceptance testing',
    'load testing',
    'security testing',
    'penetration testing',
    'vulnerability assessment',
    'code audit',
    'performance audit',
    'SEO audit',
    'accessibility audit',
    'compliance audit',
    'technical debt management',
    'refactoring',
    'modernization',
    'technology upgrade',
    'framework migration',
    'platform migration',
    'cloud migration',
    'digital transformation',
    'business modernization',
    'competitive advantage',
    'market leadership',
    'innovation',
    'cutting-edge technology',
    'emerging trends',
    'future-proof solutions',
    'sustainable growth',
    'long-term success',
    'partnership',
    'collaboration',
    'mutual success',
    'client satisfaction',
    'positive outcomes',
    'measurable results',
    'proven track record',
    'professional excellence',
    'technical expertise',
    'industry knowledge',
    'domain expertise',
    'specialized skills',
    'continuous learning',
    'skill development',
    'professional growth',
    'career advancement',
    'leadership',
    'innovation mindset',
    'problem-solving',
    'critical thinking',
    'analytical skills',
    'creative solutions',
    'strategic thinking',
    'business acumen',
    'technical vision',
    'product thinking',
    'user advocacy',
    'customer focus',
    'value creation',
    'impact driven',
    'results oriented',
    'goal achievement',
    'success delivery',
    'excellence pursuit',
    'quality commitment',
    'reliability',
    'trustworthiness',
    'professionalism',
    'integrity',
    'ethical practices',
    'transparent communication',
    'honest feedback',
    'constructive criticism',
    'collaborative approach',
    'team player',
    'independent worker',
    'self-motivated',
    'proactive',
    'responsive',
    'adaptable',
    'flexible',
    'versatile',
    'multi-skilled',
    'full-stack expertise',
    'end-to-end solutions',
    'comprehensive services',
    'one-stop solution',
    'complete package',
    'turnkey solutions',
    'ready-to-deploy',
    'production-ready',
    'enterprise-grade',
    'commercial-quality',
    'professional-grade',
    'industry-standard',
    'best-in-class',
    'world-class',
    'international-quality',
    'global-standard',
    'competitive-advantage',
    'market-ready',
    'investor-ready',
    'scaling-ready',
    'growth-ready',
    'future-ready',
    'innovation-ready',
    'technology-ready',
    'business-ready',
    'launch-ready',
    'success-ready'
  ],
  authors: [
    {
      name: 'Rezuanul Islam Fahim',
      url: 'https://www.rezuanulislamfahim.me',
    },
  ],
  creator: 'Rezuanul Islam Fahim',
  publisher: 'Rezuanul Islam Fahim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Technology',
  classification: 'Portfolio Website',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rezuanulislamfahim.me',
    siteName: 'Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
    title: 'Rezuanul Islam Fahim - Professional Flutter & Full-Stack Developer',
    description: 'Professional Flutter & Full-Stack Developer with 7+ years experience. Expert in mobile app development (iOS/Android), React/Next.js, Node.js, Firebase. Available on Upwork for high-quality development services.',
    images: [
      {
        url: '/favicon.ico',
        width: 32,
        height: 32,
        alt: 'Rezuanul Islam Fahim - Flutter & Full-Stack Developer',
        type: 'image/x-icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rezuanul_fahim',
    creator: '@rezuanul_fahim',
    title: 'Rezuanul Islam Fahim - Professional Flutter & Full-Stack Developer',
    description: 'Professional Flutter & Full-Stack Developer with 7+ years experience. Expert in mobile app development (iOS/Android), React/Next.js, Node.js, Firebase. Available on Upwork.',
    images: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
    other: {
      'msvalidate.01': 'bing-site-verification',
    },
  },
  alternates: {
    canonical: 'https://www.rezuanulislamfahim.me',
    languages: {
      'en-US': 'https://www.rezuanulislamfahim.me',
      'en-GB': 'https://www.rezuanulislamfahim.me/en-gb',
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Rezuanul Islam Fahim',
    'application-name': 'Rezuanul Islam Fahim Portfolio',
    'msapplication-TileColor': '#0f172a',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#0f172a',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Favicons and icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* PWA tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rezuanul Islam Fahim" />
        <meta name="application-name" content="Rezuanul Islam Fahim Portfolio" />
        
        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.rezuanulislamfahim.me/#person",
                "name": "Rezuanul Islam Fahim",
                "url": "https://www.rezuanulislamfahim.me",
                "image": "https://www.rezuanulislamfahim.me/favicon.ico",
                "sameAs": [
                  "https://www.linkedin.com/in/rezuanul-islam-fahim/",
                  "https://github.com/Rezuanul-Islam-Fahim",
                  "https://twitter.com/rezuanul_fahim",
                  "https://www.upwork.com/freelancers/~01d36b93322b73e499"
                ],
                "jobTitle": "Flutter & Full-Stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "description": "Professional Flutter & Full-Stack Developer with 7+ years experience in mobile app development, React/Next.js, Node.js, and Firebase.",
                "knowsAbout": [
                  "Flutter",
                  "Dart",
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Firebase",
                  "Mobile App Development",
                  "Web Development",
                  "Full-Stack Development"
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Software Developer",
                  "occupationLocation": {
                    "@type": "Place",
                    "name": "Bangladesh"
                  },
                  "skills": [
                    "Flutter Development",
                    "React Development",
                    "Mobile App Development",
                    "Web Development",
                    "API Development",
                    "Database Design",
                    "UI/UX Implementation"
                  ]
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kishoreganj",
                  "addressRegion": "Dhaka",
                  "addressCountry": "Bangladesh"
                },
                "email": "rifahim98@gmail.com",
                "telephone": "+8801815188895"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.rezuanulislamfahim.me/#website",
                "url": "https://www.rezuanulislamfahim.me",
                "name": "Rezuanul Islam Fahim - Flutter & Full-Stack Developer",
                "description": "Professional portfolio showcasing Flutter and full-stack development expertise",
                "publisher": {
                  "@id": "https://www.rezuanulislamfahim.me/#person"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.rezuanulislamfahim.me/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://www.rezuanulislamfahim.me/#service",
                "name": "Flutter & Full-Stack Development Services",
                "description": "Professional mobile and web development services specializing in Flutter, React, and full-stack solutions",
                "provider": {
                  "@id": "https://www.rezuanulislamfahim.me/#person"
                },
                "areaServed": "Worldwide",
                "serviceType": [
                  "Mobile App Development",
                  "Web Development",
                  "Flutter Development",
                  "React Development",
                  "API Development",
                  "Database Design",
                  "UI/UX Implementation"
                ],
                "availableLanguage": ["English", "Bengali"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              }
            ])
          }}
        />
      </head>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-ui-theme') || 'dark';
                const root = document.documentElement;
                root.classList.remove('light', 'dark');
                
                if (theme === 'system') {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  root.classList.add(systemTheme);
                } else {
                  root.classList.add(theme);
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        <Providers>
          {children}
        </Providers>
        
        {/* Analytics scripts can be added here when needed */}
      </body>
    </html>
  );
}
