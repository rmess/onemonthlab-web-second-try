export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nom trop court'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message trop court'),
  honeypot: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Honeypot anti-spam
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Message envoyé' })
    }

    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        message: data.message,
        status: 'new',
      },
    })

    // Send notification email
    try {
      const appUrl = process.env.NEXTAUTH_URL ?? ''
      let appHost = 'declic'
      try { appHost = new URL(appUrl).hostname?.split('.')?.[0] ?? 'declic' } catch {}

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E8734A; border-bottom: 2px solid #E8734A; padding-bottom: 10px;">Nouveau message de contact</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom :</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p style="margin: 10px 0;"><strong>Téléphone :</strong> ${data.phone}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Message :</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #E8734A;">
              ${data.message}
            </div>
          </div>
        </div>
      `

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_NOUVEAU_MESSAGE_DE_CONTACT,
          subject: `Nouveau message de ${data.name} - Déclic`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'contact@declic.fr',
          reply_to: data.email,
          sender_email: `noreply@${appHost}`,
          sender_alias: 'Déclic',
        }),
      })
    } catch (emailErr: any) {
      console.error('Email notification error:', emailErr)
    }

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès', id: contact.id })
  } catch (error: any) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { getServerSession } = await import('next-auth')
    const { authOptions } = await import('@/lib/auth')
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

    const contacts = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(contacts)
  } catch (error: any) {
    console.error('Get contacts error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
