import React from 'react'
import Biokompatibilitaet from '../../components/Zertifizierungen/Biokompatibilität'
import Qualitaetsmanagement from '../../components/Zertifizierungen/Qualitaetsmanagement'
import Zertifikate from '../../components/Zertifizierungen/Zertifikate'

export default function Zertifizierung(){
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="page-title">
      <h1 id="page-title" className="text-3xl md:text-4xl font-semibold">Zertifizierung & Nachweise</h1>
      <p className="text-slate-600 mt-3 max-w-3xl">Informationen zu Biokompatibilität, Qualitätsmanagement und unseren Zertifikaten.</p>

      <div className="space-y-8 mt-8">
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
        <Biokompatibilitaet />
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
        <Qualitaetsmanagement />
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
        <Zertifikate />
      </div>
    </main>
  )
}
