"use client";

import { useState } from "react";
import JobList from "@/components/job-list/JobList";

export default function CountryJobsClient({ jobs }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <JobList
      jobs={jobs}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}
