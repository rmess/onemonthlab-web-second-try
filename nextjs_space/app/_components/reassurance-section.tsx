'use client'

import { CreditCard, Shield, UserCheck, Zap, ThumbsUp } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const reassurances = [
  {
    icon: CreditCard,
    title: 'Paiement flexible',
    description: 'Payez en 4 fois sans frais sur les packs Déclic et Accélérateur.',
  },
  {
    icon: Shield,
    title: 'Garantie sans jargon',
    description: 'Si vous ne comprenez pas quelque chose, on vous l\'explique autrement. Toujours.',
  },
  {
    icon: UserCheck,
    title: 'Support personnel',
    description: 'Un interlocuteur dédié, pas un robot. Vous méritez une vraie personne.',
  },
  {
    icon: Zap,
    title: 'Résultats rapides',
    description: 'Vos premiers clients en quelques semaines, pas en quelques mois.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfait ou remboursé',
    description: 'Si le résultat ne vous plaît pas, on travaille jusqu\'a votre satisfaction.',
  },
]

export function ReassuranceSection() {
  return (
    <Section className="bg-secondary/30">
      <Container size="lg">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Pourquoi nous faire <span className="text-primary">confiance</span> ?
            </h2>
          </div>
        </FadeIn>

        <Stagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reassurances.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <div className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
