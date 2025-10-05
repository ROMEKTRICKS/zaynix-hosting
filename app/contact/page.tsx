"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-slate-400">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Name
                      </label>
                      <Input type="text" placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                        className="flex w-full rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-h-32"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-slate-400 text-sm mb-2">Our team is here to help</p>
                      <a href="mailto:support@zaynix.app" className="text-cyan-400 hover:underline">
                        support@zaynix.app
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                      <MessageSquare className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                      <p className="text-slate-400 text-sm mb-2">Available 24/7</p>
                      <button className="text-cyan-400 hover:underline">
                        Start a conversation
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
