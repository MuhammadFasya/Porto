# Muhammad Fasya - Portfolio Website

A modern, responsive, and high-performance Personal Portfolio Website built with Next.js 14, featuring a Bento Grid layout with smooth Framer Motion animations.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Features

- **Modern Design**: Dark mode dominant with Electric Blue/Cyan accents
- **Bento Grid Layout**: Modular, clean, and organized design
- **Smooth Animations**: Framer Motion for scroll reveals and transitions
- **Fully Responsive**: Mobile-first approach
- **Sticky Navigation**: Clean navigation bar with smooth scrolling
- **Interactive Projects**: Hover effects with subtle scaling and glow

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Font**: Plus Jakarta Sans

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & design system
│   ├── layout.tsx       # Root layout with navbar
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── About.tsx        # About me section
│   ├── Projects.tsx     # Featured projects grid
│   ├── TechStack.tsx    # Tech stack marquee & grid
│   └── Footer.tsx       # Footer with social links
```

## 🏃‍♂️ Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The design uses a custom color palette defined in `globals.css`:

- **Background**: `#0a0a0f`
- **Accent**: `#00d4ff` (Electric Blue/Cyan)
- **Secondary Accent**: `#0ea5e9`
- **Card Background**: `#111118`
- **Border**: `#1e1e2e`

### Content

Update the content in each component file:

- `Hero.tsx` - Main headline and CTAs
- `About.tsx` - Personal information
- `Projects.tsx` - Project details
- `TechStack.tsx` - Technologies
- `Footer.tsx` - Social links

## 📱 Sections

1. **Hero**: Headline, subheadline, and call-to-action buttons
2. **About Me**: Education, DBS x Dicoding Camp participation, interests
3. **Featured Projects**: A-Eyes, Fuduit, Campus Mental Health Chatbot
4. **Tech Stack**: Frontend, Backend, AI/Data, and Tools
5. **Footer**: Copyright and social links

## 🚀 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

© 2026 Muhammad Fasya. All rights reserved.
