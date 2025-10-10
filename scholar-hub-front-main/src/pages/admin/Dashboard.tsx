import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import KPICard from "@/components/admin/KPICard";
import { Users, FileText, CheckCircle, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const recentActivities = [
    { id: 1, action: "New submission uploaded", user: "Yonas Berhane", time: "2 hours ago" },
    { id: 2, action: "Reviewer approved paper #24", user: "Dr. Sarah Johnson", time: "4 hours ago" },
    { id: 3, action: "New user registered", user: "Michael Chen", time: "5 hours ago" },
    { id: 4, action: "Submission status updated", user: "Admin", time: "6 hours ago" },
    { id: 5, action: "Review completed", user: "Prof. David Lee", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Admin Dashboard</h2>
              <p className="text-muted-foreground mt-1">Overview of your research management system</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <KPICard title="Total Users" value="1,234" icon={Users} trend="+12% from last month" />
              <KPICard title="Pending Submissions" value="48" icon={FileText} trend="8 new today" />
              <KPICard title="Completed Reviews" value="342" icon={CheckCircle} trend="+23 this week" />
              <KPICard title="Active Reviewers" value="67" icon={UserCheck} trend="12 online now" />
            </div>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          by {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
