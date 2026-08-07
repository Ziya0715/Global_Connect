"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/Website - Logo 1.png";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import styles from "./Navbar.module.scss";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Services",
    children: [
      {
        group: "Overseas Recruitment",
        links: [
          { href: "/services/recruitment/employers", label: "Employers" },
          { href: "/services/recruitment/job-seekers", label: "Job Seekers" },
        ],
      },
      { href: "/services/certificate-attestation", label: "Certificate Attestation" },
      { href: "/services/ra-license-registration", label: "RA License Registration" },
    ],
  },
  { href: "/countries", label: "Countries" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* <Link href="/" className={styles.logo} aria-label="GlobalConnectra Home">
          <span className={styles.logoIcon}>GC</span>
          <span>GlobalConnectra</span>
        </Link> */}
 <Link href="/" className={styles.logo} aria-label="GlobalConnectra Home">
  <Image
    src={logoImage}
    alt="GlobalConnectra Logo"
    priority
    className={styles.logoImage}
    width={200}
    height={200}
    sizes="(max-width: 480px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 200px"
  />
</Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={styles.navItem}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={styles.navLink}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`${styles.chevron} ${servicesOpen ? styles.open : ""}`}
                  />
                </button>
                <div className={`${styles.dropdown} ${servicesOpen ? styles.open : ""}`}>
                  {link.children.map((child) =>
                    child.group ? (
                      <div key={child.group} className={styles.dropdownGroup}>
                        <div className={styles.dropdownLabel}>{child.group}</div>
                        {child.links.map((sub) => (
                          <Link key={sub.href} href={sub.href} className={styles.dropdownLink}>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.actions}>
          <Button href="/services/recruitment/employers" size="sm">
            Hire Talent
          </Button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        {navLinks.map((link) =>
          link.children ? (
            <div key={link.label}>
              <button
                className={styles.mobileLink}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                {link.label}
              </button>
              {mobileServicesOpen &&
                link.children.map((child) =>
                  child.group ? (
                    <div key={child.group}>
                      <div className={styles.mobileGroupLabel}>{child.group}</div>
                      {child.links.map((sub) => (
                        <Link key={sub.href} href={sub.href} className={styles.mobileSubLink}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link key={child.href} href={child.href} className={styles.mobileSubLink}>
                      {child.label}
                    </Link>
                  )
                )}
            </div>
          ) : (
            <Link key={link.href} href={link.href} className={styles.mobileLink}>
              {link.label}
            </Link>
          )
        )}
        <div style={{ padding: "1rem var(--container-padding, 1rem)" }}>
          <Button href="/services/recruitment/employers" fullWidth>
            Hire Talent
          </Button>
        </div>
      </div>
    </header>
  );
}
