"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UploadCloud } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function DatasetImportCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // Simulate file upload
      toast({
        title: "File Selected",
        description: `${selectedFile.name} ready for processing. (Upload simulation)`,
      });
      // In a real app, you would process the file here.
      // For now, just clear the selection.
      setSelectedFile(null);
      // Reset the input field value
      const fileInput = document.getElementById('datasetFile') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } else {
      toast({
        title: "No File Selected",
        description: "Please select a CSV or XLSX file to upload.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UploadCloud className="h-6 w-6 text-primary" />
          Dataset Import
        </CardTitle>
        <CardDescription>Upload your sales data (.csv, .xlsx) for analysis.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="datasetFile">Select Dataset</Label>
          <Input id="datasetFile" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handleFileChange} />
        </div>
        {selectedFile && (
          <p className="text-sm text-muted-foreground">Selected: {selectedFile.name}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          <UploadCloud className="mr-2 h-4 w-4" /> Upload and Process
        </Button>
      </CardFooter>
    </Card>
  );
}
