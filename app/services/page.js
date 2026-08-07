import { Hero } from "@/components/hero/Hero";
import { SectionHeader, FeatureGrid } from "@/components/section-header/SectionHeader";
import { ServiceCard } from "@/components/service-card/ServiceCard";
import { CtaSection } from "@/components/cta-section/CtaSection";
import { createMetadata } from "@/lib/metadata";
import styles from "../page.module.scss";
import {
  Briefcase,
  FileCheck,
  Award,
  Users,
  Search,
  Wrench,
  Stethoscope,
  FileText,
  Plane,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Our Services",
  description:
    "Explore GlobalConnectra's comprehensive services including overseas recruitment, certificate attestation, and RA license registration.",
  path: "/services",
});

const mainServices = [
  {
    icon: Briefcase,
    title: "Overseas Recruitment",
    description: "End-to-end recruitment for construction, manufacturing, and engineering workforce across global markets.",
    href: "/services/recruitment",
  },
  {
    icon: FileCheck,
    title: "Certificate Attestation",
    description: "MEA, HRD, Embassy and Apostille services for all document types.",
    href: "/services/certificate-attestation",
  },
  {
    icon: Award,
    title: "RA License Registration",
    description: "Complete assistance for obtaining Recruiting Agent License from MEA.",
    href: "/services/ra-license-registration",
  },
];

const processCards = [
  { icon: Users, title: "Workforce Sourcing", description: "Extensive candidate database and active sourcing across India." },
  { icon: Search, title: "Candidate Screening", description: "Technical interviews, background checks, and skill verification." },
  { icon: Wrench, title: "Trade Testing", description: "Practical trade tests aligned with international industry standards." },
  { icon: Stethoscope, title: "Medical Coordination", description: "GAMCA and other medical test scheduling and compliance." },
  { icon: FileText, title: "Documentation", description: "Visa processing, attestation, and complete travel documentation." },
  { icon: Plane, title: "Deployment", description: "Airport pickup coordination and on-site arrival support." },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="page"
        heading="Our Services"
        subheading="Comprehensive workforce and documentation solutions tailored for global businesses."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <div className={styles.industryTags}>
            <span className={styles.industryTag}>Construction</span>
            <span className={styles.industryTag}>Manufacturing</span>
          </div>
          <div className={styles.serviceGrid} style={{ marginTop: "2rem" }}>
            {mainServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            title="Recruitment Process"
            subtitle="Our end-to-end process ensures quality candidates reach your project on time."
          />
          <FeatureGrid items={processCards} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
