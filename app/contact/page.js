"use client";

import { useState } from "react";
import { Hero } from "@/components/hero/Hero";
import { Button } from "@/components/ui/button/Button";
import { EnquiryForm } from "@/components/enquiry-form/EnquiryForm";
import { Dialog } from "@/components/ui/dialog/Dialog";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "../page.module.scss";

export default function ContactPage() {
  const [employerDialogOpen, setEmployerDialogOpen] = useState(false);

  return (
    <>
      <Hero
        variant="page"
        heading="We Go Beyond Recruitment"
        subheading="Whether you're hiring workforce or seeking overseas opportunities, we're here to help."
        backgroundImage="https://images.unsplash.com/photo-1423666639043-f5600c068aba?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <div className={styles.largeCards}>
            <FadeUp>
              <div className={styles.infoCard}>
                <h3>Employers</h3>
                <p>Hire Skilled Workforce Today</p>
                <Button onClick={() => setEmployerDialogOpen(true)}>
                  Submit Enquiry
                </Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className={styles.infoCard}>
                <h3>Candidates</h3>
                <p>Start Your Overseas Career</p>
                <Button href="/services/recruitment/job-seekers">
                  Browse Jobs
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className={styles.contactGrid}>
            <FadeUp>
              <div className={styles.mapPlaceholder} role="img" aria-label="Google Map placeholder">
                Google Map — GlobalConnectra Office Location
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <div className={styles.benefitItem}>
                  <Phone size={18} />
                  +91 98765 43210
                </div>
                <div className={styles.benefitItem}>
                  <Mail size={18} />
                  info@globalconnectra.com
                </div>
                <div className={styles.benefitItem}>
                  <MapPin size={18} />
                  GlobalConnectra Services Pvt. Ltd., Chennai, Tamil Nadu, India
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <EnquiryForm
                variant="contact"
                title="Contact Us"
                subtitle="Send us a message and we'll respond within 24 hours."
              />
            </FadeUp>
          </div>
        </div>
      </section>

      <Dialog
        open={employerDialogOpen}
        onOpenChange={setEmployerDialogOpen}
        title="Employer Enquiry"
      >
        <EnquiryForm variant="employer" />
      </Dialog>
    </>
  );
}
