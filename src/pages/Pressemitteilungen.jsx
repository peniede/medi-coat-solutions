import { useState } from 'react'

function GradientCard({ children }){
  return (
    <div className="p-4 rounded-xl" style={{
      border: '4px solid transparent',
      backgroundImage: 'linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.12), rgba(37,99,235,0.12), rgba(34,197,94,0.12))',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box'
    }}>{children}</div>
  )
}

export default function Pressemitteilungen(){
  const [open, setOpen] = useState(false)
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Pressemitteilungen</h1>
      <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <section className="mt-10">
        <p className="text-slate-700 leading-relaxed mt-4">Als junges Unternehmen veröffentlichen wir ausgewählte Meldungen.</p>
      </section>
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Aktuelle Mitteilungen</h3>
        <GradientCard>
          <h4 className="text-lg font-semibold underline cursor-pointer" onClick={()=>setOpen(!open)}>MediCoat Solutions präsentiert innovative PVD-Schichten...</h4>
          {open && (
            <>
              <p className="text-sm text-slate-600 mt-1">📅 15. März 2025 – Kieselbronn</p>
              <p className="text-slate-700 mt-4">Details ...</p>
            </>
          )}
        </GradientCard>
      </section>
    </section>
  )
}
