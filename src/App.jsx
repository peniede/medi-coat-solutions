import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo from './pages/Demo'
import Download from './pages/Download'

export default function App(){
  return (
    <BrowserRouter>
      <div className="backdrop-blur bg-white/60 sticky top-0 z-50">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/demo" element={<Demo/>} />
            <Route path="/download" element={<Download/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
