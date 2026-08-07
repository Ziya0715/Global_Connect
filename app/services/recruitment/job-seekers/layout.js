import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Find Overseas Jobs",
  description:
    "Browse verified overseas job opportunities in construction, manufacturing, and engineering across Sri Lanka, Maldives, Singapore, and the Middle East.",
  path: "/services/recruitment/job-seekers",
});

export default function JobSeekersLayout({ children }) {
  return children;
}
