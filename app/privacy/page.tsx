import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – GraceGuide",
  description: "GraceGuide privacy policy: how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F5] dark:bg-[#1A2332] text-[#1F1F1F] dark:text-[#F5F3F0]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-light tracking-wider text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] hover:text-[#4A9DB8] transition-colors mb-8"
        >
          ← Back to GraceGuide
        </Link>

        <article className="rounded-3xl bg-white dark:bg-[#1E2835] border border-[#E5E3E0] dark:border-[#374151] p-8 md:p-10 shadow-sm">
          <h1 className="text-3xl font-semibold mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">Privacy Policy – GraceGuide</h1>
          <p className="text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] text-sm font-light mb-10">
            Last Updated: December 21st 2025
          </p>

          <div className="space-y-10 font-light text-[#1F1F1F] dark:text-[#F5F3F0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">1. Introduction</h2>
            <p>
              GraceGuide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (the &quot;App&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mt-4 mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Account Information:</strong> When you sign in using Google Sign-In or Apple Sign-In, we collect: email address, name (if provided), profile picture/avatar (if provided), and unique identifier from the authentication provider.</li>
              <li><strong>Spiritual & Reflection Data:</strong> Emotional check-ins, tone and reflections, daily scripture and devotional progress, reading status, and notes.</li>
              <li><strong>Chat Messages:</strong> Messages you send through the AI chat feature; spiritual questions and conversations.</li>
              <li><strong>Support Communications:</strong> Information you provide when contacting us for support.</li>
            </ul>
            <h3 className="text-lg font-medium mt-4 mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Device Information:</strong> Device type and operating system, app version, device identifiers.</li>
              <li><strong>Usage Information:</strong> Features you use, time and date of activities, error logs and crash reports.</li>
            </ul>
            <h3 className="text-lg font-medium mt-4 mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">2.3 Information from Third Parties</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Authentication Providers:</strong> Information from Google or Apple when you sign in.</li>
              <li><strong>Subscription Services:</strong> If applicable, subscription status and purchase information from app stores.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">3. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide, maintain, and improve the App</li>
              <li>Process and manage your account</li>
              <li>Deliver daily scripture, devotionals, and personalized spiritual content</li>
              <li>Provide AI-powered chat and guidance features</li>
              <li>Send you service-related communications</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to improve the App</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">4. How We Share Your Information</h2>
            <h3 className="text-lg font-medium mt-4 mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">4.1 Service Providers</h3>
            <p className="mb-2">We share information with third-party service providers who perform services on our behalf, such as authentication (Google/Apple), backend hosting, and AI services used for chat features. These providers are bound by confidentiality and data protection obligations.</p>
            <h3 className="text-lg font-medium mt-4 mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid legal requests.</p>
            <h3 className="text-lg font-medium mt-4 mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">4.3 With Your Consent</h3>
            <p>We may share your information with your explicit consent or at your direction.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">5. Data Storage and Security</h2>
            <p className="mb-2">Your data is stored on secure servers. We use industry-standard security measures and encrypt data in transit and at rest. Authentication tokens are stored securely on your device. We retain your information for as long as your account is active. You can delete your account at any time, which will delete your personal information. Some information may be retained for legal or legitimate business purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">6. Your Rights and Choices</h2>
            <p className="mb-2">You can access and update your account information through the App. You can delete your account at any time through the App settings; account deletion will remove your personal information and data, and this action cannot be undone.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">7. Children&apos;s Privacy</h2>
            <p>The App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at support@mygraceguide.app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">8. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your country of residence. By using the App, you consent to such transfer where applicable.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy in the App and updating the &quot;Last Updated&quot; date. Your continued use after changes constitutes acceptance of the updated Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">10. California Privacy Rights (CCPA)</h2>
            <p className="mb-2">If you are a California resident, you have the right to: know what personal information we collect; know whether we sell or disclose your personal information (we do not sell personal information); request deletion of your personal information; and non-discrimination for exercising your privacy rights. To exercise these rights, please contact us at support@mygraceguide.app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">11. European Privacy Rights (GDPR)</h2>
            <p className="mb-2">If you are in the European Economic Area (EEA), you have the right to: access your personal data; rectify inaccurate data; erase your personal data; restrict processing; data portability; object to processing; and withdraw consent. To exercise these rights, please contact us at support@mygraceguide.app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">12. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
            <p className="text-[#4A9DB8] font-medium">
              Email: <a href="mailto:support@mygraceguide.app" className="hover:underline transition-colors">support@mygraceguide.app</a>
            </p>
          </section>
          </div>
        </article>

        <footer className="mt-12 pt-8 border-t border-[#E5E3E0] dark:border-[#374151] text-center text-xs font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)]">
          © 2025 GraceGuide
        </footer>
      </div>
    </div>
  );
}
