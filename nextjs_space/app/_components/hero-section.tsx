'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Agence web bienveillante à Sète
            </div>
          </FadeIn>

          <SlideIn from="bottom" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              De l'idée au <span className="text-primary">premier client</span> en 3 semaines
            </h1>
          </SlideIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Sans jargon. Sans peur. Sans dépenser trop.
              <br className="hidden sm:block" />
              On vous accompagne de A à Z pour lancer votre activité en ligne.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8">
                <a href="#pricing">
                  Découvrir les offres
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="#booking">Diagnostic gratuit</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-sm text-muted-foreground">
              À partir de <span className="font-semibold text-foreground">390€ HT</span> · Paiement en 4 fois possible
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
