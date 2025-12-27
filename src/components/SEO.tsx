import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/constants";
import { truncateMeta, validateTitle, validateMetaDescription } from "@/lib/seo-helpers";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "service";
  image?: string;
  noindex?: boolean;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  noindex = false,
  keywords,
  author = BUSINESS_INFO.name,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  // Validate and truncate meta description
  const validatedDescription = truncateMeta(description, 155);
  const descriptionValidation = validateMetaDescription(validatedDescription);
  
  // Validate title
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
  const titleValidation = validateTitle(title);
  
  // Default keywords if not provided
  const defaultKeywords = "poda de árvores, remoção de árvores, poda Porto Alegre, jardinagem Porto Alegre, serviços de poda, poda profissional, remoção de árvores Porto Alegre, poda em condomínio, poda em empresas, rebaixamento de copas, extração de raízes, limpeza pós-poda";
  const metaKeywords = keywords || defaultKeywords;
  
  // Log warnings in development
  if (process.env.NODE_ENV === 'development') {
    if (titleValidation.warning) {
      console.warn(`SEO Title Warning: ${titleValidation.warning}`);
    }
    if (descriptionValidation.warning) {
      console.warn(`SEO Meta Description Warning: ${descriptionValidation.warning}`);
    }
  }
  
  // Safe window access for SSR compatibility
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://artesdoverde.com.br';
  const currentUrl = typeof window !== 'undefined' 
    ? (canonical ? `${siteUrl}${canonical}` : window.location.href)
    : (canonical ? `${siteUrl}${canonical}` : siteUrl);
  const ogImage = image || `${siteUrl}/og-image.jpg`;
  const imageSrc = image || `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={validatedDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={BUSINESS_INFO.name} />
      <meta name="language" content="pt-BR" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="-wjUHrDHupop-VPJjZL-plMfsHr_Jfzi2bExkgxI3Rg" />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={validatedDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={validatedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:src" content={ogImage} />
      <meta name="twitter:site" content="@artesdoverde" />
      <meta name="twitter:creator" content="@artesdoverde" />

      {/* Image Source */}
      <link rel="image_src" href={imageSrc} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-RS" />
      <meta name="geo.placename" content="Porto Alegre" />
      <meta name="geo.position" content="-30.1087;-51.3172" />
      <meta name="ICBM" content="-30.1087, -51.3172" />

      {/* Schema.org - Basic Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": BUSINESS_INFO.name,
            "url": siteUrl,
            "logo": `${siteUrl}/logo-verde_transparente.png`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": BUSINESS_INFO.address.street,
              "addressLocality": BUSINESS_INFO.address.city,
              "addressRegion": BUSINESS_INFO.address.state,
              "postalCode": BUSINESS_INFO.address.zip,
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": BUSINESS_INFO.phone,
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": "pt-BR"
            },
            "sameAs": [
              BUSINESS_INFO.googleBusinessUrl
            ]
          })
        }}
      />
    </Helmet>
  );
}
