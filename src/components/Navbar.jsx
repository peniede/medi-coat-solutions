import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import MediCoatLogo from './MediCoatLogo'

export default function Navbar(){
  const navigate = useNavigate()
  try { console.log('[Navbar] mount') } catch(e) {}
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

  // Helper for mobile navigation: log, navigate and close menus
  function navigateAndClose(path, closeSetter) {
    try {
      console.log('[Navbar] navigateAndClose ->', path)
    } catch (e) {
      // ignore console errors in environments that block it
    }
    if (typeof closeSetter === 'function') {
      closeSetter(false)
    }
    setOpenMobile(false)
    navigate(path)
  }

  // Fallback that sets the hash directly and closes menus (works even if anchor navigation is intercepted)
  function setHashAndClose(hashPath, closeSetter) {
    try {
      console.log('[Navbar] setHashAndClose ->', hashPath)
    } catch (e) {}
    if (typeof closeSetter === 'function') closeSetter(false)
    setOpenMobile(false)
    // avoid double navigation on touch+click
    if (setHashAndClose._locked) return
    setHashAndClose._locked = true
    setTimeout(() => { setHashAndClose._locked = false }, 500)
    // ensure leading #/
    if (typeof window !== 'undefined') {
      try {
        const hash = hashPath.startsWith('#') ? hashPath : `#${hashPath}`
        // Force navigation by assigning a full href (works even if simple hash change is ignored)
        const target = `${window.location.origin}${window.location.pathname}${hash}`
        window.location.assign(target)
      } catch (e) {
        // fallback to hash change
        window.location.hash = hashPath
      }
    }
  }

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
  <div className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur border-t z-[9999] pointer-events-auto">
          <div className="px-4 py-3 space-y-2">
            {/* Unternehmen (collapsible) */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setCompanyOpen(v => !v)}
                aria-expanded={companyOpen}
              >
                <span className="font-medium">Unternehmen</span>
                <span className="ml-2">{companyOpen ? '▾' : '▸'}</span>
              </button>
              {companyOpen && (
                <div className="mt-2 flex flex-col pl-3">
                  <a href="#/standorte" onPointerDown={() => setHashAndClose('#/standorte', setCompanyOpen)} onClick={() => setHashAndClose('#/standorte', setCompanyOpen)} className="py-1 block">Standorte</a>
                  <a href="#/team" onPointerDown={() => setHashAndClose('#/team', setCompanyOpen)} onClick={() => setHashAndClose('#/team', setCompanyOpen)} className="py-1 block">Team</a>
                  <a href="#/about" onPointerDown={() => setHashAndClose('#/about', setCompanyOpen)} onClick={() => setHashAndClose('#/about', setCompanyOpen)} className="py-1 block">Über uns</a>
                  <a href="#/unternehmen/zertifizierung" onPointerDown={() => setHashAndClose('#/unternehmen/zertifizierung', setCompanyOpen)} onClick={() => setHashAndClose('#/unternehmen/zertifizierung', setCompanyOpen)} className="py-1 block">Zertifizierung</a>
                </div>
              )}
            </div>

            {/* Aktuelles (collapsible) */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setNewsOpen(v => !v)}
                aria-expanded={newsOpen}
              >
                <span className="font-medium">Aktuelles</span>
                <span className="ml-2">{newsOpen ? '▾' : '▸'}</span>
              </button>
              {newsOpen && (
                <div className="mt-2 flex flex-col pl-3">
                  <a href="#/blog" onPointerDown={() => setHashAndClose('#/blog', setNewsOpen)} onClick={() => setHashAndClose('#/blog', setNewsOpen)} className="py-1 block">Blog</a>
                  <a href="#/messeauftritte" onPointerDown={() => setHashAndClose('#/messeauftritte', setNewsOpen)} onClick={() => setHashAndClose('#/messeauftritte', setNewsOpen)} className="py-1 block">Messeauftritte</a>
                  <a href="#/pressemitteilungen" onPointerDown={() => setHashAndClose('#/pressemitteilungen', setNewsOpen)} onClick={() => setHashAndClose('#/pressemitteilungen', setNewsOpen)} className="py-1 block">Pressemitteilungen</a>
                  <a href="#/innovation-forschung" onPointerDown={() => setHashAndClose('#/innovation-forschung', setNewsOpen)} onClick={() => setHashAndClose('#/innovation-forschung', setNewsOpen)} className="py-1 block">Innovation / Forschung</a>
                </div>
              )}
            </div>

            {/* Produkte (collapsible) */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2"
                onClick={() => setProductOpen(v => !v)}
                aria-expanded={productOpen}
              >
                <span className="font-medium">Produkte</span>
                <span className="ml-2">{productOpen ? '▾' : '▸'}</span>
              </button>
              {productOpen && (
                <div className="mt-2 flex flex-col pl-3">
                  <a href="#/produkte/portfolio" onPointerDown={() => setHashAndClose('#/produkte/portfolio', setProductOpen)} onClick={() => setHashAndClose('#/produkte/portfolio', setProductOpen)} className="py-1 block">Portfolio</a>
                  <a href="#/produkte/dienstleistungen" onPointerDown={() => setHashAndClose('#/produkte/dienstleistungen', setProductOpen)} onClick={() => setHashAndClose('#/produkte/dienstleistungen', setProductOpen)} className="py-1 block">Dienstleistungen</a>
                  <a href="#/produkte/downloadcenter" onPointerDown={() => setHashAndClose('#/produkte/downloadcenter', setProductOpen)} onClick={() => setHashAndClose('#/produkte/downloadcenter', setProductOpen)} className="py-1 block">Downloadcenter</a>
                </div>
              )}
            </div>

            <div className="pt-2">
              <a href="#/contact" onClick={() => setOpenMobile(false)}>
                <Button className="w-full">Beratung anfragen</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
