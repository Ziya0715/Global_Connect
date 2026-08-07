"use client";

import { useState } from "react";
import { JobCard, JobListEmpty } from "@/components/job-card/JobCard";
import { Dialog } from "@/components/ui/dialog/Dialog";
import { ApplyForm } from "@/components/apply-form/ApplyForm";
import { Pagination, JOBS_PER_PAGE } from "@/components/pagination/Pagination";
import styles from "./JobList.module.scss";

export default function JobList({ jobs, currentPage = 1, onPageChange }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const handleApply = (job) => {
    setSelectedJob(job);
    setDialogOpen(true);
  };

  if (jobs.length === 0) {
    return <JobListEmpty />;
  }

  return (
    <>
      <div className={styles.jobGrid}>
        {paginatedJobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={handleApply} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        totalItems={jobs.length}
        pageSize={JOBS_PER_PAGE}
      />

      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={`Apply for ${selectedJob?.title || "Position"}`}
      >
        <ApplyForm
          jobTitle={selectedJob?.title}
          onSuccess={() => setDialogOpen(false)}
        />
      </Dialog>
    </>
  );
}
