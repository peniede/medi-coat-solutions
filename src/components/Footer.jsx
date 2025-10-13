import React from 'react'
import MediCoatLogo from './MediCoatLogo'

export default function Footer(){
  return (
  <footer className="mt-16 bg-white/60 backdrop-blur">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <MediCoatLogo />
          <div>
            <div className="font-semibold">MediCoat Solutions</div>
            <div className="text-slate-500 text-sm">© {new Date().getFullYear()} Alle Rechte vorbehalten</div>
          </div>
        </div>
        <div className="text-sm text-slate-600">Kontakt: info@medineu.example</div>
      </div>
    </footer>
  )
}
