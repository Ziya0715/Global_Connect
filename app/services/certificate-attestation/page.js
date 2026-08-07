import { Hero } from "@/components/hero/Hero";
import { EnquiryForm } from "@/components/enquiry-form/EnquiryForm";
import { FAQ } from "@/components/faq/FAQ";
import { CtaSection } from "@/components/cta-section/CtaSection";
import { Accordion } from "@/components/ui/accordion/Accordion";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import styles from "../../page.module.scss";
import { Shield, DollarSign, Clock, MapPin } from "lucide-react";

export const metadata = createMetadata({
  title: "Certificate Attestation Services",
  description:
    "MEA, HRD, Embassy and Apostille attestation services for educational, personal and commercial documents. Pan India service by GlobalConnectra.",
  path: "/services/certificate-attestation",
});

const serviceItems = [
  { title: "Educational Attestation", content: "Degree, diploma, and mark sheet attestation from HRD, MEA, and respective embassies for overseas employment and higher education." },
  { title: "Personal Attestation", content: "Birth certificate, marriage certificate, PCC, and other personal document attestation for visa and immigration purposes." },
  { title: "Commercial Attestation", content: "Company registration, power of attorney, invoices, and commercial document attestation for business operations abroad." },
  { title: "MEA Apostille", content: "Apostille certification for documents intended for Hague Convention member countries, processed through the Ministry of External Affairs." },
  { title: "Embassy Attestation", content: "Embassy-level attestation for UAE, Saudi Arabia, Qatar, Kuwait, and other destination countries." },
];

const whyChoose = [
  { icon: Shield, title: "Government Recognized", text: "Authorized processing through official government channels." },
  { icon: DollarSign, title: "Transparent Pricing", text: "Clear, upfront pricing with no hidden charges." },
  { icon: Clock, title: "Fast Turnaround", text: "Expedited processing with regular status updates." },
  { icon: MapPin, title: "Pan India Service", text: "Document pickup and delivery across all major cities." },
];

const faqItems = [
  { title: "How long does attestation take?", content: "Processing time varies by document type and destination country, typically ranging from 5 to 15 working days." },
  { title: "What documents are required?", content: "Original documents, passport copy, and authorization letter (if applicable). Specific requirements vary by service type." },
  { title: "Do you offer pickup and delivery?", content: "Yes, we offer door-to-door document pickup and delivery across major Indian cities." },
  { title: "Is MEA apostille different from embassy attestation?", content: "Yes. Apostille is for Hague Convention countries and is processed by MEA only. Embassy attestation is required for non-Hague countries." },
];

export default function CertificateAttestationPage() {
  return (
    <>
      <Hero
        variant="page"
        heading="Certificate Attestation Services"
        subheading="Complete MEA, HRD, Embassy and Apostille services for educational, personal and commercial documents."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <FadeUp className={styles.contentSection}>
            <h2 className="sectionTitle">Introduction</h2>
            <p>
              Document attestation is a critical step for overseas employment, higher education, and business
              operations abroad. GlobalConnectra provides end-to-end attestation services covering HRD verification,
              MEA authentication, embassy attestation, and apostille certification — ensuring your documents
              are legally recognized in your destination country.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Our Attestation Services</h2>
            <div style={{ marginTop: "1.5rem" }}>
              <Accordion items={serviceItems} />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Why Choose GlobalConnectra</h2>
            <div className={styles.whyGrid}>
              {whyChoose.map((item) => (
                <div key={item.title} className={styles.whyCard}>
                  <item.icon size={32} />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <FAQ items={faqItems} />

      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <FadeUp>
              <h2 className="sectionTitle">Get Started</h2>
              <p className="sectionSubtitle">
                Submit your attestation enquiry and our team will guide you through the process.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <EnquiryForm variant="attestation" title="Attestation Enquiry" />
            </FadeUp>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Need document attestation?"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={null}
      />
    </>
  );
}
