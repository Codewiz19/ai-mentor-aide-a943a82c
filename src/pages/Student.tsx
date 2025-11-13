import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import StudentChat from "@/components/student/StudentChat";

const Student = () => {
  const [studentId, setStudentId] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (studentId.trim()) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold text-foreground">AI Research Mentor</h1>
              <p className="text-sm text-muted-foreground">Enter your Student ID to continue</p>
            </div>
          </div>
          <div className="space-y-4">
            <Input
              placeholder="Student ID (MIS)"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="text-center"
            />
            <Button onClick={handleLogin} className="w-full" size="lg">
              Access Dashboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return <StudentChat studentId={studentId} />;
};

export default Student;
