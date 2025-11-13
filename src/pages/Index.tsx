import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, LayoutDashboard, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            AI Research Mentor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students with intelligent research guidance and collaborative learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-8 hover:bg-card-hover transition-all hover:shadow-lg group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Student Portal</h2>
                <p className="text-muted-foreground mb-6">
                  Access your AI research mentor, ask questions, and schedule meetings with advisors
                </p>
              </div>
              <Link to="/student">
                <Button className="w-full group" size="lg">
                  Enter as Student
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-8 hover:bg-card-hover transition-all hover:shadow-lg group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <LayoutDashboard className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Admin Dashboard</h2>
                <p className="text-muted-foreground mb-6">
                  Manage documents, track student progress, and coordinate meetings
                </p>
              </div>
              <Link to="/admin">
                <Button className="w-full bg-accent hover:bg-accent/90 group" size="lg">
                  Enter as Admin
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
