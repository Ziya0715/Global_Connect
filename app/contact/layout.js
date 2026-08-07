import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact GlobalConnectra for overseas recruitment, certificate attestation, and RA license registration services.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
