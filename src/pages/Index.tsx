import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Shield, Users, FolderKanban } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const stats = [
    {
      title: "Current Role",
      value: "Admin",
      icon: Shield,
      color: "text-blue-600",
    },
    {
      title: "Total Projects",
      value: "12",
      icon: FolderKanban,
      color: "text-green-600",
    },
    {
      title: "Total Users",
      value: "48",
      icon: Users,
      color: "text-purple-600",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={cn("p-3 rounded-full bg-gray-100", stat.color)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">New Project Created</p>
                <p className="text-sm text-gray-500">Project A was created</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">User Registered</p>
                <p className="text-sm text-gray-500">New user joined the platform</p>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;