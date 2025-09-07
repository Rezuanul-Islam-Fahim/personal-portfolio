import Head from 'next/head';
import { siteConfig } from '@/lib/config';
import { seoConfig } from '@/lib/seo-config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

export function SEO({
  title,
  description = seoConfig.defaultDescription,
  keywords = seoConfig.keywords.home,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = siteConfig.author.name,
  noindex = false,
  nofollow = false,
  canonical,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${siteConfig.author.name}` : seoConfig.defaultTitle;
  const pageUrl = url.startsWith('http') ? url : `${siteConfig.url}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;
  const canonicalUrl = canonical || pageUrl;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1',
  ].join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.locale} />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={seoConfig.social.twitter} />
      <meta name="twitter:site" content={seoConfig.social.twitter} />

      {/* Additional Meta Tags */}
      <meta name="application-name" content={seoConfig.siteName} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoConfig.siteName} />
    </Head>
  );
}

// Pre-configured SEO components for specific pages
export function HomeSEO() {
  return (
    <SEO
      title=""
      description={seoConfig.defaultDescription}
      keywords={seoConfig.keywords.home}
      image={seoConfig.images.default}
    />
  );
}

export function AboutSEO() {
  return (
    <SEO
      title="About"
      description="Learn about Rezuanul Islam Fahim, a passionate Software Engineer with expertise in Flutter, React, and Node.js. Dedicated to building scalable, user-centric solutions."
      keywords={seoConfig.keywords.about}
      image={seoConfig.images.about}
    />
  );
}

export function ProjectsSEO() {
  return (
    <SEO
      title="Projects"
      description="Explore my portfolio of 100+ successful projects including Flutter mobile apps, React web applications, and full-stack solutions for clients worldwide."
      keywords={seoConfig.keywords.projects}
      image={seoConfig.images.projects}
    />
  );
}

export function ServicesSEO() {
  return (
    <SEO
      title="Services"
      description="Professional software development services: Flutter mobile apps, React web development, Node.js backends, and UI/UX implementation. Get a free quote today."
      keywords={seoConfig.keywords.services}
      image={seoConfig.images.services}
    />
  );
}

export function ContactSEO() {
  return (
    <SEO
      title="Contact"
      description="Ready to start your project? Contact Rezuanul Islam Fahim for professional mobile app development, web development, and software engineering services."
      keywords={seoConfig.keywords.contact}
      image={seoConfig.images.contact}
    />
  );
}
