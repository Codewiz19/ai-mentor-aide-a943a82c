import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  uploadedAt: Date;
  size: string;
}

const DocumentManagement = () => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([
    { id: "1", name: "Research_Guidelines_2024.pdf", uploadedAt: new Date(), size: "2.4 MB" },
    { id: "2", name: "Methodology_Framework.pdf", uploadedAt: new Date(), size: "1.8 MB" },
    { id: "3", name: "Citation_Standards.pdf", uploadedAt: new Date(), size: "956 KB" },
  ]);

  const handleDelete = (id: string, name: string) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    toast({
      title: "Document Deleted",
      description: `${name} has been removed.`,
    });
  };

  const handleUpload = () => {
    toast({
      title: "Upload Feature",
      description: "PDF upload will be connected to your backend at http://localhost:8000",
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Document Management</h2>
        <p className="text-muted-foreground">Upload and manage research documents for AI training</p>
      </div>

      <Card className="p-6 mb-6 border-dashed border-2 border-border hover:border-primary transition-colors">
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Upload Documents</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop PDF files here, or click to browse
          </p>
          <Button onClick={handleUpload}>
            <Upload className="w-4 h-4 mr-2" />
            Choose Files
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Uploaded Documents</h3>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-card-hover transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {doc.size} • {doc.uploadedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(doc.id, doc.name)}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DocumentManagement;
