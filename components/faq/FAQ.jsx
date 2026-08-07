import { Accordion } from "@/components/ui/accordion/Accordion";
import { FadeUp } from "@/components/animated-wrapper/AnimatedWrapper";

export function FAQ({ title = "Frequently Asked Questions", items }) {
  return (
    <section className="section sectionAlt" aria-labelledby="faq-title">
      <div className="container">
        <FadeUp>
          <h2 id="faq-title" className="sectionTitle">{title}</h2>
          <p className="sectionSubtitle" style={{ marginBottom: "2rem" }}>
            Find answers to common questions about our services.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Accordion items={items} />
        </FadeUp>
      </div>
    </section>
  );
}
