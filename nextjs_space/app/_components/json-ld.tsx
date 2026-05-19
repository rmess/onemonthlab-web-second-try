export function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Déclic',
    description: 'Agence web bienveillante. De l\'idée au premier client en 3 semaines.',
    url: 'https://declic.fr',
    telephone: '+33467000000',
    email: 'contact@declic.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '27 rue Montmorency',
      addressLocality: 'Sète',
      postalCode: '34200',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.4035,
      longitude: 3.6948,
    },
    priceRange: '390€ - 1690€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
  }

  const services = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@type': 'LocalBusiness', name: 'Déclic' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Offres Déclic',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Pack Essai',
          price: '390',
          priceCurrency: 'EUR',
          description: 'Landing page standalone avec 1 mois maintenance gratuite',
        },
        {
          '@type': 'Offer',
          name: 'Pack Déclic',
          price: '890',
          priceCurrency: 'EUR',
          description: 'Site complet 5 pages avec formation, réservation et 3 mois maintenance',
        },
        {
          '@type': 'Offer',
          name: 'Pack Accélérateur',
          price: '1690',
          priceCurrency: 'EUR',
          description: 'Pack complet avec coaching, copywriting, logo et 6 mois maintenance',
        },
      ],
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Je n\'y connais rien en web, c\'est grave ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pas du tout ! C\'est même notre spécialité. On vous accompagne de A à Z et on vous explique tout en langage simple.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps ça prend ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En général, votre site est prêt en 3 semaines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien ça coûte vraiment ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le prix affiché est le prix final. À partir de 390€ HT.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
