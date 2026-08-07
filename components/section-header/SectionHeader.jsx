import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import styles from "./SectionHeader.module.scss";

export function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <FadeUp className={`${styles.header} ${align === "left" ? styles.left : ""}`}>
      <h2 className="sectionTitle">{title}</h2>
      {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
    </FadeUp>
  );
}

export function FeatureGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <FadeUp key={item.title} delay={i * 0.1}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <item.icon size={28} aria-hidden />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
