"use client";

import { useState, useMemo, useEffect } from "react";
import { Hero } from "@/components/hero/Hero";
import { SearchFilter } from "@/components/search-filter/SearchFilter";
import JobList from "@/components/job-list/JobList";
import jobs from "@/data/jobs.json";

export default function JobSeekersPage() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    country: "",
    category: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const allLocations = [...new Set(jobs.map((j) => j.location))];
  const allCountries = [...new Set(jobs.map((j) => j.country))];
  const allCategories = [...new Set(jobs.map((j) => j.category))];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.category.toLowerCase().includes(filters.search.toLowerCase());
      const matchLocation = !filters.location || job.location === filters.location;
      const matchCountry = !filters.country || job.country === filters.country;
      const matchCategory = !filters.category || job.category === filters.category;
      return matchSearch && matchLocation && matchCountry && matchCategory;
    });
  }, [filters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Hero
        variant="page"
        heading="Find Overseas Jobs"
        subheading="Browse verified job opportunities across Sri Lanka, Maldives, Singapore, and the Middle East."
        backgroundImage="https://images.unsplash.com/photo-1486312336929-30db660a1e61?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <SearchFilter
            filters={{ ...filters, allLocations, allCountries, allCategories }}
            onFilterChange={handleFilterChange}
            resultCount={filteredJobs.length}
          />

          <JobList
            jobs={filteredJobs}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
}
