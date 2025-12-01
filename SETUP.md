# Kapssul Website - Setup Instructions

## Important: Manual Dependency Installation Required

Due to PowerShell execution policy restrictions, please install the required dependencies manually:

```bash
# Run this command in your terminal:
pnpm add framer-motion react-countup class-variance-authority clsx

# Or if using npm:
npm install framer-motion react-countup class-variance-authority clsx
```

## Environment Configuration

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_APP_URL=https://app.kapssul.africa
```

This URL is used for all signup/login redirects and can be easily updated without code changes.

## What's Been Built

✅ **Design System**: Coffee brown theme (#8B4513) with gradients, animations, and glassmorphism effects
✅ **Hero Section**: Dynamic with animated stats and dual CTAs
✅ **Interactive Flow**: 7-step practitioner journey with hover details
✅ **Features Grid**: 6 key features with icon animations
✅ **Benefits Section**: Practitioner vs Patient value propositions
✅ **SEO Optimization**: Meta tags, Open Graph, structured data, sitemap, robots.txt
✅ **Responsive Design**: Mobile-first with hamburger menu
✅ **Smooth Animations**: Fade-in, slide, scale, float, gradient shift effects

## Development Server

The dev server (pnpm dev) is already running. After installing dependencies, the site should hot-reload automatically.

## Browser Testing

Open: http://localhost:3000

Test:
- Navigation menu (desktop & mobile)
- Hero CTAs
- Interactive flow hover effects  
- Stats counter animations (scroll into view)
- All signup/login buttons redirect to app.kapssul.africa
- Responsive design at different breakpoints

## Next Steps

1. Install dependencies (see above)
2. Create `.env.local` file
3. Test the website in your browser
4. Optionally replace generated images with real screenshots from your app
5. Update Google verification code in layout.tsx when ready
