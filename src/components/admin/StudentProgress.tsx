import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, Tag } from "lucide-react";

const StudentProgress = () => {
  const [selectedStudent, setSelectedStudent] = useState("MIS2023001");

  const students = [
    "MIS2023001",
    "MIS2023004",
    "MIS2023007",
    "MIS2023012",
    "MIS2023018",
  ];

  const studentData = {
    totalQuestions: 23,
    lastActive: "2 hours ago",
    topics: ["Machine Learning", "Data Analysis", "Research Methodology", "Statistical Testing"],
    aiSummary:
      "Student demonstrates strong engagement with research topics, particularly in machine learning applications. Shows consistent progress in understanding statistical methodologies. Recommended focus areas: Advanced ML algorithms and research paper structure.",
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Student Progress</h2>
        <p className="text-muted-foreground">Track individual student analytics and performance</p>
      </div>

      <Card className="p-6 mb-6">
        <label className="text-sm font-medium text-foreground mb-2 block">Select Student</label>
        <Select value={selectedStudent} onValueChange={setSelectedStudent}>
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Choose a student" />
          </SelectTrigger>
          <SelectContent>
            {students.map((student) => (
              <SelectItem key={student} value={student}>
                {student}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Card>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card className="p-6 hover:bg-card-hover transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">Total Questions</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{studentData.totalQuestions}</p>
        </Card>

        <Card className="p-6 hover:bg-card-hover transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-accent" />
            <p className="text-sm text-muted-foreground">Last Active</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{studentData.lastActive}</p>
        </Card>

        <Card className="p-6 hover:bg-card-hover transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <Tag className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">Topics Covered</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{studentData.topics.length}</p>
        </Card>
      </div>

      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Topic Analysis</h3>
        <div className="flex flex-wrap gap-2">
          {studentData.topics.map((topic, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-accent/5 border-accent">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI Performance Summary
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{studentData.aiSummary}</p>
      </Card>
    </div>
  );
};

export default StudentProgress;
