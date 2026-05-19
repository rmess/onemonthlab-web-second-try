'use client'

import { useState, useEffect, useCallback } from 'react'
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, Loader2, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { FadeIn } from '@/components/ui/animate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

const MONTH_NAMES = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
]

const DAY_NAMES = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

export function BookingSection() {
  const [step, setStep] = useState<'date' | 'form' | 'success'>('date')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(0)
  const [currentYear, setCurrentYear] = useState(0)
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const now = new Date()
    setCurrentMonth(now.getMonth())
    setCurrentYear(now.getFullYear())
    setMounted(true)
  }, [])

  const fetchBookedSlots = useCallback(async (date: Date) => {
    try {
      const dateStr = date.toISOString().split('T')[0]
      const res = await fetch(`/api/booking?date=${dateStr}`)
      const data = await res.json()
      setBookedSlots(Array.isArray(data) ? data : [])
    } catch {
      setBookedSlots([])
    }
  }, [])

  const handleDateSelect = useCallback((day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    if (date < now) return
    if (date.getDay() === 0 || date.getDay() === 6) return

    setSelectedDate(date)
    setSelectedTime('')
    fetchBookedSlots(date)
  }, [currentYear, currentMonth, fetchBookedSlots])

  const handleTimeSelect = useCallback((time: string) => {
    setSelectedTime(time)
  }, [])

  const validate = () => {
    const errs: Record<string, string> = {}
    if ((formData.customerName?.length ?? 0) < 2) errs.customerName = 'Nom requis'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email ?? '')) errs.email = 'Email invalide'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!validate() || !selectedDate || !selectedTime) return
    setLoading(true)
    try {
      const dateStr = selectedDate.toISOString().split('T')[0]
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: dateStr,
          timeSlot: selectedTime,
          serviceType: 'diagnostic',
        }),
      })
      const data = await res.json()
      if (res.ok && data?.success) {
        setStep('success')
        toast.success('Réservation confirmée !')
      } else {
        toast.error(data?.error ?? 'Erreur lors de la réservation')
      }
    } catch {
      toast.error('Erreur de connexion. Réessayez.')
    } finally {
      setLoading(false)
    }
  }

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  if (!mounted) {
    return (
      <Section id="booking">
        <Container size="md">
          <div className="h-96 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        </Container>
      </Section>
    )
  }

  if (step === 'success') {
    return (
      <Section id="booking">
        <Container size="md">
          <FadeIn>
            <div className="bg-card rounded-xl p-8 sm:p-12 shadow-sm text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Réservation confirmée !</h3>
              <p className="text-muted-foreground mb-2">
                Votre diagnostic gratuit est réservé pour le{' '}
                <span className="font-semibold text-foreground">
                  {selectedDate?.toLocaleDateString?.('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) ?? ''}
                </span>{' '}
                à <span className="font-semibold text-foreground">{selectedTime}</span>.
              </p>
              <p className="text-sm text-muted-foreground">
                On vous enverra un email de confirmation avec tous les détails.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
    )
  }

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <Section id="booking">
      <Container size="md">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Réservez votre <span className="text-primary">diagnostic gratuit</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              30 minutes pour discuter de votre projet. Sans engagement, sans pression.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm max-w-2xl mx-auto">
            {step === 'date' && (
              <div>
                {/* Calendar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={goToPrevMonth} className="p-2 rounded-lg hover:bg-accent transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <h3 className="font-display font-semibold text-foreground">
                      {MONTH_NAMES[currentMonth] ?? ''} {currentYear}
                    </h3>
                    <button onClick={goToNextMonth} className="p-2 rounded-lg hover:bg-accent transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAY_NAMES.map((d: string) => (
                      <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }, (_, i: number) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }, (_, i: number) => {
                      const day = i + 1
                      const date = new Date(currentYear, currentMonth, day)
                      const isPast = date < today
                      const isWeekend = date.getDay() === 0 || date.getDay() === 6
                      const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth && selectedDate?.getFullYear() === currentYear
                      const isDisabled = isPast || isWeekend

                      return (
                        <button
                          key={day}
                          onClick={() => !isDisabled && handleDateSelect(day)}
                          disabled={isDisabled}
                          className={`p-2 text-sm rounded-lg transition-all ${
                            isSelected
                              ? 'bg-primary text-primary-foreground font-semibold'
                              : isDisabled
                              ? 'text-muted-foreground/40 cursor-not-allowed'
                              : 'hover:bg-accent text-foreground cursor-pointer'
                          }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time slots */}
                {selectedDate && (
                  <div className="border-t border-border pt-5">
                    <h4 className="flex items-center gap-2 font-medium text-foreground mb-3">
                      <Clock className="w-4 h-4 text-primary" />
                      Choisir un créneau
                    </h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((time: string) => {
                        const isBooked = bookedSlots?.includes?.(time)
                        return (
                          <button
                            key={time}
                            onClick={() => !isBooked && handleTimeSelect(time)}
                            disabled={isBooked}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-primary text-primary-foreground'
                                : isBooked
                                ? 'bg-muted text-muted-foreground/50 cursor-not-allowed line-through'
                                : 'bg-accent hover:bg-primary/20 text-foreground cursor-pointer'
                            }`}
                          >
                            {time}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="mt-6">
                    <Button className="w-full" onClick={() => setStep('form')}>
                      Continuer <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <button
                  type="button"
                  onClick={() => setStep('date')}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Changer le créneau
                </button>

                <div className="bg-accent/50 rounded-lg p-3 text-sm text-foreground">
                  <span className="font-medium">
                    {selectedDate?.toLocaleDateString?.('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) ?? ''}
                  </span>{' '}
                  à <span className="font-medium">{selectedTime}</span>
                </div>

                <div>
                  <Label htmlFor="booking-name" className="flex items-center gap-2 mb-1.5">
                    <User className="w-4 h-4 text-muted-foreground" /> Votre nom
                  </Label>
                  <Input
                    id="booking-name"
                    placeholder="Marie Dupont"
                    value={formData.customerName}
                    onChange={(e: any) => setFormData({ ...(formData ?? {}), customerName: e?.target?.value ?? '' })}
                    variant={errors.customerName ? 'error' : 'default'}
                    className="pl-4"
                  />
                  {errors.customerName && <p className="text-xs text-destructive mt-1">{errors.customerName}</p>}
                </div>

                <div>
                  <Label htmlFor="booking-email" className="flex items-center gap-2 mb-1.5">
                    <Mail className="w-4 h-4 text-muted-foreground" /> Votre email
                  </Label>
                  <Input
                    id="booking-email"
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
                  <Label htmlFor="booking-phone" className="flex items-center gap-2 mb-1.5">
                    <Phone className="w-4 h-4 text-muted-foreground" /> Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
                  </Label>
                  <Input
                    id="booking-phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e: any) => setFormData({ ...(formData ?? {}), phone: e?.target?.value ?? '' })}
                    className="pl-4"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Réservation en cours...</>
                  ) : (
                    <><CalendarIcon className="w-4 h-4 mr-2" /> Confirmer la réservation</>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Diagnostic gratuit de 30 minutes. Sans engagement.
                </p>
              </form>
            )}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
