# Personal Portfolio

A modern, responsive personal portfolio website built with cutting-edge web technologies. This project showcases my projects, work experience, and professional journey with a beautiful and interactive user interface.

## 🎯 Project Overview

This is a personal portfolio website designed to present my professional work, skills, and experience to potential clients, employers, and collaborators. The site features a clean, modern design with smooth animations and an excellent user experience across all devices.

## 🛠️ Tech Stack

### Current
- **Framework**: [Next.js](https://nextjs.org) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org) - For type-safe code
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Package Manager**: npm/yarn/pnpm

### Planned
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) - High-quality React components
- **Animations**: [GSAP](https://gsap.com) or [Framer Motion](https://www.framer.com/motion) - Advanced animation library
- **Blog Engine**: Markdown-based or CMS integration
- **Project Details**: Dynamic project pages with case studies

## ✨ Features

### Current
- 📱 Fully responsive design
- 🎨 Dark/Light theme support
- 🧭 Smooth navigation
- 📧 Contact section
- 💼 Work experience display
- 🎯 Project showcase

### Upcoming
- ✍️ Blogs section with articles and tutorials
- 📖 Detailed project case studies and documentation
- 🎬 Advanced animations with GSAP/Framer Motion
- 🎨 Enhanced UI components with shadcn
- 📊 Project statistics and metrics
- 🔍 Search functionality

## 📁 Project Structure

```
personal-portfolio/
├── app/                       # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── ClientProvider.tsx   # Client-side providers
│   └── ...
├── components/              # Reusable React components
│   ├── layout/             # Layout components (NavBar, Footer)
│   ├── sections/           # Page sections (HomePage, Work, Contact)
│   ├── work/               # Work-related components
│   ├── project/            # Project-related components
│   ├── ThemeProvider.tsx   # Theme management
│   ├── MobileNavigation.tsx# Mobile nav
│   └── ...
├── data/                    # Static data and configuration
│   ├── navbar.js           # Navigation data
│   ├── work.ts             # Work experience data
│   └── ...
├── public/                  # Static assets
│   ├── images/            # Image assets
│   └── resume/            # Resume file
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd personal-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page auto-reloads as you edit files.

## 📝 Editing Content

- **Edit the home page**: Modify `app/page.tsx`
- **Update work experience**: Update `data/work.ts`
- **Update navigation**: Modify `data/navbar.js`
- **Edit sections**: Update components in `components/sections/`
- **Customize theme**: Update `tailwind.config.mjs` and `components/ThemeProvider.tsx`

## 🔨 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com) from the creators of Next.js:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed automatically

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Deployment Options

- **Netlify** - Connect your GitHub repo and deploy
- **GitHub Pages** - Export as static site
- **Docker** - Containerize and deploy anywhere

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🎯 Future Roadmap

- [ ] Implement shadcn/ui for enhanced components
- [ ] Add GSAP/Framer Motion animations
- [ ] Create blogs section with markdown support
- [ ] Build dynamic project detail pages
- [ ] Add project filtering and search
- [ ] Implement dark/light mode preferences
- [ ] Add analytics and SEO optimization
- [ ] Create admin panel for content management
- [ ] Add contact form with email integration
- [ ] Implement testimonials section

## 💡 Contributing

This is a personal project, but feedback and suggestions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Request new features

## 📧 Contact

For inquiries or collaboration opportunities, reach out through the contact section on the website or via email.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
