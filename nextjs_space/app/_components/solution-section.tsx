'use client'

import { Heart, Eye, MessageSquare, Target } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const differentiators = [
  {
    icon: Heart,
    title: 'Support humain',
    description: 'Pas de chatbots, pas de répondeurs. Une vraie personne qui vous connaît et vous accompagne.',
  },
  {
    icon: Eye,
    title: 'Tarifs transparents',
    description: 'Le prix affiché est le prix final. Pas de frais cachés, pas de mauvaises surprises à la facturation.',
  },
  {
    icon: MessageSquare,
    title: 'Langage simple',
    description: 'On parle français, pas "tech". Vous comprendrez chaque étape sans avoir besoin d\'un dictionnaire.',
  },
  {
    icon: Target,
    title: 'Focus résultats',
    description: 'On ne compte pas les fonctionnalités : on compte vos clients. Votre succès est notre métrique.',
  },
]

export function SolutionSection() {
  return (
    <Section id="solution">
      <Container size="lg">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Déclic lève toutes ces <span className="text-primary">barrières</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Notre mission : rendre le web accessible à tous ceux qui ont une idée et l'envie de la concrétiser.
            </p>
          </div>
        </FadeIn>

        <Stagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.3}>
          <div className="mt-12 bg-accent/50 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto text-center">
            <p className="text-foreground italic leading-relaxed">
              "J'avais peur de me lancer. L'équipe Déclic m'a pris par la main, et en 3 semaines j'avais mes premiers clients. Simple, humain, efficace."
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">— Marie D., fleuriste à Sète</p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
