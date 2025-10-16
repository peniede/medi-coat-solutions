import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo from './pages/Demo'
import Download from './pages/Download'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Team from './pages/Team'
import Standorte from './pages/Standorte'
import Zertifizierung from './pages/unternehmen/zertifizierung'
import Aktuelles from './pages/Aktuelles'
import Blog from './pages/Blog'
import Messeauftritte from './pages/Messeauftritte'
import Pressemitteilungen from './pages/Pressemitteilungen'
import InnovationForschung from './pages/InnovationForschung'
import Portfolio from './pages/produkte/portfolio'
import Dienstleistungen from './pages/produkte/dienstleistungen'
import DownloadcenterProducts from './pages/produkte/downloadcenter'
import Arbeiten from './pages/karriere/arbeiten'
import Ausbildung from './pages/karriere/ausbildung'
import OffeneStellen from './pages/karriere/offene-stellen'
import Konformitaet from './pages/nachhaltigkeit/konformitaet'
import SozialeVerantwortung from './pages/nachhaltigkeit/soziale-verantwortung'
import Umweltmanagement from './pages/nachhaltigkeit/umweltmanagement'

export default function App(){
  return (
  <HashRouter>
      <div className="backdrop-blur bg-white/60 sticky top-0 z-50">
      <section className="bg-gradient-to-r from-blue-900/10 via-blue-600/10 to-green-500/10">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/demo" element={<Demo/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/standorte" element={<Standorte/>} />
            <Route path="/download" element={<Download/>} />
            <Route path="/produkte/portfolio" element={<Portfolio/>} />
            <Route path="/produkte/dienstleistungen" element={<Dienstleistungen/>} />
            <Route path="/produkte/downloadcenter" element={<DownloadcenterProducts/>} />
            <Route path="/unternehmen/zertifizierung" element={<Zertifizierung/>} />
            <Route path="/aktuelles" element={<Aktuelles/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/messeauftritte" element={<Messeauftritte/>} />
            <Route path="/pressemitteilungen" element={<Pressemitteilungen/>} />
            <Route path="/innovation-forschung" element={<InnovationForschung/>} />
            <Route path="/nachhaltigkeit/konformitaet" element={<Konformitaet/>} />
            <Route path="/nachhaltigkeit/soziale-verantwortung" element={<SozialeVerantwortung/>} />
            <Route path="/nachhaltigkeit/umweltmanagement" element={<Umweltmanagement/>} />
            <Route path="/karriere/arbeiten" element={<Arbeiten/>} />
            <Route path="/karriere/ausbildung" element={<Ausbildung/>} />
            <Route path="/karriere/offene-stellen" element={<OffeneStellen/>} />
            <Route path="/impressum" element={<Impressum/>} />
            <Route path="/datenschutz" element={<Datenschutz/>} />
          </Routes>
        </main>
        <Footer />
        </section>
      </div>
  </HashRouter>
  )
}
