export const metadata = {
  title: 'Terms of Service - SkylineDigitals',
  description: 'Terms of Service for SkylineDigitals - Read our terms and conditions.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the SkylineDigitals website and services, you accept and agree
              to be bound by the terms and provision of this agreement. If you do not agree to abide
              by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Use License
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on SkylineDigitals' website
              for personal, non-commercial transitory viewing only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              SkylineDigitals provides software development, web development, mobile app development,
              AI/ML solutions, and related technology services. All services are provided subject to
              separate service agreements and project specifications. We reserve the right to modify,
              suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content, features, and functionality of the website, including but not limited to
              text, graphics, logos, icons, images, audio clips, digital downloads, and software, are
              the exclusive property of SkylineDigitals or its content suppliers and are protected
              by international copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. User Accounts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you create an account on our website, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Payment terms for services will be specified in individual service agreements or project
              contracts. All fees are non-refundable unless otherwise stated in writing. We reserve
              the right to change our pricing at any time, but changes will not affect projects already
              in progress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall SkylineDigitals, its directors, employees, or agents be liable for any
              indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from your use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Warranty Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The information on this website is provided on an "as is" basis. To the fullest extent
              permitted by law, SkylineDigitals excludes all representations, warranties, conditions,
              and terms relating to our website and the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless SkylineDigitals, its officers, directors,
              employees, agents, and third parties from any claims, actions, demands, losses, liabilities,
              and expenses (including legal fees) arising out of or relating to your use of the website
              or services, your violation of these Terms, or your violation of any rights of another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your access to our services immediately, without prior notice
              or liability, for any reason whatsoever, including without limitation if you breach the
              Terms. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the
              jurisdiction in which SkylineDigitals operates, without regard to its conflict of law
              provisions. Any disputes arising under or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. If a revision is material, we will provide at least 30 days notice prior to any
              new terms taking effect. What constitutes a material change will be determined at our
              sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <p className="text-gray-900 font-semibold mb-2">SkylineDigitals</p>
              <p className="text-gray-600">Email: <a href="mailto:skylinedigitals.tech@gmail.com" className="text-primary-600 hover:underline">skylinedigitals.tech@gmail.com</a></p>
              <p className="text-gray-600">Phone: <a href="tel:+923120614503" className="text-primary-600 hover:underline">+92312-0614503</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

