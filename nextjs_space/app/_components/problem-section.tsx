'use client'

import { AlertCircle, Ban, Clock, HelpCircle } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const fears = [
  {
    icon: AlertCircle,
    title: '"C\'est trop technique pour moi"',
    description: 'Vous n\'avez pas besoin de savoir coder. On s\'occupe de tout, vous vous occupez de votre métier.',
  },
  {
    icon: Ban,
    title: '"Je ne peux pas me permettre une agence web"',
    description: 'Nos tarifs commencent à 390€. Pas de surprises, pas de coûts cachés. Le prix affiché est le prix payé.',
  },
  {
    icon: Clock,
    title: '"Je n\'ai pas le temps d\'apprendre"',
    description: 'On vous forme en 45 minutes. Juste l\'essentiel, en langage simple. Vous serez autonome, promis.',
  },
  {
    icon: HelpCircle,
    title: '"Et si ça ne marche pas ?"',
    description: 'On commence petit pour tester. Si l\'idée fonctionne, on accélère ensemble. Zéro risque.',
  },
]

export function ProblemSection() {
  return (
    <Section id="problem" className="bg-secondary/30">
      <Container size="lg">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Vous avez l'idée. Vous avez <span className="text-primary">peur</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ces pensées vous empêchent de vous lancer ? On les connaît par cœur. Et on a des réponses.
            </p>
          </div>
        </FadeIn>

        <Stagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fears.map((fear: any, i: number) => (
            <StaggerItem key={i}>
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <fear.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{fear.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{fear.description}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}
