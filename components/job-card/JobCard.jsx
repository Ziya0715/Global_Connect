"use client";

import { MapPin, Briefcase, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import styles from "./JobCard.module.scss";

export function JobCard({ job, onApply }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{job.title}</h3>
        <span className={styles.type}>{job.type}</span>
      </div>
      <span className={styles.category}>{job.category}</span>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <MapPin size={16} aria-hidden />
          {job.location}, {job.country}
        </span>
        <span className={styles.metaItem}>
          <DollarSign size={16} aria-hidden />
          {job.salary}
        </span>
        <span className={styles.metaItem}>
          <Clock size={16} aria-hidden />
          {job.experience}
        </span>
        <span className={styles.metaItem}>
          <Briefcase size={16} aria-hidden />
          {job.category}
        </span>
      </div>
      <Button onClick={() => onApply(job)} size="sm">
        Apply Now
      </Button>
    </article>
  );
}

export function JobListEmpty() {
  return <p className={styles.empty}>No jobs found matching your criteria.</p>;
}
