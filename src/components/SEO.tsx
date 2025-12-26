import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "service";
  image?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  noindex = false,
}: SEOProps) {
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
  const siteUrl = window.location.origin;
  const currentUrl = canonical ? `${siteUrl}${canonical}` : window.location.href;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-RS" />
      <meta name="geo.placename" content="Porto Alegre" />
      <meta name="geo.position" content="-30.1087;-51.3172" />
      <meta name="ICBM" content="-30.1087, -51.3172" />
    </Helmet>
  );
}
