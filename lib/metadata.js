const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://globalconnectra.com";
const SITE_NAME = "GlobalConnectra Services Pvt. Ltd.";

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export { SITE_URL, SITE_NAME };
