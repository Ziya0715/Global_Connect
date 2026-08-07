import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { createMetadata } from "@/lib/metadata";
import "@/styles/globals.scss";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = createMetadata({
  title: "Professional Recruitment & Staffing Services",
  description:
    "GlobalConnectra Services Pvt. Ltd. specializes in overseas recruitment, certificate attestation, and RA license registration for international organizations.",
  path: "/",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
