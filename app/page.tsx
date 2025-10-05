"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Shield, Gauge, ArrowRight, Github, Mail, Check } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Deploy",
      description: "Deploy your projects in seconds with our optimized build pipeline."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    },
    {
      icon: Gauge,
      title: "Auto Scaling",
      description: "Automatic scaling to handle traffic spikes effortlessly."
    },
    {
      icon: Github,
      title: "Git Integration",
      description: "Connect your GitHub repos and deploy with every push."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 projects",
        "100GB bandwidth",
        "Custom subdomain",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      features: [
        "Unlimited projects",
        "1TB bandwidth",
        "Custom domains",
        "Priority support",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Unlimited bandwidth",
        "Dedicated support",
        "SLA guarantee",
        "Custom infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Powered by Next-Gen Infrastructure</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Deploy Your Sites</span>
              <br />
              <span className="text-white">In Seconds</span>
            </h1>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              The modern hosting platform built for developers. Deploy static and dynamic projects with lightning speed and zero configuration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="group">
                  Deploy Your Site Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16"
            >
              <Card className="glass-card cyber-glow max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
                      <div className="text-slate-400">Deployments</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                      <div className="text-slate-400">Uptime</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-gradient mb-2">2.5s</div>
                      <div className="text-slate-400">Avg Deploy Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zaynix?</h2>
            <p className="text-slate-400 text-lg">Everything you need to deploy and scale your projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-cyan-500/50 transition-colors">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit">
                      <feature.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 text-lg">Choose the plan that fits your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${plan.popular ? 'border-cyan-500 cyber-glow' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                        <Zap className="h-3 w-3" />
                        <span>Most Popular</span>
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/dashboard">
                      <Button
                        className="w-full"
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join thousands of developers already using Zaynix Hosting
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="group">
                Start Deploying Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold text-gradient">Zaynix</span>
              </div>
              <p className="text-slate-400 text-sm">
                Modern hosting platform built for the future of web development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/dashboard" className="text-slate-400 hover:text-cyan-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
                <li><Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Zaynix Hosting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
