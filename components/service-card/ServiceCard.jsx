import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoverCard } from "@/components/animated-wrapper/AnimatedWrapper";
import styles from "./ServiceCard.module.scss";

export function ServiceCard({ icon: Icon, title, description, href, buttonLabel = "Learn More" }) {
  return (
    <HoverCard>
      <article className={styles.card}>
        <div className={styles.icon}>
          <Icon size={28} aria-hidden />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {href && (
          <Link href={href} className={styles.action}>
            <span className={styles.link}>
              {buttonLabel} <ArrowRight size={16} />
            </span>
          </Link>
        )}
      </article>
    </HoverCard>
  );
}
