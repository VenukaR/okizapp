import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OKIZ",
  "alternateName": "ZENT",
  "description": "Sri Lanka's first student-only discount platform, connecting university students with local shops through QR-powered, verified savings.",
  "url": "https://okiz.app",
  "logo": "https://okiz.app/img/logo.png",
  "image": "https://okiz.app/img/logo.png",
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressLocality": "Colombo",
      "addressRegion": "Western Province"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Sri Lanka"
  },
  "target": [
    {
      "@type": "Audience",
      "audienceType": "University Students"
    },
    {
      "@type": "Audience", 
      "audienceType": "Local Businesses"
    }
  ],
  "sameAs": [
    "https://facebook.com/okizapp",
    "https://twitter.com/okizapp",
    "https://instagram.com/okizapp",
    "https://linkedin.com/company/okizapp"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94-11-1234567",
    "contactType": "Customer Service",
    "email": "support@okiz.app",
    "availableLanguage": ["English", "Sinhala", "Tamil"]
  }
};

// Service Schema for the platform
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Student Discount Platform",
  "provider": {
    "@type": "Organization",
    "name": "OKIZ"
  },
  "description": "Connecting university students with exclusive discounts from local businesses through QR code verification.",
  "category": "Student Services",
  "audience": {
    "@type": "Audience",
    "audienceType": "University Students"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Sri Lanka"
  }
};

// Mobile Application Schema
export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "OKIZ",
  "description": "Student discount app for Sri Lankan university students",
  "operatingSystem": ["Android", "iOS"],
  "applicationCategory": "Shopping",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "LKR"
  },
  "provider": {
    "@type": "Organization",
    "name": "OKIZ"
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OKIZ",
  "url": "https://okiz.app",
  "description": "Sri Lanka's first student-only discount platform",
  "publisher": {
    "@type": "Organization",
    "name": "OKIZ"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://okiz.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// FAQ Schema for FAQ section
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get student discounts with OKIZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Download the OKIZ app, verify your student status with your university ID, browse available discounts, and show your QR code at participating stores to unlock exclusive savings."
      }
    },
    {
      "@type": "Question", 
      "name": "Which universities are supported by OKIZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OKIZ supports all major Sri Lankan universities including University of Colombo, University of Moratuwa, SLIIT, NSBM, NIBM, IIT, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "Is OKIZ free for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, OKIZ is completely free for students. Simply download the app and start saving with verified student discounts."
      }
    },
    {
      "@type": "Question",
      "name": "How can businesses partner with OKIZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Businesses can partner with OKIZ by joining our platform to offer student discounts. Contact us to learn about our partnership packages and reach over 300,000 verified students."
      }
    }
  ]
};