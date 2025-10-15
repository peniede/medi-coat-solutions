import React from 'react'

function Section({ icon, title, kicker, children, id }){
  return (
    <section id={id}>
      <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2">{title}</h2>
      <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      {kicker && <p className="text-slate-600 max-w-3xl">{kicker}</p>}
      <div className="mt-4 text-slate-700 leading-relaxed max-w-4xl">{children}</div>
    </section>
  )
}

function Bullet({ children }){
  return <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5">•</span><span>{children}</span></li>
}

function Overview(){
  const Card = ({ title, desc }) => (
    <div className="bg-white p-6 rounded-3xl hover:shadow-md transition" style={{border:"3px solid transparent",borderRadius:"1.5rem"}}>
      <h3 className="font-semibold inline-flex items-center gap-1">{title}</h3>
      {desc ? <p className="text-sm text-slate-700 mt-1">{desc}</p> : null}
    </div>
  )
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="PVD-Beschichten" desc="Unser Kerngeschäft: präzise, reproduzierbare Funktionsschichten." />
      <Card title="Strahlen zur Oberflächenoptimierung" desc="Perfekte Vorbereitung" />
      <Card title="Strategieberatung" desc="Prozessgestaltung von der Auswahl bis zur Integration." />
    </div>
  )
}

export default function Dienstleistungen(){
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="page-title">
      <h1 id="page-title" className="text-3xl md:text-4xl font-semibold">Dienstleistungen</h1>
      <div className="space-y-12 mt-8">
        <Overview />
        <Section id="pvd" title="PVD-Beschichten – unser Kerngeschäft" kicker="Im Mittelpunkt unserer Arbeit steht das auftragsbezogene PVD-Beschichten (Physical Vapour Deposition) von Kundenbauteilen.">
          <p>Mit diesem hochpräzisen Verfahren veredeln wir Oberflächen für die Medizintechnik, um höchste Anforderungen an Qualität, Funktionalität und Langlebigkeit zu erfüllen.</p>
          <p className="font-medium mt-4">Unsere Beschichtungen bieten:</p>
          <ul className="mt-2 space-y-2">
            <Bullet>Verbesserte Verschleißfestigkeit und Korrosionsbeständigkeit</Bullet>
            <Bullet>Gezielte Funktionalisierung der Oberfläche (z. B. Biokompatibilität)</Bullet>
            <Bullet>Reproduzierbare Ergebnisse für Serien- und Sonderfertigungen</Bullet>
          </ul>
        </Section>
        <Section id="strahlen" title="Strahlen zur Oberflächenoptimierung – die perfekte Vorbereitung" kicker="Vor der Beschichtung bieten wir bei Bedarf ein präzises Strahlen an, um die Bauteile optimal auf den PVD-Prozess vorzubereiten.">
          <ul className="space-y-2">
            <Bullet>Abtragen / Reinigen: Entfernen von Verunreinigungen</Bullet>
            <Bullet>Verdichten: Schaffen einer homogenen Oberflächenstruktur</Bullet>
            <Bullet>Antireflex-Optimierung: Gezielte Beeinflussung der optischen Eigenschaften</Bullet>
          </ul>
        </Section>
        <Section id="strategie" title="Strategieberatung – Ihr Weg zur optimalen Prozessgestaltung" kicker="Neben den technischen Dienstleistungen begleiten wir unsere Kunden auch auf einer strategischen Ebene.">
          <p>Wir beraten Unternehmen bei der Gestaltung und Optimierung von Prozessen im Bereich Oberflächenveredelung – von der Auswahl geeigneter Verfahren bis hin zur Integration in bestehenden Abläufen.</p>
        </Section>
      </div>
    </main>
  )
}
