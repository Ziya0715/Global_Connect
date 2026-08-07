"use client";

import { Search } from "lucide-react";
import styles from "./SearchFilter.module.scss";

export function SearchFilter({ filters, onFilterChange, resultCount }) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="search" className={styles.label}>Search Jobs</label>
          <div style={{ position: "relative" }}>
            <Search size={18} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
            <input
              id="search"
              type="search"
              className={styles.input}
              placeholder="Job title, keyword..."
              value={filters.search}
              onChange={(e) => onFilterChange("search", e.target.value)}
              style={{ paddingLeft: "2.5rem", width: "100%" }}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="location" className={styles.label}>Location</label>
          <select
            id="location"
            className={styles.select}
            value={filters.location}
            onChange={(e) => onFilterChange("location", e.target.value)}
          >
            <option value="">All Locations</option>
            {[...new Set(filters.allLocations || [])].map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="country" className={styles.label}>Country</label>
          <select
            id="country"
            className={styles.select}
            value={filters.country}
            onChange={(e) => onFilterChange("country", e.target.value)}
          >
            <option value="">All Countries</option>
            {[...new Set(filters.allCountries || [])].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="category" className={styles.label}>Category</label>
          <select
            id="category"
            className={styles.select}
            value={filters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
          >
            <option value="">All Categories</option>
            {[...new Set(filters.allCategories || [])].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <p className={styles.results}>{resultCount} job{resultCount !== 1 ? "s" : ""} found</p>
    </div>
  );
}
