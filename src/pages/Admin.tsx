import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, FileText, Users, Calendar } from "lucide-react";
import AdminOverview from "@/components/admin/AdminOverview";
import DocumentManagement from "@/components/admin/DocumentManagement";
import StudentProgress from "@/components/admin/StudentProgress";
import MeetingManagement from "@/components/admin/MeetingManagement";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">AI Research Mentor Platform</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview" className="gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Documents</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="meetings" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Meetings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <AdminOverview />
          </TabsContent>

          <TabsContent value="documents" className="space-y-4">
            <DocumentManagement />
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <StudentProgress />
          </TabsContent>

          <TabsContent value="meetings" className="space-y-4">
            <MeetingManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
