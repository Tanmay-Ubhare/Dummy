# Innovality Private Limited Website

A modern, professional, and fully responsive website built with Next.js (App Router) and Tailwind CSS for Innovality Private Limited.

## 🚀 Features

- **Modern Next.js 15** with App Router and TypeScript
- **Responsive Design** - Mobile-first approach with cross-browser compatibility
- **Professional UI** - Clean, minimal, corporate design
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Scalable Architecture** - Easily maintainable and extendable components

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1E3A8A` - Main brand color
- **Secondary Teal**: `#14B8A6` - Accent color for highlights
- **Light Grey**: `#F3F4F6` - Background sections
- **White**: `#FFFFFF` - Main background

### Components
- Sticky navigation header
- Hero section with call-to-action
- Responsive product/service cards
- Project showcase with status indicators
- Professional footer with contact information

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── AboutCard.tsx    # About section with CFO profile
│   │   ├── ProductCard.tsx  # Deprecated (products removed)
│   │   └── ProjectCard.tsx  # Project showcase cards
│   ├── about/              # About page
│   ├── products/           # Deprecated
│   ├── projects/           # Upcoming Projects page
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── lib/
    └── data.ts             # Dummy data for content
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel-ready
- **Performance**: Turbopack for fast development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone/Navigate to the project directory**
   ```bash
   cd spark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📄 Pages

1. **Home (/)**: Hero, About preview, Projects preview
2. **About (/about)**: Full company description, CFO profile, mission/vision, values
3. ~~Products (/products)~~: Removed
4. **Projects (/projects)**: Upcoming projects with timelines and status
5. **Contact (/contact)**: Contact information and inquiry form

## 📊 Content Management

### Adding New Products

Products catalog has been removed; no longer supported.

 
 
### Adding New Projects
Edit `src/lib/data.ts` and add to the `projects` array:

```typescript
{
  id: 'new-project',
  title: 'Project Name',
  description: 'Project description...',
  status: 'Planning', // 'Planning' | 'In Progress' | 'Coming Soon' | 'Beta'
  timeline: 'Q1 2026',
  category: 'Technology Category'
}
```

## 🎯 SEO Features

- Structured metadata for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Optimized images and fonts
- Fast loading with Next.js optimizations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

## 🔧 Customization

 
 
### Colors
Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1E3A8A',    // Your brand primary color
  secondary: '#14B8A6',   // Your brand accent color
  muted: '#F3F4F6',      // Background sections
}
```

 
 
### Fonts
Modify fonts in `globals.css` or `tailwind.config.ts`

 
 
### Content
All content can be managed through:
 
- `src/lib/data.ts` for projects and company info
- Individual page components for static content

## 🚀 Deployment

 
### Vercel (Recommended)
 
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

 
### Other Platforms
 
```bash
npm run build
npm start
```

## 📞 Support

For questions about this website implementation:
 
- Check Next.js documentation: [nextjs.org](https://nextjs.org)
- Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)

---

**Built for Innovality Private Limited** - Professional web presence for technology transformation leaders.
