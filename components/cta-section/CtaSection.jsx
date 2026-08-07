import { Button } from "@/components/ui/button/Button";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import styles from "./CtaSection.module.scss";

export function CtaSection({
  heading = "We build workforce solutions across the globe.",
  subheading,
  primaryCta = { label: "Hire Talent", href: "/services/recruitment/employers" },
  secondaryCta = { label: "Find Jobs", href: "/services/recruitment/job-seekers" },
}) {
  return (
    <section className={styles.cta} aria-label="Call to action">
      <div className="container">
        <FadeUp className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          {subheading && <p className={styles.subheading}>{subheading}</p>}
          <div className={styles.actions}>
            <Button href={primaryCta.href} size="lg">{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="light" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
