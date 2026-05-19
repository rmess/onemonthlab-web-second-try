'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <Section className="bg-gradient-to-br from-primary/5 via-background to-accent/30">
      <Container size="md">
        <FadeIn>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Prêt à transformer votre idée en <span className="text-primary">réalité</span> ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
              Commençons par un diagnostic gratuit de 30 minutes. On discute de votre projet, sans engagement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8">
                <a href="#booking">
                  Réserver un diagnostic gratuit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="#pricing">Découvrir les offres</a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
