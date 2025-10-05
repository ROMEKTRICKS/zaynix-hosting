"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="h-6 w-6 text-cyan-400" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zaynix Hosting
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/admin">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
