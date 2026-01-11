# Portfolio Website - Bhanu Prakash R

A modern, responsive portfolio website built with Next.js, showcasing professional experience, skills, and projects with smooth animations and an elegant dark theme design.

## 🚀 Live Demo

- **GitHub Pages**: [https://bhanuprakash056.github.io/portfolio-website-bhanu/](https://bhanuprakash056.github.io/portfolio-website-bhanu/)

## ✨ Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Performance Optimized**: Static site generation for lightning-fast load times
- **Interactive Components**:
  - Dynamic typing effect for role titles
  - Animated loading screen
  - Floating particle effects
  - Smooth scroll navigation
  - Hover effects and micro-interactions
- **Sections**:
  - Hero with animated introduction
  - About with certifications
  - Professional experience timeline
  - Skills categorization
  - Contact form
  - Footer with social links

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: GitHub Pages / Vercel

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BhanuPrakash056/portfolio-website-bhanu.git
   cd portfolio-website-bhanu
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔨 Build & Deployment

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

### Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a deployment.

**Manual Deployment:**

1. Ensure GitHub Pages is enabled in repository settings
2. Set **Source** to "GitHub Actions"
3. Push to `main` branch or trigger workflow manually

## 📁 Project Structure

```
portfolio-website-bhanu/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── about.tsx             # About section
│   ├── contact.tsx           # Contact form section
│   ├── error-boundary.tsx    # Error boundary wrapper
│   ├── experience.tsx        # Experience timeline
│   ├── footer.tsx            # Footer with links
│   ├── hero.tsx              # Hero section with animations
│   ├── loading-screen.tsx    # Initial loading animation
│   ├── navigation.tsx        # Fixed navigation bar
│   ├── skills.tsx            # Skills grid
│   └── ui/                   # Reusable UI components
├── lib/
│   ├── performance.ts        # Performance utilities
│   └── utils.ts              # Helper functions
├── public/
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # SEO sitemap
├── .github/
│   └── workflows/
│       └── nextjs.yml        # GitHub Pages deployment workflow
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - `components/hero.tsx`
   - Name, roles, description
   - Social media links
   - Resume link

2. **Experience** - `components/experience.tsx`
   - Add/edit job positions
   - Update dates and descriptions

3. **Skills** - `components/skills.tsx`
   - Modify skill categories
   - Add/remove technologies

4. **About** - `components/about.tsx`
   - Update bio and certifications

5. **Contact** - `components/contact.tsx`
   - Change contact information
   - Integrate form backend (EmailJS, Formspree, etc.)

### Colors & Theme

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.95 0 0);
  --primary: oklch(0.5 0.15 262);
  /* ... */
}
```

### Metadata & SEO

Update `app/layout.tsx` for SEO optimization:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  // ...
};
```

## 📄 Scripts

- `pnpm run dev` - Start development server with Turbopack
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run preview` - Build and preview locally

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/BhanuPrakash056/portfolio-website-bhanu/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bhanu Prakash R**

- GitHub: [@BhanuPrakash056](https://github.com/BhanuPrakash056)
- LinkedIn: [bhanuprakash-r](https://linkedin.com/in/bhanuprakash-r)
- Email: bp71712@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ Star this repo if you found it helpful!
