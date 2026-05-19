'use client'

import { Lightbulb, Code2, Rocket } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Lightbulb,
    step: '1',
    title: 'L\'Idée',
    duration: 'Semaine 1',
    description: 'On discute de votre projet, on valide l\'idée ensemble et on crée un plan clair. Pas de jargon, juste de la clarté.',
    tasks: ['Discussion et compréhension', 'Validation du concept', 'Plan d\'action clair'],
  },
  {
    icon: Code2,
    step: '2',
    title: 'Le Site',
    duration: 'Semaine 2',
    description: 'On construit votre site, on intègre les outils essentiels et on vous forme en 45 minutes.',
    tasks: ['Construction du site', 'Intégration des outils', 'Formation 45 min'],
  },
  {
    icon: Rocket,
    step: '3',
    title: 'Les Clients',
    duration: 'Semaine 3',
    description: 'On lance ensemble, on ajuste si besoin et on vous accompagne pour vos premiers clients.',
    tasks: ['Mise en ligne', 'Ajustements', 'Accompagnement clients'],
  },
]

export function ProcessSection() {
  return (
    <Section id="process" className="bg-secondary/30">
      <Container size="lg">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              3 semaines. 3 étapes. <span className="text-primary">Vos premiers clients.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un processus simple et transparent, conçu pour vous faire gagner du temps et de la confiance.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step: any, i: number) => (
            <SlideIn key={i} from="bottom" delay={i * 0.15}>
              <div className="relative bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                  <span className="text-sm font-medium text-primary">{step.duration}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                <ul className="space-y-1.5">
                  {step.tasks?.map((task: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <a href="#booking">Voyons ensemble</a>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
