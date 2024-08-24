"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const JobTable = () => {
  // Initial job data
  const initialJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      status: "Applied",
      applied_date: "2024-08-01",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Facebook",
      status: "Interviewing",
      applied_date: "2024-08-05",
    },
  ];

  // State to manage jobs
  const [jobs, setJobs] = useState(initialJobs);
  const [editingJobId, setEditingJobId] = useState(null); // Track editing job
  const [newStatus, setNewStatus] = useState(""); // Store new status

  // Function to handle saving the status change
  const saveStatus = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: newStatus } : job
      )
    );
    setEditingJobId(null); // Stop editing
  };

  // Function to delete a job
  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <Table>
      <TableCaption>Your job applications</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date Applied</TableHead>
          <TableHead>Company Name</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id}>
            <TableCell>{job.applied_date}</TableCell>
            <TableCell>{job.company}</TableCell>
            <TableCell>{job.title}</TableCell>
            <TableCell className="text-right">
              {editingJobId === job.id ? (
                <Select onValueChange={setNewStatus}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder={job.status} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Applied">Applied</SelectItem>
                    <SelectItem value="Interviewing">Interviewing</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                    <SelectItem value="Offer Received">
                      Offer Received
                    </SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                job.status
              )}
            </TableCell>
            <TableCell className="text-right">
              {editingJobId === job.id ? (
                <Button onClick={() => saveStatus(job.id)}>Save</Button>
              ) : (
                <Button onClick={() => setEditingJobId(job.id)}>Edit</Button>
              )}
              <Button
                variant="destructive"
                onClick={() => deleteJob(job.id)}
                className="ml-2"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JobTable;
