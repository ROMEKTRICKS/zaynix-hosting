"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal projects and testing",
      features: [
        "5 projects",
        "100GB bandwidth",
        "Custom subdomain",
        "Community support",
        "Basic analytics",
        "SSL certificates"
      ]
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For professionals and growing teams",
      features: [
        "Unlimited projects",
        "1TB bandwidth",
        "Custom domains",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Build caching",
        "Deploy previews"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited bandwidth",
        "Dedicated support",
        "99.99% SLA guarantee",
        "Custom infrastructure",
        "Advanced security",
        "Single sign-on",
        "Compliance reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-slate-400">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col ${plan.popular ? 'border-cyan-500 cyber-glow' : ''}`}>
                  <CardHeader>
                    {plan.popular && (
                      <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
                        <Zap className="h-3 w-3" />
                        <span>Most Popular</span>
                      </div>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4 mb-2">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/dashboard">
                      <Button
                        className="w-full"
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Need a custom plan?</h3>
                <p className="text-slate-400 mb-6">
                  Contact our sales team for custom enterprise solutions tailored to your specific needs.
                </p>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
