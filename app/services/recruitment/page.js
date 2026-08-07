import { Hero } from "@/components/hero/Hero";
import { Button } from "@/components/ui/button/Button";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import styles from "../../page.module.scss";
import { Building2, UserSearch } from "lucide-react";

export const metadata = createMetadata({
  title: "Overseas Recruitment",
  description:
    "GlobalConnectra overseas recruitment services for employers and job seekers in construction, manufacturing, and engineering.",
  path: "/services/recruitment",
});

export default function RecruitmentPage() {
  return (
    <>
      <Hero
        variant="page"
        heading="Overseas Recruitment"
        subheading="Connecting global employers with skilled manpower and helping candidates build international careers."
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <FadeUp className={styles.contentSection}>
            <p>
              Our overseas recruitment division specializes in sourcing, screening, and deploying skilled
              workforce for construction, manufacturing, and engineering projects across Sri Lanka,
              Maldives, Singapore, and the Middle East. Whether you are an employer seeking reliable
              manpower or a candidate looking for international opportunities, we have tailored solutions for you.
            </p>
          </FadeUp>

          <div className={styles.largeCards}>
            <FadeUp>
              <div className={styles.largeCard}>
                <Building2 size={48} color="#0b1f3a" style={{ margin: "0 auto 1rem" }} />
                <h3>For Employers</h3>
                <p>
                  Hire pre-screened, trade-tested workforce for your international projects.
                  Fast deployment with complete documentation support.
                </p>
                <Button href="/services/recruitment/employers">Hire Skilled Workforce</Button>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className={styles.largeCard}>
                <UserSearch size={48} color="#0b1f3a" style={{ margin: "0 auto 1rem" }} />
                <h3>For Job Seekers</h3>
                <p>
                  Explore verified overseas job opportunities with transparent hiring processes
                  and no hidden charges.
                </p>
                <Button href="/services/recruitment/job-seekers">Find Overseas Jobs</Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
