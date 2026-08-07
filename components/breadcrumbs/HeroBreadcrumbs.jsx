"use client";

import { usePathname } from "next/navigation";
import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { Breadcrumbs } from "./Breadcrumbs";

export function HeroBreadcrumbs() {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  if (!items.length) return null;

  return <Breadcrumbs items={items} variant="overlay" />;
}
