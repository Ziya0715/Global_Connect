import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/metadata";
import styles from "./Breadcrumbs.module.scss";

export function Breadcrumbs({ items = [], variant = "default" }) {
  if (!items.length) return null;

  const isOverlay = variant === "overlay";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <nav
      className={cn(styles.breadcrumbs, isOverlay && styles.overlay)}
      aria-label="Breadcrumb"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className={`container ${styles.list}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {index > 0 && (
                <ChevronRight size={14} className={styles.separator} aria-hidden />
              )}
              {isLast || !item.href ? (
                <span className={styles.current} aria-current="page">
                  {index === 0 && items.length > 1 ? (
                    <>
                      <Home size={14} aria-hidden />
                      <span className="sr-only">{item.label}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {index === 0 ? (
                    <>
                      <Home size={14} aria-hidden />
                      <span className="sr-only">{item.label}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
