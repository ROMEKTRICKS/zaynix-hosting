"use client";

import { motion } from "framer-motion";
import { Check, Globe, Github, Clock, Activity } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const mockProject = {
    name: "My Portfolio",
    slug: params.slug,
    subdomain: "portfolio",
    status: "deployed",
    description: "Personal portfolio website built with Next.js and TypeScript",
    deployedAt: "2024-01-15T10:30:00Z",
    buildTime: 45,
    url: `https://portfolio.zaynix.app`,
    repositoryUrl: "https://github.com/user/portfolio",
    framework: "Next.js 14",
    deployments: [
      { id: 1, status: "success", time: "2 hours ago", commit: "abc123", buildTime: 45 },
      { id: 2, status: "success", time: "1 day ago", commit: "def456", buildTime: 42 },
      { id: 3, status: "success", time: "3 days ago", commit: "ghi789", buildTime: 48 }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 cyber-glow">
                <Check className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{mockProject.name}</h1>
                <p className="text-lg text-slate-400">{mockProject.description}</p>
              </div>
            </div>

            <Card className="border-green-500/30 bg-green-500/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold text-white mb-1">
                      Project Deployed Successfully!
                    </div>
                    <div className="text-slate-300">
                      Your project is live and accessible at{" "}
                      <a
                        href={mockProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        {mockProject.url}
                      </a>
                    </div>
                  </div>
                  <Link href={mockProject.url} target="_blank">
                    <Button>Visit Site</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Status</CardDescription>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <CardTitle className="text-2xl text-green-400">Deployed</CardTitle>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Build Time</CardDescription>
                  <CardTitle className="text-2xl text-gradient">
                    {mockProject.buildTime}s
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Framework</CardDescription>
                  <CardTitle className="text-2xl text-gradient">
                    {mockProject.framework}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Globe className="h-5 w-5" />
                      <span>Domain</span>
                    </div>
                    <a
                      href={mockProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      {mockProject.subdomain}.zaynix.app
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Github className="h-5 w-5" />
                      <span>Repository</span>
                    </div>
                    <a
                      href={mockProject.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-sm truncate max-w-xs"
                    >
                      {mockProject.repositoryUrl}
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Clock className="h-5 w-5" />
                      <span>Last Deployed</span>
                    </div>
                    <span className="text-white">
                      {new Date(mockProject.deployedAt).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment History</CardTitle>
                  <CardDescription>Recent deployments for this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockProject.deployments.map((deployment) => (
                      <div
                        key={deployment.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-800"
                      >
                        <div className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <div>
                            <div className="text-sm font-medium text-white">
                              Commit {deployment.commit}
                            </div>
                            <div className="text-xs text-slate-400">{deployment.time}</div>
                          </div>
                        </div>
                        <div className="text-sm text-slate-400">
                          {deployment.buildTime}s
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
