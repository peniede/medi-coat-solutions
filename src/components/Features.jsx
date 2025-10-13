import React from 'react'

const items = [
  {title: 'Datenschutz & Sicherheit', desc: 'ISO-konforme Infrastruktur und role-based access.'},
  {title: 'Telemedizin & Integration', desc: 'Schnittstellen zu gängigen Praxissoftwares.'},
  {title: 'Analyse & Reporting', desc: 'Echtzeit-Dashboards zur Prozessoptimierung.'},
]

export default function Features(){
  return (
    <section id="features" className="mt-12 grid md:grid-cols-3 gap-6">
      {items.map((it)=> (
        <div key={it.title} className="p-6 bg-white rounded-2xl shadow-sm border">
          <h3 className="font-semibold text-lg">{it.title}</h3>
          <p className="mt-2 text-slate-600">{it.desc}</p>
        </div>
      ))}
    </section>
  )
}
