import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Calendar, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface StudentChatProps {
  studentId: string;
}

const StudentChat = ({ studentId }: StudentChatProps) => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Hello! I'm your AI Research Mentor. How can I help you with your research today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [showMeetingSuggestion, setShowMeetingSuggestion] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content:
          "That's an interesting question! Let me help you explore that topic. Based on your research pattern, I suggest we schedule a meeting to discuss this in more depth.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setShowMeetingSuggestion(true);
    }, 1000);
  };

  const handleRequestMeeting = () => {
    toast({
      title: "Meeting Requested",
      description: "Your meeting request has been sent to the admin.",
    });
    setShowMeetingSuggestion(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-foreground">AI Research Mentor</h2>
            <p className="text-xs text-muted-foreground">Student ID: {studentId}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => window.location.reload()}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
        {showMeetingSuggestion && (
          <Card className="mb-4 p-4 bg-accent/10 border-accent">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Meeting Suggested
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on your progress, a one-on-one meeting would be beneficial to discuss your research direction.
                </p>
              </div>
              <Button onClick={handleRequestMeeting} size="sm" className="bg-accent hover:bg-accent/90">
                Request Meeting
              </Button>
            </div>
          </Card>
        )}

        <Card className="flex-1 flex flex-col overflow-hidden">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-chat-user text-white"
                        : "bg-card border border-border text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.role === "user" ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask a research question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentChat;
