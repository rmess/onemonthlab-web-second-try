'use client'

import { useState } from 'react'
import { Send, User, Mail, Phone, MessageSquare, Loader2, CheckCircle } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if ((formData.name?.length ?? 0) < 2) errs.name = 'Nom requis (min 2 caractères)'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email ?? '')) errs.email = 'Email invalide'
    if ((formData.message?.length ?? 0) < 10) errs.message = 'Message trop court (min 10 caractères)'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok && data?.success) {
        setSuccess(true)
        toast.success('Message envoyé avec succès !')
      } else {
        toast.error(data?.error ?? 'Erreur lors de l\'envoi')
      }
    } catch {
      toast.error('Erreur de connexion. Réessayez.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Section id="contact">
        <Container size="md">
          <FadeIn>
            <div className="bg-card rounded-xl p-8 sm:p-12 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message envoyé !</h3>
              <p className="text-muted-foreground mb-4">
                Merci pour votre message. On vous répond sous 24 heures, c'est promis.
              </p>
              <p className="text-sm text-muted-foreground">
                En attendant, vous pouvez déjà <a href="#booking" className="text-primary font-medium hover:underline">réserver un diagnostic gratuit</a>.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="contact" className="bg-secondary/30">
      <Container size="md">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Une question ? <span className="text-primary">Parlons-en.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pas de formulaire interminable. Juste l'essentiel pour qu'on puisse vous aider.
            </p>
          </div>
        </FadeIn>

        <SlideIn from="bottom" delay={0.15}>
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 shadow-sm space-y-5 max-w-xl mx-auto">
            {/* Honeypot */}
            <div className="sr-only" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e: any) => setFormData({ ...(formData ?? {}), honeypot: e?.target?.value ?? '' })}
              />
            </div>

            <div>
              <Label htmlFor="name" className="flex items-center gap-2 mb-1.5">
                <User className="w-4 h-4 text-muted-foreground" /> Votre nom
              </Label>
              <Input
                id="name"
                placeholder="Marie Dupont"
                value={formData.name}
                onChange={(e: any) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? '' })}
                variant={errors.name ? 'error' : 'default'}
                className="pl-4"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-1.5">
                <Mail className="w-4 h-4 text-muted-foreground" /> Votre email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="marie@exemple.fr"
                value={formData.email}
                onChange={(e: any) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? '' })}
                variant={errors.email ? 'error' : 'default'}
                className="pl-4"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center gap-2 mb-1.5">
                <Phone className="w-4 h-4 text-muted-foreground" /> Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="06 12 34 56 78"
                value={formData.phone}
                onChange={(e: any) => setFormData({ ...(formData ?? {}), phone: e?.target?.value ?? '' })}
                className="pl-4"
              />
            </div>

            <div>
              <Label htmlFor="message" className="flex items-center gap-2 mb-1.5">
                <MessageSquare className="w-4 h-4 text-muted-foreground" /> Votre message
              </Label>
              <Textarea
                id="message"
                placeholder="Parlez-nous de votre projet, de votre idée, de vos questions..."
                rows={4}
                value={formData.message}
                onChange={(e: any) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? '' })}
                variant={errors.message ? 'error' : 'default'}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Envoi en cours...</>
              ) : (
                <><Send className="w-4 h-4 mr-2" /> Envoyer le message</>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Vos données sont utilisées uniquement pour vous recontacter. Aucun spam.
            </p>
          </form>
        </SlideIn>
      </Container>
    </Section>
  )
}
