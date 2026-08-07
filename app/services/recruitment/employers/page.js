import { Hero } from "@/components/hero/Hero";
import { EnquiryForm } from "@/components/enquiry-form/EnquiryForm";
import { SectionHeader, FeatureGrid } from "@/components/section-header/SectionHeader";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import styles from "../../../page.module.scss";
import { CheckCircle, Building, Factory, HardHat, Users, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Hire Skilled Workforce",
  description:
    "Hire pre-screened, trade-tested workforce for construction and manufacturing projects. Submit your enquiry to GlobalConnectra.",
  path: "/services/recruitment/employers",
});

const processSteps = [
  { icon: Users, title: "Requirement Analysis", description: "Understanding your workforce needs, skills, and timeline." },
  { icon: HardHat, title: "Candidate Sourcing", description: "Active sourcing from our verified candidate database." },
  { icon: CheckCircle, title: "Screening & Testing", description: "Technical interviews and practical trade tests." },
  { icon: Clock, title: "Deployment", description: "Documentation, medical, and mobilization within weeks." },
];

const benefits = [
  "Pre-screened and trade-tested candidates",
  "Industry-specific hiring expertise",
  "Complete documentation support",
  "Medical coordination and compliance",
  "Fast deployment timelines",
  "Ethical and transparent processes",
  "Dedicated account management",
  "Post-deployment support",
];

const categories = ["Skilled", "Semi Skilled", "Unskilled", "Engineers", "Supervisors"];

export default function EmployersPage() {
  return (
    <>
      <Hero
        variant="page"
        heading="Hire Skilled Workforce"
        subheading="Partner with GlobalConnectra to access pre-screened, trade-tested manpower for your international projects."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <SectionHeader title="Recruitment Process" subtitle="A streamlined process from requirement to deployment." />
          <FeatureGrid items={processSteps} />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className={styles.twoCol}>
            <FadeUp>
              <h2 className="sectionTitle">Industries We Serve</h2>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#475569" }}>
                  <Building size={20} color="#0b1f3a" /> Construction
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#475569" }}>
                  <Factory size={20} color="#0b1f3a" /> Manufacturing
                </div>
              </div>

              <h2 className="sectionTitle" style={{ marginTop: "2rem" }}>Benefits</h2>
              <div className={styles.benefitsList}>
                {benefits.map((b) => (
                  <div key={b} className={styles.benefitItem}>
                    <CheckCircle size={18} />
                    {b}
                  </div>
                ))}
              </div>

              <h2 className="sectionTitle" style={{ marginTop: "2rem" }}>Workforce Categories</h2>
              <div className={styles.tags}>
                {categories.map((c) => (
                  <span key={c} className={styles.tag}>{c}</span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <EnquiryForm
                variant="employer"
                title="Employer Enquiry"
                subtitle="Tell us about your workforce requirements and we'll get back to you within 24 hours."
              />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
