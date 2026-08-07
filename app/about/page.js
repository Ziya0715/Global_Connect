import { Hero } from "@/components/hero/Hero";
import { CtaSection } from "@/components/cta-section/CtaSection";
import { Accordion } from "@/components/ui/accordion/Accordion";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import styles from "../page.module.scss";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about GlobalConnectra — a trusted recruitment partner specializing in overseas workforce solutions for construction and manufacturing industries.",
  path: "/about",
});

const expertiseItems = [
  {
    title: "Construction",
    content: "Civil engineers, site supervisors, masons, scaffolders, electricians, and general construction workers for infrastructure and building projects worldwide.",
  },
  {
    title: "Manufacturing",
    content: "CNC operators, welders, fabricators, production operators, quality inspectors, and maintenance technicians for precision manufacturing facilities.",
  },
];

const timeline = [
  { year: "2015", text: "Founded with a vision to connect skilled Indian workforce with global opportunities." },
  { year: "2017", text: "Expanded operations to Sri Lanka and Maldives, establishing key employer partnerships." },
  { year: "2019", text: "Added certificate attestation and documentation services to support overseas deployment." },
  { year: "2021", text: "Entered Singapore and Middle East markets with specialized engineering recruitment." },
  { year: "2024", text: "Launched RA License Registration services and scaled to 500+ successful placements annually." },
];

const values = [
  { title: "Integrity", text: "Ethical recruitment practices with complete transparency in all dealings." },
  { title: "Excellence", text: "Rigorous screening and trade testing to deliver only the best candidates." },
  { title: "Reliability", text: "Consistent delivery of pre-screened workforce within committed timelines." },
  { title: "Partnership", text: "Long-term relationships built on trust with employers and candidates alike." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="page"
        heading="A Recruitment Partner You Can Trust"
        subheading="GlobalConnectra Services Pvt. Ltd. is a leading overseas recruitment agency dedicated to connecting skilled professionals with international career opportunities."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <FadeUp className={styles.contentSection}>
            <h2 className="sectionTitle">Company Introduction</h2>
            <p>
              GlobalConnectra Services Pvt. Ltd. was established with a clear mission: to bridge the gap between
              talented professionals in India and the growing demand for skilled manpower in international markets.
              With deep expertise in construction, manufacturing, and engineering recruitment, we have become a
              trusted partner for employers across Sri Lanka, Maldives, Singapore, and the Middle East.
            </p>
            <p>
              Our comprehensive approach covers the entire recruitment lifecycle — from candidate sourcing and
              trade testing to documentation, medical coordination, and deployment. We also offer certificate
              attestation and RA license registration services, making us a one-stop solution for global workforce needs.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section sectionAlt" aria-labelledby="mea-heading">
        <div className="container">
          <FadeUp>
            <div className={styles.meaSection}>
              <div className={styles.meaLogoWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mea-logo.svg"
                  alt="Ministry of External Affairs, Government of India"
                  className={styles.meaLogo}
                  width={280}
                  height={70}
                />
              </div>
              <div className={styles.meaContent}>
                <h2 id="mea-heading" className={styles.meaTitle}>
                  Ministry of External Affairs
                </h2>
                <p className={styles.meaText}>
                  GlobalConnectra works in alignment with the guidelines of the Ministry of External
                  Affairs (MEA), Government of India, for overseas recruitment, Recruiting Agent (RA)
                  license support, and MEA attestation services — ensuring compliant and ethical
                  workforce deployment.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <FadeUp>
              <h2 className="sectionTitle">Our Mission</h2>
              <p className="sectionSubtitle">
                To deliver reliable, ethical, and efficient recruitment solutions that empower businesses
                to build world-class teams while creating meaningful career opportunities for skilled professionals.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="sectionTitle">Our Vision</h2>
              <p className="sectionSubtitle">
                To be the most trusted global recruitment partner, recognized for quality workforce
                solutions, transparent processes, and long-term partnerships across international markets.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Our Expertise</h2>
            <p className="sectionSubtitle" style={{ marginBottom: "1.5rem" }}>
              Specialized recruitment across key industry verticals.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion items={expertiseItems} />
          </FadeUp>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseHeader}>Construction Roles</div>
              <div className={styles.expertiseBody}>
                <ul>
                  <li>Civil & Structural Engineers</li>
                  <li>Site Supervisors & Foremen</li>
                  <li>Masons, Scaffolders, Electricians</li>
                  <li>Crane Operators & Safety Officers</li>
                </ul>
              </div>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseHeader}>Manufacturing Roles</div>
              <div className={styles.expertiseBody}>
                <ul>
                  <li>CNC Operators & Welders</li>
                  <li>Production & Fabrication Workers</li>
                  <li>Quality Inspectors</li>
                  <li>HVAC & Maintenance Technicians</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Our Journey</h2>
            <div className={styles.timeline}>
              {timeline.map((item) => (
                <div key={item.year} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <p className={styles.timelineText}>{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section> */}

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Our Values</h2>
            <div className={styles.valuesGrid}>
              {values.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueText}>{v.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaSection
        heading="Ready to partner with us?"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={null}
      />
    </>
  );
}
