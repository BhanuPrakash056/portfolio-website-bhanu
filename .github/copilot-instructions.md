# GitHub Copilot Instructions

## Project Overview
This is a modern portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. The project showcases professional experience, skills, and projects for Bhanu Prakash R, a Full Stack Software Engineer.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui components
- **Package Manager**: pnpm

## Code Style & Conventions

### TypeScript
- Use TypeScript for all files
- Prefer interfaces over types for object shapes
- Use explicit return types for functions
- Avoid `any` types - use proper typing or `unknown`
- Use const assertions where appropriate

### React/Next.js
- Use functional components with hooks
- Prefer arrow functions for component definitions
- Use "use client" directive for client components
- Follow Next.js App Router conventions
- Keep components in `/components` directory
- Use proper semantic HTML elements

### Component Structure
```tsx
"use client"; // If needed

import statements...

const ComponentName = () => {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    // JSX
  );
};

export default ComponentName;
```

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use CSS custom properties for theme colors
- Prefer Tailwind's gradient utilities (bg-gradient-to-*)
- Use consistent spacing scale (4, 6, 8, 12, 16, 20, etc.)
- Apply proper color opacity with /10, /20, /50, etc.

### Animation
- Use Framer Motion for complex animations
- Use `motion` components for animated elements
- Leverage `useInView` hook for scroll animations
- Add `whileHover` and `whileTap` for interactive elements
- Use staggered animations for lists
- Keep animation durations reasonable (0.3s - 0.8s)

### File Organization
- Components in `/components` directory
- Shared hooks in `/hooks` directory
- Utility functions in `/lib` directory
- Global styles in `/app/globals.css` or `/styles/globals.css`
- Each major section as a separate component

### Naming Conventions
- PascalCase for components (e.g., `Hero.tsx`, `ContactForm.tsx`)
- camelCase for functions, variables, and hooks
- kebab-case for CSS classes and file paths
- UPPER_CASE for constants
- Prefix custom hooks with `use` (e.g., `useMobile`, `useToast`)

### Color Theme
- Primary: Cyan/Teal shades (oklch(0.65 0.22 195))
- Secondary: Purple shades (oklch(0.55 0.20 285))
- Accent: Bright teal/emerald (oklch(0.70 0.25 170))
- Background: Dark with subtle color tints
- Use gradients for visual interest

### Accessibility
- Include proper ARIA labels
- Use semantic HTML
- Ensure keyboard navigation works
- Add alt text to images
- Maintain proper heading hierarchy
- Test with screen readers in mind

### Performance
- Use Next.js Image component for images
- Implement lazy loading where appropriate
- Minimize bundle size
- Use dynamic imports for heavy components
- Optimize animations for performance
- Avoid layout shifts

### Best Practices
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper error boundaries
- Implement loading states
- Add proper TypeScript types
- Write descriptive variable and function names
- Comment complex logic
- Follow DRY (Don't Repeat Yourself) principle

### Git Commit Messages
- Use conventional commits format
- Start with type: feat, fix, docs, style, refactor, test, chore
- Keep first line under 72 characters
- Add detailed description if needed

### Testing
- Test user interactions
- Verify responsive design
- Check animations and transitions
- Ensure cross-browser compatibility
- Validate accessibility

## Project-Specific Guidelines

### Contact Information
- Email: bp71712@gmail.com
- GitHub: https://github.com/bhanuprakash056
- LinkedIn: https://linkedin.com/in/bhanuprakash-r

### Professional Details
- Current Company: Elanco
- Current Role: Software Engineer - I
- Location: Use appropriate location context

### Content Guidelines
- Maintain professional tone
- Highlight technical achievements with metrics
- Use action verbs for experience descriptions
- Keep bullet points concise and impactful
- Focus on scalability, performance, and innovation

## Common Patterns

### Scroll Animation
```tsx
const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6 }}
>
```

### Button Styling
```tsx
<button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
```

### Card Styling
```tsx
<div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all">
```

## Dependencies to Use
- framer-motion for animations
- react-intersection-observer for scroll detection
- lucide-react for icons
- shadcn/ui components when needed
- Avoid adding unnecessary dependencies

## What to Avoid
- Inline styles (use Tailwind classes)
- Large component files (split into smaller components)
- Magic numbers (use named constants)
- Overly complex animations
- Non-semantic HTML
- Accessibility violations
- Hardcoded values that should be configurable
