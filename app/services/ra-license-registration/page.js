import { Hero } from "@/components/hero/Hero";
import { EnquiryForm } from "@/components/enquiry-form/EnquiryForm";
import { FAQ } from "@/components/faq/FAQ";
import { CtaSection } from "@/components/cta-section/CtaSection";
import { Accordion } from "@/components/ui/accordion/Accordion";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import styles from "../../page.module.scss";
import { CheckCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "RA License Registration Services",
  description:
    "Obtain your Recruiting Agent (RA) License from MEA with GlobalConnectra. Complete assistance for startups and manpower agencies.",
  path: "/services/ra-license-registration",
});

const whyChoose = [
  "Expert guidance through the entire RA license application process",
  "Document preparation and compliance review",
  "Liaison with MEA and relevant authorities",
  "Post-approval support and renewal assistance",
  "Transparent pricing with no hidden fees",
];

const eligibilityItems = [
  { title: "Registered Company", content: "Applicant must be a registered private limited company or LLP in India with valid incorporation documents." },
  { title: "Minimum Capital", content: "Minimum paid-up capital of ₹25 lakhs as per MEA guidelines for RA license applicants." },
  { title: "Office Space", content: "Registered office with minimum area requirements and valid lease/rent agreement." },
  { title: "Directors' Qualification", content: "Directors must meet educational and experience criteria as specified by MEA." },
];

const processTimeline = [
  { year: "Step 1", text: "Company registration and document preparation (1-2 weeks)" },
  { year: "Step 2", text: "Application submission to MEA with required fees (1 week)" },
  { year: "Step 3", text: "MEA verification and inspection (4-6 weeks)" },
  { year: "Step 4", text: "License issuance and compliance setup (1-2 weeks)" },
];

const requirements = [
  { document: "Certificate of Incorporation", details: "Valid company registration certificate" },
  { document: "MOA & AOA", details: "Memorandum and Articles of Association" },
  { document: "PAN Card", details: "Company PAN card copy" },
  { document: "GST Registration", details: "Valid GST registration certificate" },
  { document: "Bank Statement", details: "Latest 6 months bank statement showing minimum capital" },
  { document: "Office Proof", details: "Rent agreement and utility bills" },
  { document: "Director KYC", details: "Aadhar, PAN, and passport copies of all directors" },
  { document: "Experience Certificate", details: "Relevant industry experience documentation" },
];

const whoNeeds = [
  "Manpower recruitment agencies planning overseas placements",
  "Startups entering the international recruitment business",
  "Existing agencies upgrading or renewing their RA license",
  "Consulting firms expanding into recruitment services",
];

const faqItems = [
  { title: "What is an RA License?", content: "A Recruiting Agent (RA) License is a mandatory authorization from the Ministry of External Affairs (MEA) required for any company placing Indian workers abroad for employment." },
  { title: "How long is the license valid?", content: "The RA license is typically valid for 5 years and must be renewed before expiry." },
  { title: "What is the processing time?", content: "Complete processing typically takes 6-10 weeks from application submission, depending on MEA verification schedules." },
  { title: "Can a new company apply?", content: "Yes, newly registered companies can apply provided they meet the minimum capital and office space requirements." },
];

export default function RALicensePage() {
  return (
    <>
      <Hero
        variant="page"
        heading="RA License Registration Services"
        subheading="Complete assistance for obtaining Recruiting Agent License from the Ministry of External Affairs."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <FadeUp className={styles.contentSection}>
            <h2 className="sectionTitle">What is RA License?</h2>
            <p>
              The Recruiting Agent (RA) License is a mandatory authorization issued by the Ministry of External
              Affairs (MEA), Government of India, for any company or agency involved in recruiting Indian citizens
              for employment abroad. Without this license, placing workers overseas is illegal and can result in
              severe penalties.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Why Choose Us</h2>
            <div className={styles.benefitsList}>
              {whyChoose.map((item) => (
                <div key={item} className={styles.benefitItem}>
                  <CheckCircle size={18} />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Eligibility Criteria</h2>
            <div style={{ marginTop: "1.5rem" }}>
              <Accordion items={eligibilityItems} />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Process Timeline</h2>
            <div className={styles.timeline}>
              {processTimeline.map((item) => (
                <div key={item.year} className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <p className={styles.timelineText}>{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Requirements</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((req) => (
                  <tr key={req.document}>
                    <td>{req.document}</td>
                    <td>{req.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Who Needs It</h2>
            <div className={styles.benefitsList}>
              {whoNeeds.map((item) => (
                <div key={item} className={styles.benefitItem}>
                  <CheckCircle size={18} />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="section">
        <div className="container">
          <EnquiryForm
            variant="ra"
            title="RA License Enquiry"
            subtitle="Get expert guidance on obtaining your Recruiting Agent License."
          />
        </div>
      </section>

      <CtaSection
        heading="Ready to start your recruitment agency?"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={null}
      />
    </>
  );
}
