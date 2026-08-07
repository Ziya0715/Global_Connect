import { Hero } from "@/components/hero/Hero";
import { SectionHeader } from "@/components/section-header/SectionHeader";
import { CountryCard } from "@/components/country-card/CountryCard";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import countries from "@/data/countries.json";
import styles from "../page.module.scss";

export const metadata = createMetadata({
  title: "Countries",
  description:
    "Explore workforce opportunities in Sri Lanka, Maldives, Singapore, and the Middle East with GlobalConnectra.",
  path: "/countries",
});

export default function CountriesPage() {
  return (
    <>
      <Hero
        variant="page"
        heading="Countries We Serve"
        subheading="Active recruitment networks across key international markets for construction, manufacturing, and engineering."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Explore Opportunities"
            subtitle="Select a country to learn about market opportunities and available jobs."
          />
          <div className={styles.countryGrid}>
            {countries.map((country, i) => (
              <FadeUp key={country.slug} delay={i * 0.1}>
                <CountryCard {...country} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
