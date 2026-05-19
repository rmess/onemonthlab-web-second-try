'use client'

import { Zap, MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <Zap className="w-5 h-5 text-primary" />
              Déclic
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Agence web bienveillante qui aide les artisans et entrepreneurs à passer de l'idée au premier client.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#solution" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors">Diagnostic gratuit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                27 rue Montmorency, 34200 Sète
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                contact@declic.fr
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +33 4 67 00 00 00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Déclic. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs text-background/50">
            <span>CGV</span>
            <span>Mentions légales</span>
            <span>Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
