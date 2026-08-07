# GlobalConnectra Services — Corporate Website

Modern, responsive corporate website for **GlobalConnectra Services Pvt. Ltd.** built with Next.js App Router.

## Tech Stack

- Next.js 15+ (App Router)
- JavaScript
- SCSS Modules
- Shadcn-style UI (Radix primitives)
- Lucide Icons
- Framer Motion
- React Hook Form + Zod

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                  # Pages and routes
components/           # Reusable UI components
data/                 # JSON data (jobs, countries, testimonials)
lib/                  # Utilities and SEO helpers
styles/               # Global SCSS and variables
public/               # Static assets
```

## Environment

Optional — set your production URL for SEO:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Features

- Sticky navbar with dropdown and mobile menu
- 20 sample jobs with search/filter
- Apply and enquiry forms (frontend only, console log + toast)
- SEO metadata, sitemap, and robots.txt
- Framer Motion animations
- Fully responsive design

## Deployment

Deploy to Vercel, Netlify, or any Node.js host. Replace placeholder content, contact details, and connect forms to your backend API.
