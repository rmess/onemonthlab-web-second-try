'use client'

import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn } from '@/components/ui/animate'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Je n\'y connais rien en web, c\'est grave ?',
    a: 'Pas du tout ! C\'est même notre spécialité. On vous accompagne de A à Z et on vous explique tout en langage simple. Pas besoin de savoir coder ou de comprendre le "SEO" — on s\'en charge.',
  },
  {
    q: 'C\'est trop cher pour moi, non ?',
    a: 'Nos tarifs commencent à 390€ HT pour une landing page. C\'est un investissement, pas une dépense. Et pour les packs Déclic et Accélérateur, vous pouvez payer en 4 fois sans frais.',
  },
  {
    q: 'Combien de temps ça prend ?',
    a: 'En général, votre site est prêt en 3 semaines. La landing page du Pack Essai peut être prête en 1 semaine. On respecte nos délais.',
  },
  {
    q: 'Et si mon idée ne marche pas ?',
    a: 'C\'est pour ça qu\'on a créé le Pack Essai à 390€. Vous testez votre idée avec une landing page sans prendre de risque. Si ça marche, on passe à la vitesse supérieure.',
  },
  {
    q: 'Combien ça coûte vraiment, au total ?',
    a: 'Le prix affiché est le prix final. Pas de frais de setup, pas de "options obligatoires", pas de surprises à la facture. Après la période de maintenance gratuite, la maintenance démarre à 29€/mois si vous le souhaitez.',
  },
  {
    q: 'Je n\'ai vraiment pas le temps, comment ça se passe ?',
    a: 'On a besoin de vous pour 2-3 échanges de 30 minutes et la formation de 45 minutes. Le reste, c\'est notre travail. On s\'adapte à vos horaires.',
  },
  {
    q: 'Qu\'est-ce qui est inclus dans la maintenance ?',
    a: 'Hébergement, mises à jour de sécurité, corrections de bugs, petites modifications de contenu et support par email. Tout ce qu\'il faut pour que votre site tourne bien.',
  },
  {
    q: 'Je peux modifier mon site moi-même après ?',
    a: 'Oui ! On vous forme pour que vous puissiez gérer votre contenu en autonomie. Et si vous êtes bloqué, on est toujours là pour vous aider.',
  },
]

export function FaqSection() {
  return (
    <Section id="faq">
      <Container size="md">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Vos questions, nos <span className="text-primary">réponses honnêtes</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq: any, i: number) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </Section>
  )
}
