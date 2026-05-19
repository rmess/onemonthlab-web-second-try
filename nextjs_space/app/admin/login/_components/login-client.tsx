'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Zap, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export function AdminLoginClient() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setLoading(true)
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (result?.error) {
        toast.error('Identifiants invalides')
      } else {
        router.replace('/admin')
      }
    } catch {
      toast.error('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-foreground mb-2">
            <Zap className="w-7 h-7 text-primary" />
            Déclic Admin
          </div>
          <p className="text-sm text-muted-foreground">Connectez-vous pour gérer vos messages et réservations</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-sm space-y-4">
          <div>
            <Label htmlFor="login-email" className="flex items-center gap-2 mb-1.5">
              <Mail className="w-4 h-4 text-muted-foreground" /> Email
            </Label>
            <Input
              id="login-email"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e?.target?.value ?? '')}
              placeholder="admin@declic.fr"
              className="pl-4"
            />
          </div>
          <div>
            <Label htmlFor="login-password" className="flex items-center gap-2 mb-1.5">
              <Lock className="w-4 h-4 text-muted-foreground" /> Mot de passe
            </Label>
            <Input
              id="login-password"
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e?.target?.value ?? '')}
              placeholder="••••••••"
              className="pl-4"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Se connecter
          </Button>
        </form>

        <div className="mt-4 text-center">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Retour au site
          </a>
        </div>
      </div>
    </div>
  )
}
