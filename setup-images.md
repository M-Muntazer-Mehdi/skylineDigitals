# Quick Setup for Images

## Create Image Directories

Run these commands in your terminal (PowerShell on Windows):

```powershell
# Create directory structure
New-Item -ItemType Directory -Force -Path "public\images\hero"
New-Item -ItemType Directory -Force -Path "public\images\services"
New-Item -ItemType Directory -Force -Path "public\images\projects"
```

Or if using Git Bash or WSL:
```bash
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/projects
```

## Image Checklist

### ✅ Hero Section
- [ ] Add `hero-image.png` (1200x800px) to `public/images/hero/`
- [ ] Uncomment Image component in `components/Hero.tsx` (line 64-72)
- [ ] Remove placeholder div (lines 46-62)

### ✅ Services (10 illustrations needed)
- [ ] `software-development.svg` → `public/images/services/`
- [ ] `mobile-apps.svg` → `public/images/services/`
- [ ] `web-development.svg` → `public/images/services/`
- [ ] `ai-ml.svg` → `public/images/services/`
- [ ] `cloud-solutions.svg` → `public/images/services/`
- [ ] `ui-ux-design.svg` → `public/images/services/`
- [ ] `seo.svg` → `public/images/services/`
- [ ] `local-seo-gmb.svg` → `public/images/services/` (Highlighted service)
- [ ] `medical-billing.svg` → `public/images/services/`
- [ ] `animation.svg` → `public/images/services/`
- [ ] Uncomment Image components in `components/Services.tsx`
- [ ] Remove placeholder divs

### ✅ Projects (15 images needed)
- [ ] `backpack-buddies.jpg` → `public/images/projects/`
- [ ] `yo-works.jpg` → `public/images/projects/`
- [ ] `ar-camera.jpg` → `public/images/projects/`
- [ ] `meetwise.jpg` → `public/images/projects/`
- [ ] `omnigen-ai.jpg` → `public/images/projects/`
- [ ] `contractly.jpg` → `public/images/projects/`
- [ ] `ragnet.jpg` → `public/images/projects/`
- [ ] `shipease.jpg` → `public/images/projects/`
- [ ] `retail-analyzer.jpg` → `public/images/projects/`
- [ ] `e-voting.jpg` → `public/images/projects/`
- [ ] `lost-found.jpg` → `public/images/projects/`
- [ ] `hotelease.jpg` → `public/images/projects/`
- [ ] `inventory-tracker.jpg` → `public/images/projects/`
- [ ] `local-seo-campaign.jpg` → `public/images/projects/`
- [ ] `ecommerce-seo.jpg` → `public/images/projects/`
- [ ] Uncomment Image components in `components/Projects.tsx` and `app/projects/page.tsx`
- [ ] Remove placeholder divs

## Total Images Needed: 26
- 1 Hero image
- 10 Service illustrations (including new: SEO, Local SEO/GMB, Medical Billing, Animation)
- 15 Project images (including real projects and SEO-related projects)

See `IMAGE_GUIDE.md` for detailed instructions.

