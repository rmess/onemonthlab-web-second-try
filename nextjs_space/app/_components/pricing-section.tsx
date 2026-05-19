'use client'

import { useState } from 'react'
import { Check, Star, ArrowRight } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Pack Essai',
    price: 390,
    period: 'HT',
    description: 'Tester une idée sans risque',
    featured: false,
    installments: false,
    features: [
      'Landing page standalone',
      'Design responsive moderne',
      '1 mois de maintenance gratuite',
      'Mise en ligne en 1 semaine',
    ],
  },
  {
    name: 'Pack Déclic',
    price: 890,
    period: 'HT',
    description: 'Lancement officiel + premiers clients',
    featured: true,
    installments: true,
    installmentPrice: 222.5,
    features: [
      'Site complet 5 pages',
      'Intégration Google Maps',
      'Bouton WhatsApp',
      'Formation 45 min (utilisation + bases)',
      'Système de réservation (sync Google Calendar)',
      'Formulaire de contact + notifications',
      '3 mois de maintenance gratuite',
    ],
  },
  {
    name: 'Pack Accélérateur',
    price: 1690,
    period: 'HT',
    description: 'Scale avec confiance + positionnement premium',
    featured: false,
    installments: true,
    installmentPrice: 422.5,
    features: [
      'Tout du Pack Déclic +',
      'Coaching 1-to-1 (stratégie 10 premiers clients)',
      'Service de copywriting (pages, emails)',
      'Design logo simple',
      'Blog pour content marketing',
      '6 mois de maintenance gratuite',
    ],
  },
]

export function PricingSection() {
  const [showInstallments, setShowInstallments] = useState(false)

  return (
    <Section id="pricing">
      <Container size="lg">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Des offres honnêtes pour <span className="text-primary">tous les budgets</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pas de coûts cachés. Pas de mauvaises surprises. Juste des prix justes pour un travail de qualité.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-secondary rounded-full p-1">
              <button
                onClick={() => setShowInstallments(false)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  !showInstallments ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Paiement unique
              </button>
              <button
                onClick={() => setShowInstallments(true)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  showInstallments ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                En 4 fois
              </button>
            </div>
          </div>
        </FadeIn>

        <Stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan: any, i: number) => (
            <StaggerItem key={i}>
              <div
                className={`relative bg-card rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all h-full flex flex-col ${
                  plan.featured ? 'ring-2 ring-primary shadow-md' : ''
                }`}
              >
                {plan.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3">
                    <Star className="w-3 h-3 mr-1" /> Recommandé
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-foreground">
                      {showInstallments && plan.installments
                        ? `${plan.installmentPrice?.toFixed?.(0) ?? plan.price}€`
                        : `${plan.price}€`}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {showInstallments && plan.installments ? '/mois × 4' : plan.period}
                    </span>
                  </div>
                  {!plan.installments && showInstallments && (
                    <p className="text-xs text-muted-foreground mt-1">Paiement unique uniquement</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features?.map((feature: string, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? 'default' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <a href="#booking">
                    Choisir cette offre
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.4}>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Sans risque. Satisfaction garantie. Maintenance à partir de 29€/mois après la période gratuite.
          </p>
        </FadeIn>
      </Container>
    </Section>
  )
}
