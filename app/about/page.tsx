"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Activity, TrendingUp, User, Globe } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      change: "+12%",
      icon: Users,
      color: "cyan"
    },
    {
      title: "Total Deployments",
      value: "8,432",
      change: "+23%",
      icon: Rocket,
      color: "blue"
    },
    {
      title: "Active Projects",
      value: "3,891",
      change: "+8%",
      icon: Globe,
      color: "green"
    },
    {
      title: "Bandwidth Used",
      value: "2.5TB",
      change: "+15%",
      icon: Activity,
      color: "purple"
    }
  ];

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", projects: 3, joined: "2 days ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", projects: 5, joined: "1 week ago" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", projects: 2, joined: "2 weeks ago" }
  ];

  const recentDeployments = [
    { id: 1, project: "Portfolio Site", user: "John Doe", status: "deployed", time: "5 min ago" },
    { id: 2, project: "E-commerce App", user: "Jane Smith", status: "building", time: "10 min ago" },
    { id: 3, project: "Blog Platform", user: "Bob Johnson", status: "deployed", time: "1 hour ago" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">Platform analytics and management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardDescription>{stat.title}</CardDescription>
                      <stat.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="flex items-center space-x-1 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-green-400">{stat.change}</span>
                      <span className="text-slate-400">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Newly registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-800"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                          <User className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{user.name}</div>
                          <div className="text-sm text-slate-400">{user.email}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-300">{user.projects} projects</div>
                        <div className="text-xs text-slate-400">{user.joined}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Deployments</CardTitle>
                <CardDescription>Latest deployment activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDeployments.map((deployment) => (
                    <div
                      key={deployment.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-800"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                          <Rocket className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{deployment.project}</div>
                          <div className="text-sm text-slate-400">by {deployment.user}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          deployment.status === "deployed" ? "text-green-400" : "text-cyan-400"
                        }`}>
                          {deployment.status}
                        </div>
                        <div className="text-xs text-slate-400">{deployment.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


Isko or badhiya se bana ke do mai ab se sab file dunga taki https://zaynix-hosting.vercel.app/ ye website or badhiya ban sake 
