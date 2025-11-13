import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

const AdminOverview = () => {
  const stats = [
    {
      label: "Active Students",
      value: "24",
      icon: Users,
      trend: "+3 this week",
      color: "text-primary",
    },
    {
      label: "Total Questions",
      value: "156",
      icon: MessageSquare,
      trend: "+12 today",
      color: "text-accent",
    },
    {
      label: "Pending Meetings",
      value: "5",
      icon: Calendar,
      trend: "2 for today",
      color: "text-primary",
    },
    {
      label: "Avg. Response Time",
      value: "2.3h",
      icon: TrendingUp,
      trend: "15% faster",
      color: "text-accent",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Monitor student activity and platform metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="p-6 hover:bg-card-hover transition-colors border-border"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </div>
              <div className={`p-3 rounded-lg bg-secondary ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { student: "MIS2023001", action: "Asked a question about methodology", time: "5 min ago" },
            { student: "MIS2023004", action: "Requested a meeting", time: "12 min ago" },
            { student: "MIS2023007", action: "Completed research milestone", time: "1 hour ago" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{activity.student}</p>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
              </div>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminOverview;
