"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Rocket, Clock, Check, AlertCircle, Globe, Github, Upload } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";

interface Project {
  id: string;
  name: string;
  slug: string;
  subdomain: string;
  status: "pending" | "building" | "deployed" | "failed";
  lastDeployed: string;
  repositoryUrl?: string;
}

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [deployMethod, setDeployMethod] = useState<"github" | "zip">("github");
  const [formData, setFormData] = useState({
    projectName: "",
    subdomain: "",
    githubUrl: "",
  });

  const mockProjects: Project[] = [
    {
      id: "1",
      name: "My Portfolio",
      slug: "my-portfolio",
      subdomain: "portfolio",
      status: "deployed",
      lastDeployed: "2 hours ago",
      repositoryUrl: "https://github.com/user/portfolio"
    },
    {
      id: "2",
      name: "React Dashboard",
      slug: "react-dashboard",
      subdomain: "dashboard",
      status: "deployed",
      lastDeployed: "1 day ago",
      repositoryUrl: "https://github.com/user/dashboard"
    },
    {
      id: "3",
      name: "API Service",
      slug: "api-service",
      subdomain: "api",
      status: "building",
      lastDeployed: "Just now"
    }
  ];

  const handleDeploy = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Deploying:", formData);
    setShowModal(false);
  };

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "deployed":
        return <Check className="h-5 w-5 text-green-400" />;
      case "building":
        return <Clock className="h-5 w-5 text-cyan-400 animate-spin" />;
      case "failed":
        return <AlertCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Clock className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: Project["status"]) => {
    const styles = {
      deployed: "bg-green-500/10 text-green-400 border-green-500/30",
      building: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      failed: "bg-red-500/10 text-red-400 border-red-500/30",
      pending: "bg-slate-500/10 text-slate-400 border-slate-500/30"
    };

    return (
      <span className={`inline-flex items-center space-x-1 border rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}>
        {getStatusIcon(status)}
        <span className="capitalize">{status}</span>
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-slate-400">Manage your projects and deployments</p>
            </div>
            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="mt-4 md:mt-0 group"
            >
              <Plus className="mr-2 h-5 w-5" />
              New Deployment
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Projects</CardDescription>
                <CardTitle className="text-3xl text-gradient">
                  {mockProjects.length}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Active Deployments</CardDescription>
                <CardTitle className="text-3xl text-gradient">
                  {mockProjects.filter(p => p.status === "deployed").length}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Total Bandwidth</CardDescription>
                <CardTitle className="text-3xl text-gradient">245GB</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>View and manage all your deployed projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                        <Rocket className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {project.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Globe className="h-4 w-4" />
                            <span>{project.subdomain}.zaynix.app</span>
                          </div>
                          {project.repositoryUrl && (
                            <div className="flex items-center space-x-1">
                              <Github className="h-4 w-4" />
                              <span className="truncate max-w-xs">{project.repositoryUrl}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      {getStatusBadge(project.status)}
                      <span className="text-sm text-slate-400">
                        {project.lastDeployed}
                      </span>
                      <Link href={`/project/${project.slug}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="New Deployment"
        className="max-w-2xl"
      >
        <form onSubmit={handleDeploy} className="space-y-6">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setDeployMethod("github")}
              className={`flex-1 p-4 rounded-lg border transition-all ${
                deployMethod === "github"
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              <Github className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-medium">GitHub Repository</div>
              <div className="text-sm text-slate-400">Deploy from Git</div>
            </button>
            <button
              type="button"
              onClick={() => setDeployMethod("zip")}
              className={`flex-1 p-4 rounded-lg border transition-all ${
                deployMethod === "zip"
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              <Upload className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-white font-medium">Upload ZIP</div>
              <div className="text-sm text-slate-400">Upload files directly</div>
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Project Name
            </label>
            <Input
              type="text"
              placeholder="my-awesome-project"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Custom Subdomain
            </label>
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="myapp"
                value={formData.subdomain}
                onChange={(e) => setFormData({ ...formData, subdomain: e.target.value })}
                className="rounded-r-none"
                required
              />
              <span className="bg-slate-800 border border-l-0 border-slate-700 px-4 py-2 rounded-r-lg text-slate-400 text-sm">
                .zaynix.app
              </span>
            </div>
          </div>

          {deployMethod === "github" && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                GitHub Repository URL
              </label>
              <Input
                type="url"
                placeholder="https://github.com/username/repo"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                required
              />
            </div>
          )}

          {deployMethod === "zip" && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Upload ZIP File
              </label>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-300 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-slate-400">ZIP files up to 100MB</p>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Deploy Project
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
