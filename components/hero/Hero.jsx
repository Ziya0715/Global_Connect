import Image from "next/image";
import { Button } from "@/components/ui/button/Button";
import { HeroBreadcrumbs } from "@/components/breadcrumbs/HeroBreadcrumbs";
import { FadeUp, SlideLeft } from "@/components/animated-wrapper/AnimatedWrapper";
import styles from "./Hero.module.scss";

export function Hero({
  variant = "home",
  tagline,
  heading,
  subheading,
  highlight,
  primaryCta,
  secondaryCta,
  backgroundImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  sideImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
}) {
  const isHome = variant === "home";
  const isPage = variant === "page";

  return (
    <section className={`${styles.hero} ${isPage ? styles.pageHero : ""}`} aria-label="Hero">
      <div className={styles.background}>
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden
        />
      </div>
      {isPage && <HeroBreadcrumbs />}
      <div className="container">
        <div className={styles.content}>
          <FadeUp className={styles.text}>
            {tagline && <span className={styles.tagline}>{tagline}</span>}
            <h1 className={styles.heading}>{heading}</h1>
            {subheading && <p className={styles.subheading}>{subheading}</p>}
            {highlight && <p className={styles.highlight}>{highlight}</p>}
            {(primaryCta || secondaryCta) && (
              <div className={styles.actions}>
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="light" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </FadeUp>
          {isHome && (
            <SlideLeft delay={0.2} className={styles.imageWrap}>
              <Image
                src={sideImage}
                alt="Construction, manufacturing and engineering workforce"
                fill
                sizes="(max-width: 900px) 480px, 50vw"
                priority
              />
            </SlideLeft>
          )}
        </div>
      </div>
    </section>
  );
}
