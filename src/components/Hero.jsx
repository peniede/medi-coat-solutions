import React from 'react'

export default function Hero(){
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white/0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-widest">
                Dünne, dichte Funktionsschichten
              </span>
              <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
                <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 bg-clip-text text-transparent">
                  Zertifizierte Oberflächenveredelung für sichere Medizinprodukte.
                </span>
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full my-6"></div>
              <p className="text-lg text-slate-600 max-w-2xl">
                Biokompatible PVD-Schichten für die Medizintechnik mit klarer Dokumentation und regulatorischer Absicherung.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-3xl border border-slate-200/60 shadow-sm bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600 text-3xl">⚙️</div>
                  <p className="text-sm text-slate-600">
                    Validierte Prozesse mit statistischer Kontrolle (SPC) – für reproduzierbare Ergebnisse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Warum PVD-Schichten in der Medizintechnik?
            </h2>
            <p className="mt-2 text-slate-600">
              PVD-Schichten verbessern die Funktion, Langlebigkeit und Sicherheit von Medizinprodukten.
            </p>
          </div>
          
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">🛡️</span>}
              title="Gesteigerte Patientensicherheit"
              points={["Geringere Partikelabgabe", "Beständigkeit gegen Sterilisation"]}
            />
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">⚗️</span>}
              title="Biokompatibilität"
              points={["Nachweise nach relevanten Normen (z. B. DIN EN ISO 10993-5)", "Glatte, leicht zu reinigende Oberflächen"]}
            />
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">🏆</span>}
              title="DIN EN ISO 13485"
              points={["Lückenlose Dokumentation und Nachverfolgbarkeit", "Risiko- & Änderungsmanagement"]}
            />
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">⚙️</span>}
              title="Vorteile von PVD-Schichten"
              points={[
                "Hohe Härte / Verschleißschutz",
                "Geringer Reibwert",
                "Korrosionsbeständigkeit",
                "Sterilisationsbeständig",
                "Biokompatibel und patientensicher"
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function AdvCard({ icon, title, points }){
  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-none w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white shadow-sm">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="flex-none select-none text-blue-500">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
