# SkylineDigitals Website

A modern, professional website for SkylineDigitals - a software house and digital agency.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Tailwind CSS for styling
- 📱 Fully responsive across all devices
- 🚀 Optimized for performance
- 🖼️ Image placeholders with clear indicators
- 📂 Projects showcase section
- 🎭 Service illustrations support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. **Set up email functionality** (for contact form):
   - Create a `.env.local` file in the root directory
   - Copy the contents from `env.example.txt` to `.env.local`
   - Configure your SMTP settings (Gmail, Outlook, or custom SMTP)
   - Add your SMTP credentials to `.env.local`
   - See `SMTP_SETUP.md` for detailed instructions

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── public/
│   └── images/         # Image assets (see IMAGE_GUIDE.md)
├── IMAGE_GUIDE.md      # Detailed image setup guide
└── TODO_FEATURES.md    # Missing features and recommendations
```

## Adding Images

The website includes image placeholders marked with "?" symbols. To add your images:

1. **Create image directories** (see `setup-images.md` for commands)
2. **Add your images** to the appropriate folders:
   - Hero image: `public/images/hero/hero-image.png`
   - Service illustrations: `public/images/services/*.svg`
   - Project images: `public/images/projects/*.jpg`
3. **Uncomment Image components** in the respective component files
4. **Remove placeholder divs** (marked with "?")

See `IMAGE_GUIDE.md` for detailed instructions and `setup-images.md` for quick setup.

## Roadmap & Missing Features

See `TODO_FEATURES.md` for a comprehensive list of missing features, recommendations, and implementation priorities. This includes:
- Critical features (mobile menu, contact page, form backend, 404 page, legal pages)
- Important features (testimonials, FAQ, SEO, loading states)
- Future enhancements (blog, case studies, team profiles, careers)

## Customization

- Update company information in the components
- Modify colors in `tailwind.config.js`
- Add your own images and assets in the `public` folder
- Configure email sending for the contact form (see `SMTP_SETUP.md`)
- Update project details in `components/Projects.tsx`

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## License

© 2024 SkylineDigitals. All rights reserved.

