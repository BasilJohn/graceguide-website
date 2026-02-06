import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions – GraceGuide",
  description: "GraceGuide terms of use and end user license agreement.",
};

export default function TermsPage() {
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
          <h1 className="text-3xl font-semibold mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">Terms of Use (EULA) – GraceGuide</h1>
          <p className="text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] text-sm font-light mb-10">
            Last Updated: December 21st 2025
          </p>

          <div className="space-y-10 font-light text-[#1F1F1F] dark:text-[#F5F3F0] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">1. Agreement to Terms</h2>
            <p>By downloading, installing, or using GraceGuide (the &quot;App&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">2. Description of Service</h2>
            <p className="mb-2">GraceGuide is a mobile application that allows you to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Receive daily scripture and devotionals</li>
              <li>Record emotional check-ins and reflections</li>
              <li>Access AI-powered spiritual guidance and chat</li>
              <li>Track your reading and reflection progress</li>
              <li>Manage your account and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">3. Eligibility</h2>
            <p>You must be at least 13 years old to use the App. By using the App, you represent and warrant that you are at least 13 years old and have the legal capacity to enter into these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">4. User Accounts</h2>
            <p className="mb-2">You may create an account using Google Sign-In or Apple Sign-In. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use. We are not liable for any loss or damage arising from unauthorized access to your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">5. User Content</h2>
            <p className="mb-2">You retain ownership of all content you submit to the App (check-ins, notes, chat messages, etc.). You grant us a license to store, process, and display your content to provide the service. When using AI chat features, your messages may be processed by third-party AI services to generate responses. You agree not to submit content that is illegal, harmful, infringing, malicious, spam, or offensive when using AI features.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">6. Intellectual Property</h2>
            <p className="mb-2">The App, its features, and all content (except your user content) are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without permission. AI features may be powered by third-party services; we are not responsible for the accuracy of third-party or AI-generated content. AI-generated content is provided &quot;as is&quot; and may contain errors or inaccuracies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">7. Prohibited Uses</h2>
            <p className="mb-2">You agree not to: use the App for any illegal purpose; attempt to gain unauthorized access to the App or related systems; interfere with or disrupt the App&apos;s operation; reverse engineer, decompile, or disassemble the App; use automated systems to access the App without permission; or use AI features to generate content that violates laws or the rights of others.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">8. AI Services Disclaimer</h2>
            <p className="mb-2">AI-generated responses may not always be accurate, complete, or current. You should not rely solely on AI-generated information for important decisions. We are not responsible for the content, accuracy, or quality of AI-generated responses. We may modify, suspend, or discontinue AI features at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">9. Termination</h2>
            <p className="mb-2">You may stop using the App or delete your account at any time through the App settings. We may suspend or terminate your access if you violate these Terms, engage in fraudulent or illegal activity, if required by law, or if we discontinue the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">10. Disclaimers</h2>
            <p className="uppercase text-sm text-[#1F1F1F] dark:text-[#F5F3F0]">THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP, INCLUDING AI FEATURES, WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">11. Limitation of Liability</h2>
            <p className="uppercase text-sm text-[#1F1F1F] dark:text-[#F5F3F0]">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, INCLUDING ANY LIABILITY ARISING FROM THE USE OF OR RELIANCE ON AI-GENERATED CONTENT.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">12. Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses (including attorneys&apos; fees) arising out of your use of the App or violation of these Terms, including any claims related to content you submit or AI-generated content you use.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">13. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms in the App and updating the &quot;Last Updated&quot; date. Your continued use after changes constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">14. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Alberta, Canada.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">15. Contact Information</h2>
            <p className="mb-2">If you have questions about these Terms, please contact us at:</p>
            <p className="text-[#4A9DB8] font-medium">
              Email: <a href="mailto:support@mygraceguide.app" className="hover:underline transition-colors">support@mygraceguide.app</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">16. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.</p>
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
