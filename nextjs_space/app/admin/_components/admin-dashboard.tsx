'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Zap, Mail, Calendar, LogOut, Loader2, ArrowLeft, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ContactItem {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  status: string
  createdAt: string
}

interface BookingItem {
  id: string
  customerName: string
  email: string
  phone: string | null
  serviceType: string
  date: string
  timeSlot: string
  status: string
  notes: string | null
  createdAt: string
}

export function AdminDashboard() {
  const { data: session } = useSession() || {}
  const [contacts, setContacts] = useState<ContactItem[]>([])
  const [bookings, setBookings] = useState<BookingItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const [cRes, bRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/booking'),
      ])
      if (cRes.ok) {
        const cData = await cRes.json()
        setContacts(Array.isArray(cData) ? cData : [])
      }
      if (bRes.ok) {
        const bData = await bRes.json()
        setBookings(Array.isArray(bData) ? bData : [])
      }
    } catch (err: any) {
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch {
      return dateStr ?? ''
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">Déclic Admin</h1>
              <p className="text-xs text-muted-foreground">{session?.user?.email ?? ''}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/"><ArrowLeft className="w-4 h-4 mr-1" /> Site</a>
            </Button>
            <Button variant="outline" size="sm" onClick={() => fetchData?.()}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => signOut?.({ callbackUrl: '/admin/login' })}>
              <LogOut className="w-4 h-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <Tabs defaultValue="contacts">
            <TabsList className="mb-6">
              <TabsTrigger value="contacts" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Messages ({contacts?.length ?? 0})
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Réservations ({bookings?.length ?? 0})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              {(contacts?.length ?? 0) === 0 ? (
                <div className="bg-card rounded-xl p-8 text-center text-muted-foreground">
                  Aucun message pour le moment.
                </div>
              ) : (
                <div className="space-y-4">
                  {contacts?.map?.((c: ContactItem) => (
                    <div key={c?.id} className="bg-card rounded-xl p-5 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{c?.name ?? ''}</h3>
                          <p className="text-sm text-muted-foreground">{c?.email ?? ''}{c?.phone ? ` · ${c.phone}` : ''}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={c?.status === 'new' ? 'default' : 'secondary'}>
                            {c?.status === 'new' ? 'Nouveau' : c?.status ?? ''}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{formatDate(c?.createdAt ?? '')}</span>
                        </div>
                      </div>
                      <p className="text-sm text-foreground bg-accent/50 rounded-lg p-3">{c?.message ?? ''}</p>
                    </div>
                  )) ?? null}
                </div>
              )}
            </TabsContent>

            <TabsContent value="bookings">
              {(bookings?.length ?? 0) === 0 ? (
                <div className="bg-card rounded-xl p-8 text-center text-muted-foreground">
                  Aucune réservation pour le moment.
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings?.map?.((b: BookingItem) => (
                    <div key={b?.id} className="bg-card rounded-xl p-5 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{b?.customerName ?? ''}</h3>
                          <p className="text-sm text-muted-foreground">{b?.email ?? ''}{b?.phone ? ` · ${b.phone}` : ''}</p>
                        </div>
                        <Badge variant={b?.status === 'confirmed' ? 'default' : 'secondary'}>
                          {b?.status === 'confirmed' ? 'Confirmé' : b?.status ?? ''}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {(() => {
                            try { return new Date(b?.date ?? '').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) } catch { return '' }
                          })()}
                        </span>
                        <span>à {b?.timeSlot ?? ''}</span>
                        <span className="capitalize">{b?.serviceType ?? ''}</span>
                      </div>
                      {b?.notes && <p className="text-sm text-foreground mt-2 bg-accent/50 rounded-lg p-3">{b.notes}</p>}
                    </div>
                  )) ?? null}
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}
