"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-slate-400 mb-12">Last updated: January 2025</p>

            <Card className="p-8">
              <div className="prose prose-invert max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                    <li>Account information (name, email address, password)</li>
                    <li>Project and deployment information</li>
                    <li>Payment and billing information</li>
                    <li>Communications with our support team</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect and prevent fraudulent transactions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">3. Information Sharing</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in
                    the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mt-3">
                    <li>With your consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who assist in our operations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">4. Data Security</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet
                    is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">5. Data Retention</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and fulfill the purposes
                    outlined in this privacy policy. We may also retain and use your information to comply with legal obligations,
                    resolve disputes, and enforce our agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict processing of your information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">7. Cookies and Tracking</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We use cookies and similar tracking technologies to collect and track information about your use of our services.
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy
                    on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">9. Contact Us</h2>
                  <p className="text-slate-300 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at privacy@zaynix.app
                  </p>
                </section>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
