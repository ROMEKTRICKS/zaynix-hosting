"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Activity, TrendingUp, User, Globe, Search } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useTheme } from "next-themes";

// Chart.js रजिस्ट्रेशन
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const { theme, setTheme } = useTheme();
  const [stats, setStats] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentDeployments, setRecentDeployments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // डायनामिक डेटा फेचिंग (उदाहरण के लिए फेक API)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // मान लें यह API Zaynix Hosting के सर्वर से डेटा लाता है
        const response = await fetch("/api/admin-dashboard");
        const data = await response.json();
        setStats(data.stats);
        setRecentUsers(data.recentUsers);
        setRecentDeployments(data.recentDeployments);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // डिफॉल्ट डेटा (API फेल होने पर)
  const defaultStats = [
    { title: "Total Users", value: "1,245", change: "+12%", icon: Users, color: "cyan" },
    { title: "Total Deployments", value: "8,432", change: "+23%", icon: Rocket, color: "blue" },
    { title: "Active Projects", value: "3,891", change: "+8%", icon: Globe, color: "green" },
    { title: "Bandwidth Used", value: "2.5TB", change: "+15%", icon: Activity, color: "purple" },
  ];

  const defaultRecentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", projects: 3, joined: "2 days ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", projects: 5, joined: "1 week ago" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", projects: 2, joined: "2 weeks ago" },
  ];

  const defaultRecentDeployments = [
    { id: 1, project: "Portfolio Site", user: "John Doe", status: "deployed", time: "5 min ago" },
    { id: 2, project: "E-commerce App", user: "Jane Smith", status: "building", time: "10 min ago" },
    { id: 3, project: "Blog Platform", user: "Bob Johnson", status: "deployed", time: "1 hour ago" },
  ];

  // चार्ट डेटा (बैंडविड्थ यूज का उदाहरण)
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bandwidth Usage (TB)",
        data: [0.5, 1.0, 1.5, 2.0, 2.3, 2.5],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // सर्च फिल्टरिंग
  const filteredUsers = recentUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDeployments = recentDeployments.filter(
    (deployment) =>
      deployment.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deployment.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Platform analytics and management</p>
            </div>
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="outline"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>

          {/* सर्च बार */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search users or deployments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                aria-label="Search users or deployments"
              />
            </div>
          </div>

          {/* स्टैट्स कार्ड्स */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {(loading ? defaultStats : stats).map((stat, index) => (
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
                      <stat.icon className={`h-5 w-5 text-${stat.color}-400`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="flex items-center space-x-1 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-green-400">{stat.change}</span>
                      <span className="text-muted-foreground">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* बैंडविड्थ चार्ट */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Bandwidth Usage Trend</CardTitle>
              <CardDescription>Monthly bandwidth consumption</CardDescription>
            </CardHeader>
            <CardContent>
              <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </CardContent>
          </Card>

          {/* यूजर्स और डिप्लॉयमेंट्स */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Newly registered users</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading...</p>
                ) : filteredUsers.length > 0 ? (
                  <div className="space-y-4">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition"
                        role="button"
                        tabIndex={0}
                        onClick={() => alert(`View details for ${user.name}`)}
                        onKeyDown={(e) => e.key === "Enter" && alert(`View details for ${user.name}`)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                            <User className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-foreground">{user.projects} projects</div>
                          <div className="text-xs text-muted-foreground">{user.joined}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No users found.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Deployments</CardTitle>
                <CardDescription>Latest deployment activity</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading...</p>
                ) : filteredDeployments.length > 0 ? (
                  <div className="space-y-4">
                    {filteredDeployments.map((deployment) => (
                      <div
                        key={deployment.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition"
                        role="button"
                        tabIndex={0}
                        onClick={() => alert(`View deployment: ${deployment.project}`)}
                        onKeyDown={(e) => e.key === "Enter" && alert(`View deployment: ${deployment.project}`)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                            <Rocket className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{deployment.project}</div>
                            <div className="text-sm text-muted-foreground">by {deployment.user}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-sm font-medium ${
                              deployment.status === "deployed" ? "text-green-400" : "text-cyan-400"
                            }`}
                          >
                            {deployment.status}
                          </div>
                          <div className="text-xs text-muted-foreground">{deployment.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No deployments found.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
