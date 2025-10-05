"use client";

import { motion } from "framer-motion";
import { Zap, Users, Globe, Rocket } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in web hosting and deployment."
    },
    {
      icon: Users,
      title: "Developer Focus",
      description: "Built by developers, for developers. We understand your needs."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere, reach everywhere with our global infrastructure."
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "Every millisecond counts. We optimize for performance at every level."
    }
  ];

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
              About <span className="text-gradient">Zaynix Hosting</span>
            </h1>
            <p className="text-xl text-slate-400">
              We&apos;re on a mission to make web deployment accessible, fast, and reliable for developers everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none mb-16"
          >
            <Card className="mb-8">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Zaynix Hosting was founded in 2024 with a simple vision: make web deployment as easy as a single click.
                  We saw developers struggling with complex deployment pipelines, confusing configurations, and unreliable hosting providers.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Today, we serve thousands of developers worldwide, helping them deploy their projects with confidence and speed.
                  Our platform combines cutting-edge technology with intuitive design to deliver the best deployment experience possible.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit">
                        <value.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
