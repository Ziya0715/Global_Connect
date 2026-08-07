import { notFound } from "next/navigation";
import Image from "next/image";
import { Accordion } from "@/components/ui/accordion/Accordion";
import { Button } from "@/components/ui/button/Button";
import { HeroBreadcrumbs } from "@/components/breadcrumbs/HeroBreadcrumbs";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";
import { createMetadata } from "@/lib/metadata";
import countries from "@/data/countries.json";
import jobs from "@/data/jobs.json";
import styles from "../../page.module.scss";
import countryHeroStyles from "./CountryHero.module.scss";
import CountryJobsClient from "./CountryJobsClient";

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};

  return createMetadata({
    title: `${country.name} Jobs & Opportunities`,
    description: country.description,
    path: `/countries/${slug}`,
    image: country.image,
  });
}

export default async function CountryPage({ params }) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  const countryJobs = jobs.filter((j) => j.country === country.name);

  const highlightItems = country.highlights.map((h) => ({
    title: h.title,
    content: h.content,
  }));

  return (
    <>
      <section className={countryHeroStyles.hero}>
        <Image
          src={country.image}
          alt={`${country.name} opportunities`}
          fill
          priority
          sizes="100vw"
          className={countryHeroStyles.image}
        />
        <div className={countryHeroStyles.overlay} />
        <HeroBreadcrumbs />
        <div className={`container ${countryHeroStyles.content}`}>
          <span className={countryHeroStyles.flag}>{country.flag}</span>
          <h1 className={countryHeroStyles.title}>{country.name}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeUp className={styles.contentSection}>
            <p>{country.description}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion items={highlightItems} />
          </FadeUp>
          <FadeUp delay={0.2} style={{ marginTop: "2rem", textAlign: "center" }}>
            <Button href="/services/recruitment/job-seekers" size="lg">
              Explore Opportunities
            </Button>
          </FadeUp>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <FadeUp>
            <h2 className="sectionTitle">Available Jobs in {country.name}</h2>
            <p className="sectionSubtitle" style={{ marginBottom: "2rem" }}>
              {countryJobs.length} position{countryJobs.length !== 1 ? "s" : ""} currently available.
            </p>
          </FadeUp>
          <CountryJobsClient jobs={countryJobs} />
        </div>
      </section>
    </>
  );
}
