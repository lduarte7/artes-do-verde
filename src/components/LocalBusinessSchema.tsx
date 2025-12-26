import { BUSINESS_INFO } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${window.location.origin}/#organization`,
    name: BUSINESS_INFO.fullName,
    alternateName: BUSINESS_INFO.name,
    description: "Empresa especializada em poda e remoção de árvores em Porto Alegre e Região Metropolitana. Atendemos residências, condomínios e empresas com segurança e limpeza completa.",
    url: window.location.origin,
    telephone: BUSINESS_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -30.1087,
      longitude: -51.3172,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Porto Alegre",
        "@id": "https://www.wikidata.org/wiki/Q40269",
      },
      {
        "@type": "State",
        name: "Rio Grande do Sul",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -30.0346,
        longitude: -51.2177,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, PIX",
    currenciesAccepted: "BRL",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Poda e Remoção de Árvores",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Poda de Árvores",
            description: "Poda técnica para saúde e estética das suas árvores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remoção de Árvores",
            description: "Remoção segura de árvores mortas, doentes ou em risco",
          },
        },
      ],
    },
    sameAs: [
      BUSINESS_INFO.googleBusinessUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
