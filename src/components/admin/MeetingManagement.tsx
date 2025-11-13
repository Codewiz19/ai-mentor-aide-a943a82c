import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MeetingRequest {
  id: string;
  studentId: string;
  requestedAt: Date;
  status: "pending" | "confirmed" | "completed";
  topic: string;
}

const MeetingManagement = () => {
  const { toast } = useToast();
  const [meetings, setMeetings] = useState<MeetingRequest[]>([
    {
      id: "1",
      studentId: "MIS2023004",
      requestedAt: new Date(),
      status: "pending",
      topic: "Research methodology discussion",
    },
    {
      id: "2",
      studentId: "MIS2023007",
      requestedAt: new Date(),
      status: "pending",
      topic: "Data analysis review",
    },
    {
      id: "3",
      studentId: "MIS2023001",
      requestedAt: new Date(),
      status: "confirmed",
      topic: "Thesis proposal feedback",
    },
    {
      id: "4",
      studentId: "MIS2023012",
      requestedAt: new Date(),
      status: "pending",
      topic: "Literature review guidance",
    },
    {
      id: "5",
      studentId: "MIS2023018",
      requestedAt: new Date(),
      status: "confirmed",
      topic: "Statistical analysis consultation",
    },
  ]);

  const handleConfirm = (id: string, studentId: string) => {
    setMeetings((prev) =>
      prev.map((meeting) =>
        meeting.id === id ? { ...meeting, status: "confirmed" as const } : meeting
      )
    );
    toast({
      title: "Meeting Confirmed",
      description: `Meeting with ${studentId} has been scheduled.`,
    });
  };

  const handleComplete = (id: string, studentId: string) => {
    setMeetings((prev) =>
      prev.map((meeting) =>
        meeting.id === id ? { ...meeting, status: "completed" as const } : meeting
      )
    );
    toast({
      title: "Meeting Completed",
      description: `Meeting with ${studentId} marked as complete.`,
    });
  };

  const pendingMeetings = meetings.filter((m) => m.status === "pending");
  const confirmedMeetings = meetings.filter((m) => m.status === "confirmed");

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Meeting Management</h2>
        <p className="text-muted-foreground">Handle student meeting requests and schedules</p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Pending Requests ({pendingMeetings.length})
          </h3>
          <div className="space-y-3">
            {pendingMeetings.map((meeting) => (
              <Card key={meeting.id} className="p-4 hover:bg-card-hover transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-foreground">{meeting.studentId}</p>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Pending
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{meeting.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      Requested {meeting.requestedAt.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleConfirm(meeting.id, meeting.studentId)}
                      className="bg-accent hover:bg-accent/90"
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Confirm
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-accent" />
            Confirmed Meetings ({confirmedMeetings.length})
          </h3>
          <div className="space-y-3">
            {confirmedMeetings.map((meeting) => (
              <Card key={meeting.id} className="p-4 hover:bg-card-hover transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-foreground">{meeting.studentId}</p>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Confirmed
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{meeting.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      Scheduled for {meeting.requestedAt.toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleComplete(meeting.id, meeting.studentId)}
                  >
                    Mark Complete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingManagement;
