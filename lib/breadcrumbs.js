import countries from "@/data/countries.json";

const SEGMENT_LABELS = {
  about: "About Us",
  services: "Services",
  recruitment: "Overseas Recruitment",
  employers: "Employers",
  "job-seekers": "Job Seekers",
  "certificate-attestation": "Certificate Attestation",
  "ra-license-registration": "RA License Registration",
  countries: "Countries",
  contact: "Contact Us",
};

function formatSegment(segment) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getBreadcrumbItems(pathname) {
  if (!pathname || pathname === "/") return [];

  const items = [{ label: "Home", href: "/" }];
  const segments = pathname.split("/").filter(Boolean);
  let path = "";

  segments.forEach((segment, index) => {
    path += `/${segment}`;
    const isLast = index === segments.length - 1;

    let label = SEGMENT_LABELS[segment];

    if (!label && segments[index - 1] === "countries") {
      label = countries.find((country) => country.slug === segment)?.name;
    }

    if (!label) {
      label = formatSegment(segment);
    }

    items.push({
      label,
      href: isLast ? undefined : path,
    });
  });

  return items;
}
