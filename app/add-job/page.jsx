"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { useState } from "react";

const addjob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobTitle || !companyName || !date || !status) {
      alert("Please fill in all fields");
      return;
    }
    console.log({ jobTitle, companyName, date, status });
    // Send data to backend
  };

  return (
    <form className="flex flex-col gap-4 space-y-4 max-w-md mx-auto" onSubmit={(e) => handleSubmit(e)}>
      <Input
        placeholder="Job Title"
        type="text"
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <Input
        placeholder="Company Name"
        type="text"
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <Input
        placeholder="Date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <Select onValueChange={(value) => setStatus(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Applied">Applied</SelectItem>
          <SelectItem value="Interviewing">Interviewing</SelectItem>
          <SelectItem value="Rejected">Rejected</SelectItem>
          <SelectItem value="Offer Recived">Offer Recived</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit">Add Job</Button>
    </form>
  );
};

export default addjob;
