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

export default function App(){
  return (
  <HashRouter>
      <div className="backdrop-blur bg-white/60 sticky top-0 z-50">
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
            <Route path="/impressum" element={<Impressum/>} />
            <Route path="/datenschutz" element={<Datenschutz/>} />
          </Routes>
        </main>
        <Footer />
      </div>
  </HashRouter>
  )
}
