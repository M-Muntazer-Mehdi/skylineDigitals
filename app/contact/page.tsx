import Contact from '@/components/Contact'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Us - SkylineDigitals',
  description: 'Get in touch with SkylineDigitals. We\'re here to help bring your vision to life.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <Contact />
    </div>
  )
}

