export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const bookingSchema = z.object({
  customerName: z.string().min(2, 'Nom trop court'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  date: z.string(),
  timeSlot: z.string(),
  serviceType: z.string().optional(),
  notes: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = bookingSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data
    const bookingDate = new Date(data.date)

    // Check for double booking
    const existing = await prisma.booking.findFirst({
      where: {
        date: bookingDate,
        timeSlot: data.timeSlot,
        status: { not: 'cancelled' },
      },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'Ce créneau est déjà réservé. Veuillez en choisir un autre.' },
        { status: 409 }
      )
    }

    const booking = await prisma.booking.create({
      data: {
        customerName: data.customerName,
        email: data.email,
        phone: data.phone ?? null,
        date: bookingDate,
        timeSlot: data.timeSlot,
        serviceType: data.serviceType ?? 'diagnostic',
        notes: data.notes ?? null,
        status: 'confirmed',
      },
    })

    // Send notification email
    try {
      const appUrl = process.env.NEXTAUTH_URL ?? ''
      let appHost = 'declic'
      try { appHost = new URL(appUrl).hostname?.split('.')?.[0] ?? 'declic' } catch {}

      const dateStr = bookingDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E8734A; border-bottom: 2px solid #E8734A; padding-bottom: 10px;">Nouvelle réservation de diagnostic</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom :</strong> ${data.customerName}</p>
            <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p style="margin: 10px 0;"><strong>Téléphone :</strong> ${data.phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Date :</strong> ${dateStr}</p>
            <p style="margin: 10px 0;"><strong>Créneau :</strong> ${data.timeSlot}</p>
            ${data.notes ? `<p style="margin: 10px 0;"><strong>Notes :</strong> ${data.notes}</p>` : ''}
          </div>
        </div>
      `

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_CONFIRMATION_DE_RSERVATION,
          subject: `Nouvelle réservation - ${data.customerName} - Déclic`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'contact@declic.fr',
          reply_to: data.email,
          sender_email: `noreply@${appHost}`,
          sender_alias: 'Déclic',
        }),
      })
    } catch (emailErr: any) {
      console.error('Booking email error:', emailErr)
    }

    return NextResponse.json({ success: true, message: 'Réservation confirmée', id: booking.id })
  } catch (error: any) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Erreur lors de la réservation' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const dateParam = url.searchParams.get('date')

    // Public endpoint: return booked slots for a given date
    if (dateParam) {
      const date = new Date(dateParam)
      const bookings = await prisma.booking.findMany({
        where: {
          date,
          status: { not: 'cancelled' },
        },
        select: { timeSlot: true },
      })
      return NextResponse.json(bookings?.map((b: any) => b?.timeSlot) ?? [])
    }

    // Admin endpoint: return all bookings
    const { getServerSession } = await import('next-auth')
    const { authOptions } = await import('@/lib/auth')
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

    const bookings = await prisma.booking.findMany({ orderBy: { date: 'desc' } })
    return NextResponse.json(bookings)
  } catch (error: any) {
    console.error('Get bookings error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
