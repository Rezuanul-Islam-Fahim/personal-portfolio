# Rezuanul Islam Fahim - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, SEO optimization, and a professional design showcasing my skills and experience as a Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glass morphism effects and smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **SEO Optimized**: Complete SEO setup with meta tags, structured data, and optimal performance
- **Fast Performance**: Built with Next.js 13+ with static export for optimal loading speeds
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type Safe**: Full TypeScript implementation for better code quality

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Theme**: next-themes for dark mode
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel
- **SEO**: Built-in optimization with structured data

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO and theme setup
│   └── page.tsx            # Home page with all sections
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Navigation header with mobile menu
│   │   └── footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── hero.tsx        # Hero section with animated counters
│   │   ├── about.tsx       # About section with services
│   │   ├── skills.tsx      # Skills with animated progress bars
│   │   ├── projects.tsx    # Projects showcase with filtering
│   │   ├── education.tsx   # Education and experience timeline
│   │   ├── upwork.tsx      # Upwork profile and hiring CTA
│   │   └── contact.tsx     # Contact form and information
│   ├── providers/
│   │   └── theme-provider.tsx  # Theme context provider
│   └── ui/
│       └── animated-counter.tsx # Animated counter component
├── lib/
│   └── config.ts           # Centralized data and configuration
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) for main actions and highlights
- **Accent**: Purple (#8B5CF6) for gradients and emphasis
- **Success**: Green for status indicators
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter with multiple weights
- **Headings**: Bold with gradient text effects
- **Body**: Readable with proper line height

### Components
- **Glass Effect**: Backdrop blur with transparency
- **Hover States**: Smooth transitions and micro-interactions
- **Animations**: Entrance animations and floating elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates an optimized static export ready for deployment.

## 📝 Content Management

All content is centralized in `lib/config.ts` for easy updates:

- **Personal Information**: Name, title, bio, contact details
- **Skills**: Organized by categories with progress levels
- **Projects**: Portfolio items with technologies and links
- **Education**: Academic background and certifications
- **Work Experience**: Professional history and achievements
- **Social Links**: GitHub, LinkedIn, Twitter, Upwork profiles

## 🔧 Customization

### Updating Content

Edit `lib/config.ts` to update:
- Personal information and bio
- Skills and proficiency levels
- Project portfolio
- Work experience and education
- Contact information
- Social media links

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Update Tailwind classes in component files
- **Animations**: Customize animations in the CSS section of components

### SEO Configuration

Update SEO settings in `lib/config.ts`:
- Site metadata
- Open Graph images
- Keywords and descriptions
- Structured data

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure custom domain (rezuanulislamfahim.me)
4. Deploy with automatic SSL and CDN

### Manual Deployment

```bash
npm run build
```

Upload the `out/` directory to your hosting provider.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Perfect SEO score with structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🔒 Security

- No sensitive data exposed in client-side code
- Environment variables for external integrations
- Secure contact form (backend implementation pending)
- CSP headers ready for production

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Android 10+)

## 🤝 Contributing

This is a personal portfolio website. However, suggestions and feedback are welcome:

1. Open an issue for bugs or suggestions
2. Fork the repository for major changes
3. Submit a pull request with clear description

## 📄 License

This project is licensed under the MIT License. Feel free to use it as inspiration for your own portfolio.

## 📞 Contact

**Rezuanul Islam Fahim**
- Website: [rezuanulislamfahim.me](https://rezuanulislamfahim.me)
- Email: contact@rezuanulislamfahim.me
- GitHub: [@Rezuanul-Islam-Fahim](https://github.com/Rezuanul-Islam-Fahim)
- LinkedIn: [rezuanul-islam-fahim](https://www.linkedin.com/in/rezuanul-islam-fahim/)
- Upwork: [Hire Me](https://www.upwork.com/freelancers/~01d36b93322b73e499)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**