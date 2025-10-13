import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import MediCoatLogo from './MediCoatLogo'

export default function Navbar(){
  return (
  <header className="backdrop-blur bg-white/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <MediCoatLogo />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-slate-700">
          <Link className="hover:text-slate-900" to="/">Home</Link>
          <Link className="hover:text-slate-900" to="/about">Über uns</Link>
          <Link className="hover:text-slate-900" to="/contact">Kontakt</Link>
          <Link className="hover:text-slate-900" to="/download">Download</Link>
        </nav>
        <div className="hidden md:block">
          <Button to="/contact" className="px-4 py-2">Beratung anfragen</Button>
        </div>
        <div className="md:hidden">
          <button className="p-2 rounded-md bg-slate-100">☰</button>
        </div>
      </div>
    </header>
  )
}
