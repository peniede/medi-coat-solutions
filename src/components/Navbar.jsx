import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import MediCoatLogo from './MediCoatLogo'

export default function Navbar(){
  const [openMobile, setOpenMobile] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [newsOpen, setNewsOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const companyRef = useRef(null)
  const newsRef = useRef(null)
  const productRef = useRef(null)

  useEffect(() => {
    function onDocClick(e){
      if(companyRef.current && !companyRef.current.contains(e.target)){
        setCompanyOpen(false)
      }
      if (newsRef.current && !newsRef.current.contains(e.target)) setNewsOpen(false)
      if (productRef.current && !productRef.current.contains(e.target)) setProductOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <header className="backdrop-blur bg-gradient-to-r from-blue-900/0 via-blue-600/0 to-green-500/0 sticky top-0 z-50">
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
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="/standorte" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50" >Standorte</Link>
                <Link to="/team" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Team</Link>
                <Link to="/about" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Über uns</Link>
                <Link to="/unternehmen/zertifizierung" onClick={() => setCompanyOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Zertifizierung</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={newsRef}>
            <button
              onClick={() => setNewsOpen(v => !v)}
              aria-expanded={newsOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Aktuelles ▾
            </button>
            {newsOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="/blog" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setNewsOpen(false)}>Blog</Link>
                <Link to="/messeauftritte" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setNewsOpen(false)}>Messeauftritte</Link>
                <Link to="/pressemitteilungen" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setNewsOpen(false)}>Pressemitteilungen</Link>
                <Link to="/innovation-forschung" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setNewsOpen(false)}>Innovation / Forschung</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={productRef}>
            <button
              onClick={() => setProductOpen(v => !v)}
              aria-expanded={productOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Produkte ▾
            </button>
            {productOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="/produkte/portfolio" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProductOpen(false)}>Portfolio</Link>
                <Link to="/produkte/dienstleistungen" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProductOpen(false)}>Dienstleistungen</Link>
                <Link to="/produkte/downloadcenter" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProductOpen(false)}>Downloadcenter</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" className="px-4 py-2">Beratung anfragen</Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMobile(v => !v)}
            aria-expanded={openMobile}
            aria-label="Menü öffnen"
            className="p-2 rounded-md bg-slate-100"
          >
            {openMobile ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {openMobile && (
        <div className="md:hidden bg-white/80 backdrop-blur border-t">
          <div className="px-4 py-3 space-y-2">
            <div>
              <div className="font-medium">Unternehmen</div>
              <div className="mt-2 flex flex-col pl-3">
                <Link to="/standorte" onClick={() => setOpenMobile(false)} className="py-1">Standorte</Link>
                <Link to="/team" onClick={() => setOpenMobile(false)} className="py-1">Team</Link>
                <Link to="/about" onClick={() => setOpenMobile(false)} className="py-1">Über uns</Link>
                <Link to="/unternehmen/zertifizierung" onClick={() => setOpenMobile(false)} className="py-1">Zertifizierung</Link>
              </div>
            </div>

            <div>
              <div>
                <div className="font-medium">Aktuelles</div>
                <div className="mt-2 flex flex-col pl-3">
                  <Link to="/blog" onClick={() => { setOpenMobile(false); setNewsOpen(false); }} className="py-1">Blog</Link>
                  <Link to="/messeauftritte" onClick={() => { setOpenMobile(false); setNewsOpen(false); }} className="py-1">Messeauftritte</Link>
                  <Link to="/pressemitteilungen" onClick={() => { setOpenMobile(false); setNewsOpen(false); }} className="py-1">Pressemitteilungen</Link>
                  <Link to="/innovation-forschung" onClick={() => { setOpenMobile(false); setNewsOpen(false); }} className="py-1">Innovation / Forschung</Link>
                </div>
              </div>
            </div>

            <div>
            <div>
              <div className="font-medium">Produkte</div>
              <div className="mt-2 flex flex-col pl-3">
                <Link to="/produkte/portfolio" onClick={() => { setOpenMobile(false); setProductOpen(false); }} className="py-1">Portfolio</Link>
                <Link to="/produkte/dienstleistungen" onClick={() => { setOpenMobile(false); setProductOpen(false); }} className="py-1">Dienstleistungen</Link>
                <Link to="/produkte/downloadcenter" onClick={() => { setOpenMobile(false); setProductOpen(false); }} className="py-1">Downloadcenter</Link>
              </div>
            </div>
            </div>

            <div className="pt-2">
              <Link to="/contact" onClick={() => setOpenMobile(false)}>
                <Button className="w-full">Beratung anfragen</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
