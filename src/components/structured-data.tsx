export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Golden Canadian Homes Inc.",
    "alternateName": "GCHI",
    "url": "https://goldencanadianhomes.ca",
    "description": "Ontario-based real estate developer focused on income-producing rentals and mixed-use projects for accredited and OM-eligible investors.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "ON"
    },
    "areaServed": {
      "@type": "State",
      "name": "Ontario",
      "containedInPlace": {
        "@type": "Country",
        "name": "Canada"
      }
    },
    "knowsAbout": [
      "Real Estate Investment",
      "Rental Properties",
      "Mixed-Use Development",
      "Ontario Real Estate"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  )
}

export function WebSiteStructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Golden Canadian Homes Inc.",
    "url": "https://goldencanadianhomes.ca",
    "description": "Invest in income-producing rentals and thoughtful developments across Ontario.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://goldencanadianhomes.ca/apply"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  )
}