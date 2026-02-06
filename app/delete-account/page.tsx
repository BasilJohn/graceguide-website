import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account – GraceGuide",
  description: "How to permanently delete your GraceGuide account and associated data.",
};

export default function DeleteAccountPage() {
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
          <h1 className="text-3xl font-semibold mb-2 text-[#1F1F1F] dark:text-[#F5F3F0]">
            GraceGuide – Account Deletion Request
          </h1>
          <p className="text-[#6B7280] dark:text-[rgba(245,243,240,0.6)] text-sm font-light leading-relaxed mb-10">
            If you have created an account in the <strong className="text-[#1F1F1F] dark:text-[#F5F3F0]">GraceGuide</strong> app and would like to permanently delete it along with all associated data, you can follow the instructions below.
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">How to Request Account Deletion</h2>
            <ol className="list-decimal list-inside space-y-3 text-[#1F1F1F] dark:text-[#F5F3F0] font-light leading-relaxed">
              <li>Open the <strong>GraceGuide</strong> app on your device.</li>
              <li>Go to <strong>Profile → Delete Account</strong>.</li>
              <li>Confirm your request. Once confirmed, your account and personal data will be permanently deleted from our servers within <strong>7 business days</strong>.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">If You Cannot Access the App</h2>
            <p className="text-[#1F1F1F] dark:text-[#F5F3F0] font-light leading-relaxed mb-3">
              If you no longer have access to the app, you can request deletion by emailing us at:
            </p>
            <p className="text-[#4A9DB8] font-medium">
              📧 <a href="mailto:support@mygraceguide.app" className="hover:underline transition-colors">support@mygraceguide.app</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">What Data Is Deleted</h2>
            <ul className="list-disc list-inside space-y-2 text-[#1F1F1F] dark:text-[#F5F3F0] font-light leading-relaxed">
              <li>Your account information (name, email, login credentials)</li>
              <li>Your emotional check-ins, reflections, and preferences</li>
              <li>Daily scripture and devotional progress and notes</li>
              <li>Chat and conversation history</li>
              <li>All analytics and usage data linked to your account</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">What Data Is Retained</h2>
            <p className="text-[#1F1F1F] dark:text-[#F5F3F0] font-light leading-relaxed">
              Certain minimal information (such as transaction records, if you have an active subscription) may be retained as required by law for bookkeeping or compliance purposes. All other data is permanently removed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-[#1F1F1F] dark:text-[#F5F3F0]">Contact Us</h2>
            <p className="text-[#1F1F1F] dark:text-[#F5F3F0] font-light leading-relaxed mb-2">
              For any questions regarding data deletion or privacy, please contact:
            </p>
            <p className="text-[#4A9DB8] font-medium">
              <strong className="text-[#1F1F1F] dark:text-[#F5F3F0]">GraceGuide Support</strong><br />
              Email: <a href="mailto:support@mygraceguide.app" className="hover:underline transition-colors">support@mygraceguide.app</a>
            </p>
          </section>
        </article>

        <footer className="mt-12 pt-8 border-t border-[#E5E3E0] dark:border-[#374151] text-center text-xs font-light text-[#6B7280] dark:text-[rgba(245,243,240,0.6)]">
          © 2025 GraceGuide
        </footer>
      </div>
    </div>
  );
}
