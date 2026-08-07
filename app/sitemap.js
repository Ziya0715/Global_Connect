import { SITE_URL } from "@/lib/metadata";
import countries from "@/data/countries.json";

export default function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/services/recruitment",
    "/services/recruitment/employers",
    "/services/recruitment/job-seekers",
    "/services/certificate-attestation",
    "/services/ra-license-registration",
    "/countries",
    "/contact",
  ];

  const countryPages = countries.map((c) => `/countries/${c.slug}`);

  const allPages = [...staticPages, ...countryPages];

  return allPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
