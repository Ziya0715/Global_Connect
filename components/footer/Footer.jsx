import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Globe, MessageCircle } from "lucide-react";
import styles from "./Footer.module.scss";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/countries", label: "Countries" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services/recruitment/employers", label: "Overseas Recruitment" },
  { href: "/services/certificate-attestation", label: "Certificate Attestation" },
  { href: "/services/ra-license-registration", label: "RA License Registration" },
];

const countryLinks = [
  { href: "/countries/sri-lanka", label: "Sri Lanka" },
  { href: "/countries/maldives", label: "Maldives" },
  { href: "/countries/singapore", label: "Singapore" },
  { href: "/countries/middle-east", label: "Middle East" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>GC</span>
              <span>GlobalConnectra</span>
            </Link>
            <p className={styles.description}>
              Specialized in professional recruitment and staffing services for
              international organizations requiring skilled and dependable manpower.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Share2 size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Globe size={18} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <nav className={styles.links} aria-label="Footer quick links">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Services</h3>
            <nav className={styles.links} aria-label="Footer services">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <h3 className={styles.columnTitle} style={{ marginTop: "1.5rem" }}>
              Countries
            </h3>
            <nav className={styles.links} aria-label="Footer countries">
              {countryLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Contact Details</h3>
            <div className={styles.contactItem}>
              <Phone size={18} aria-hidden />
              <span>+91 98765 43210</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} aria-hidden />
              <span>info@globalconnectra.com</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} aria-hidden />
              <span>
                GlobalConnectra Services Pvt. Ltd.
                <br />
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} GlobalConnectra Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
