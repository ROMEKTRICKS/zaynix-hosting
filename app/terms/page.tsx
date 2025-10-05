"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";

export default function Terms() {
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-slate-400 mb-12">Last updated: January 2025</p>

            <Card className="p-8">
              <div className="prose prose-invert max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                  <p className="text-slate-300 leading-relaxed">
                    By accessing and using Zaynix Hosting, you accept and agree to be bound by the terms and provisions of this agreement.
                    If you do not agree to these terms, please do not use our service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">2. Use License</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Permission is granted to temporarily use Zaynix Hosting for personal or commercial deployment purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                    <li>Modify or copy the platform materials</li>
                    <li>Use the materials for any commercial purpose without authorization</li>
                    <li>Attempt to reverse engineer any software contained on the platform</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">3. User Responsibilities</h2>
                  <p className="text-slate-300 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility
                    for all activities that occur under your account or password. You must notify us immediately of any unauthorized use of
                    your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">4. Service Limitations</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Zaynix Hosting reserves the right to modify, suspend, or discontinue the service at any time without notice. We are not
                    liable for any modification, suspension, or discontinuance of the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">5. Content Policy</h2>
                  <p className="text-slate-300 leading-relaxed">
                    You retain all rights to the content you deploy through our platform. However, you grant us a license to host, store,
                    and display your content as necessary to provide the service. You are solely responsible for ensuring you have the
                    necessary rights to deploy your content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">6. Limitation of Liability</h2>
                  <p className="text-slate-300 leading-relaxed">
                    In no event shall Zaynix Hosting be liable for any damages arising out of the use or inability to use our service,
                    even if we have been notified of the possibility of such damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">7. Governing Law</h2>
                  <p className="text-slate-300 leading-relaxed">
                    These terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict
                    of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-3">8. Contact Information</h2>
                  <p className="text-slate-300 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at legal@zaynix.app
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
