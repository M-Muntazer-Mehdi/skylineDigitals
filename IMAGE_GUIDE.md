# Image Guide for SkylineDigitals Website

This guide shows you where to add images and what dimensions are recommended.

## Directory Structure

Create the following directories in the `public` folder:

```
public/
  images/
    hero/
      hero-image.png (or .jpg, .webp)
    services/
      software-development.svg (or .png, .jpg)
      mobile-apps.svg (or .png, .jpg)
      web-development.svg (or .png, .jpg)
      ai-ml.svg (or .png, .jpg)
      cloud-solutions.svg (or .png, .jpg)
      ui-ux-design.svg (or .png, .jpg)
    projects/
      ecommerce-platform.jpg
      banking-app.jpg
      ai-analytics.jpg
      healthcare-system.jpg
      cloud-migration.jpg
      real-estate.jpg
```

## Image Requirements

### 1. Hero Section Image
- **Location**: `public/images/hero/hero-image.png`
- **Recommended Size**: 1200x800px
- **Format**: PNG, JPG, or WebP
- **Content**: Professional image representing technology, innovation, or your team
- **Current Status**: Placeholder with "?" mark visible

### 2. Service Illustrations
- **Location**: `public/images/services/`
- **Recommended Size**: 400x300px (or SVG for scalability)
- **Format**: SVG (preferred), PNG, or JPG
- **Files Needed**:
  - `software-development.svg`
  - `mobile-apps.svg`
  - `web-development.svg`
  - `ai-ml.svg`
  - `cloud-solutions.svg`
  - `ui-ux-design.svg`
  - `seo.svg`
  - `local-seo-gmb.svg`
  - `medical-billing.svg`
  - `animation.svg`
- **Content**: Illustrations or icons representing each service
- **Current Status**: Placeholders with "?" marks visible in each service card

### 3. Project Images
- **Location**: `public/images/projects/`
- **Recommended Size**: 800x600px
- **Format**: JPG or PNG
- **Files Needed**:
  - `backpack-buddies.jpg` - BackPack Buddies mobile app screenshots
  - `yo-works.jpg` - Yo.Works platform interface
  - `ar-camera.jpg` - AR Camera app interface
  - `meetwise.jpg` - Meetwise dashboard and interface
  - `omnigen-ai.jpg` - Omnigen.AI platform screenshots
  - `contractly.jpg` - Contractly document editor interface
  - `ragnet.jpg` - RAGnet dashboard
  - `shipease.jpg` - SHIPEASE logistics platform
  - `retail-analyzer.jpg` - Retail Behavior Analyzer dashboard
  - `e-voting.jpg` - E-Voting mobile app screenshots
  - `lost-found.jpg` - Lost & Found platform interface
  - `hotelease.jpg` - HotelEase mobile app
  - `inventory-tracker.jpg` - Inventory Tracker desktop app
  - `local-seo-campaign.jpg` - Local SEO campaign results/dashboard
  - `ecommerce-seo.jpg` - E-Commerce SEO optimization results
- **Content**: Screenshots, mockups, or designs of your actual projects
- **Current Status**: Placeholders with "?" marks visible in each project card

## How to Add Images

### Step 1: Create Directories
```bash
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/projects
```

### Step 2: Add Your Images
Place your images in the appropriate directories with the exact filenames listed above.

### Step 3: Uncomment Image Code
After adding images, you need to uncomment the Image components in the code:

#### For Hero Section (`components/Hero.tsx`):
Find the commented section and uncomment:
```tsx
<Image
  src="/images/hero/hero-image.png"
  alt="SkylineDigitals - Technology Solutions"
  fill
  className="object-cover"
  priority
/>
```

#### For Services (`components/Services.tsx`):
In each service card, uncomment:
```tsx
<Image
  src={service.illustration}
  alt={service.title}
  fill
  className="object-contain p-4"
/>
```

#### For Projects (`components/Projects.tsx`):
In each project card, uncomment:
```tsx
<Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
```

### Step 4: Remove Placeholders
After uncommenting the Image components, remove the placeholder divs (the ones with "?" marks).

## Image Optimization Tips

1. **Use WebP format** when possible for better compression
2. **Optimize images** before uploading (use tools like TinyPNG or ImageOptim)
3. **Use SVG** for service illustrations for scalability
4. **Keep file sizes small** (aim for under 200KB per image)
5. **Use appropriate dimensions** - don't use images larger than needed

## Current Placeholder Locations

All placeholders are clearly marked with:
- A large "?" symbol
- Text indicating "Add Image" or "Add Illustration"
- The file path where the image should be placed
- Recommended dimensions (where applicable)

Once you add your images and uncomment the code, the placeholders will be replaced automatically.

