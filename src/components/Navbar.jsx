import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import MediCoatLogo from './MediCoatLogo'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const companyRef = useRef(null)

  useEffect(() => {
    function onDocClick(e){
      if(companyRef.current && !companyRef.current.contains(e.target)){
        setCompanyOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <header className="backdrop-blur bg-white/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <MediCoatLogo />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-slate-700 items-center">
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => setCompanyOpen(v => !v)}
              aria-expanded={companyOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Unternehmen ▾
            </button>
            {companyOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
                <Link to="/standorte" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50" >Standorte</Link>
                <Link to="/team" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Team</Link>
                <Link to="/about" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Über uns</Link>
              </div>
            )}
          </div>

          <Link className="hover:text-slate-900" to="/contact">Kontakt</Link>
          <Link className="hover:text-slate-900" to="/download">Download</Link>
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" className="px-4 py-2">Beratung anfragen</Button>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Menü öffnen"
            className="p-2 rounded-md bg-slate-100"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            <div>
              <div className="font-medium">Unternehmen</div>
              <div className="mt-2 flex flex-col pl-3">
                <Link to="/standorte" onClick={() => setOpen(false)} className="py-1">Standorte</Link>
                <Link to="/team" onClick={() => setOpen(false)} className="py-1">Team</Link>
                <Link to="/about" onClick={() => setOpen(false)} className="py-1">Über uns</Link>
              </div>
            </div>

            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Kontakt</Link>
            <Link to="/download" onClick={() => setOpen(false)} className="py-2">Download</Link>

            <div className="pt-2">
              <Button to="/contact" className="w-full justify-center">Beratung anfragen</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
