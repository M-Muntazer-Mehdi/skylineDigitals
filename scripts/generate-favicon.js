/**
 * Generates square favicon from logo.png (crops to icon part, then resizes).
 * Run: node scripts/generate-favicon.js
 */
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const logoPath = path.join(__dirname, '../public/images/hero/logo.png')
const appDir = path.join(__dirname, '../app')

async function main() {
  const meta = await sharp(logoPath).metadata()
  const { width, height } = meta
  const size = Math.min(width, height)
  const left = 0
  const top = Math.max(0, (height - size) / 2)
  const extract = { left: Math.round(left), top: Math.round(top), width: size, height: size }

  const square32 = await sharp(logoPath)
    .extract(extract)
    .resize(32, 32)
    .png()
    .toBuffer()
  const iconPath = path.join(appDir, 'icon.png')
  fs.mkdirSync(appDir, { recursive: true })
  fs.writeFileSync(iconPath, square32)
  console.log('Written:', iconPath, '(32x32)')

  const apple192 = await sharp(logoPath)
    .extract(extract)
    .resize(192, 192)
    .png()
    .toBuffer()
  const applePath = path.join(appDir, 'apple-icon.png')
  fs.writeFileSync(applePath, apple192)
  console.log('Written:', applePath, '(192x192)')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
