import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HoverCard } from "@/components/animated-wrapper/AnimatedWrapper";
import styles from "./CountryCard.module.scss";

export function CountryCard({ slug, name, flag, image, description }) {
  return (
    <HoverCard>
      <Link href={`/countries/${slug}`} className={styles.card}>
        <div className={styles.imageWrap}>
          <Image src={image} alt={`${name} workforce opportunities`} fill sizes="(max-width: 768px) 100vw, 33vw" />
          <span className={styles.flag} aria-hidden>{flag}</span>
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{name}</h3>
          {description && (
            <p className={styles.description}>
              {description.slice(0, 100)}...
            </p>
          )}
          <span className={styles.link}>
            Explore <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </HoverCard>
  );
}
