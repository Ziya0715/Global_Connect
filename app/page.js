import { Hero } from "@/components/hero/Hero";
import { SectionHeader, FeatureGrid } from "@/components/section-header/SectionHeader";
import { CountryCard } from "@/components/country-card/CountryCard";
import { ServiceCard } from "@/components/service-card/ServiceCard";
import { CtaSection } from "@/components/cta-section/CtaSection";
import { Accordion } from "@/components/ui/accordion/Accordion";
import { Button } from "@/components/ui/button/Button";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import countries from "@/data/countries.json";
import {
  ShieldCheck,
  Users,
  Zap,
  Globe,
  Briefcase,
  FileCheck,
  Award,
} from "lucide-react";
import styles from "./page.module.scss";

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Technical Screening",
    description: "Rigorous skill assessments and trade tests ensure only qualified candidates reach your project site.",
  },
  {
    icon: Users,
    title: "Trade Tested Candidates",
    description: "Every candidate undergoes practical trade testing aligned with international industry standards.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Streamlined documentation and visa processing for rapid workforce mobilization.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Active recruitment networks across Sri Lanka, Maldives, Singapore, and the Middle East.",
  },
];

const services = [
  {
    icon: Briefcase,
    title: "Overseas Recruitment",
    description:
      "Helping global employers hire skilled manpower while connecting candidates with international careers.",
    href: "/services/recruitment",
  },
  {
    icon: FileCheck,
    title: "Certificate Attestation",
    description:
      "MEA, HRD, Embassy and Apostille services for educational, personal and commercial documents.",
    href: "/services/certificate-attestation",
  },
  {
    icon: Award,
    title: "RA License Registration",
    description:
      "Helping startups and manpower agencies obtain Recruiting Agent License from MEA.",
    href: "/services/ra-license-registration",
  },
];

const employerItems = [
  { title: "Pre-screened Workforce", content: "All candidates undergo technical screening, trade testing, and background verification before deployment." },
  { title: "Fast Deployment", content: "Our streamlined process ensures candidates are mobilized within weeks, not months." },
  { title: "Industry-specific Hiring", content: "Specialized recruitment for construction, manufacturing, and engineering sectors." },
  { title: "Reliable Recruitment", content: "Proven track record of successful placements across 4 international markets." },
  { title: "Ethical Recruitment", content: "Transparent processes with no hidden fees — compliant with international labor standards." },
  { title: "Documentation & Medical Compliance", content: "Complete support for visa documentation, medical tests, and compliance requirements." },
];

const candidateItems = [
  { title: "International Job Placements", content: "Access verified overseas job opportunities in construction, manufacturing, and engineering." },
  { title: "Transparent Hiring", content: "Clear job descriptions, salary details, and contract terms with no hidden charges." },
  { title: "Career Growth", content: "Long-term career pathways with opportunities for skills upgrading and promotion." },
  { title: "Skill Based Selection", content: "Merit-based selection through trade tests and technical assessments." },
  { title: "Global Opportunities", content: "Work in Sri Lanka, Maldives, Singapore, and the Middle East with competitive packages." },
];

const employerCategories = ["Skilled", "Semi Skilled", "Unskilled", "Engineers", "Supervisors"];

export default function HomePage() {
  return (
    <>
      <Hero
        tagline="Global Recruitment Partner"
        heading="Building Global Teams with the Right Talent"
        subheading="Specialized in Professional Recruitment and Staffing Services for international organizations requiring skilled and dependable manpower."
        highlight="Skilled People. Global Opportunities. Reliable Recruitment."
        primaryCta={{ label: "Hire Talent", href: "/services/recruitment/employers" }}
        secondaryCta={{ label: "Find Jobs", href: "/services/recruitment/job-seekers" }}
      />

      <section className="section" aria-labelledby="why-choose">
        <div className="container">
          <SectionHeader
            title="Why Choose GlobalConnectra"
            subtitle="Trusted by international employers for quality workforce solutions."
          />
          <FeatureGrid items={whyChoose} />
        </div>
      </section>

      <section className="section sectionAlt" aria-labelledby="countries">
        <div className="container">
          <SectionHeader
            title="Countries We Work With"
            subtitle="Explore workforce opportunities across our key international markets."
          />
          <div className={styles.countryGrid}>
            {countries.map((country, i) => (
              <FadeUp key={country.slug} delay={i * 0.1}>
                <CountryCard {...country} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services">
        <div className="container">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive workforce and documentation solutions for global businesses."
          />
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" aria-labelledby="employers">
        <div className="container">
          <div className={styles.twoCol}>
            <FadeUp>
              <h2 id="employers" className="sectionTitle">For Employers</h2>
              <p className="sectionSubtitle" style={{ marginBottom: "1.5rem" }}>
                Hire pre-screened, trade-tested workforce for your international projects.
              </p>
              <Accordion items={employerItems} />
              <div className={styles.tags}>
                {employerCategories.map((cat) => (
                  <span key={cat} className={styles.tag}>{cat}</span>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <Button href="/services/recruitment/employers">Hire Workforce</Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <h2 className="sectionTitle">For Candidates</h2>
              <p className="sectionSubtitle" style={{ marginBottom: "1.5rem" }}>
                Start your overseas career with transparent, ethical recruitment.
              </p>
              <Accordion items={candidateItems} />
              <div style={{ marginTop: "1.5rem" }}>
                <Button href="/services/recruitment/job-seekers">Find Jobs</Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
