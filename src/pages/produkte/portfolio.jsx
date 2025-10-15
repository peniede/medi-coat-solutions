import React from 'react'
import { COATINGS, STORAGE_KEY } from './coatings.data'

// Minimal local FrameCard and SpecLine to avoid shared/ui dependency
function FrameCard({ children, active }){
  return <div className={`p-6 rounded-2xl ${active? 'ring-2 ring-blue-300':''} bg-white border border-slate-100`}>{children}</div>
}
function SpecLine({ label, value }){
  return <div className="flex justify-between text-sm text-slate-700"><span className="font-medium">{label}</span><span>{value}</span></div>
}

export default function Portfolio(){
  const [activeIdx, setActiveIdx] = React.useState(() => {
    try { const raw = localStorage.getItem(STORAGE_KEY); const n = raw!=null?parseInt(raw,10):0; return Number.isFinite(n)&&n>=0&&n<COATINGS.length?n:0; } catch { return 0 }
  })
  const [hoverIdx, setHoverIdx] = React.useState(null)
  const [lastHoverIdx, setLastHoverIdx] = React.useState(null)
  const listRef = React.useRef(null)
  const shownIdx = hoverIdx ?? activeIdx
  const shown = COATINGS[shownIdx] ?? COATINGS[0]

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Portfolio an PVD-Schichten</h1>
      <div className="h bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <p className="mt-3 text-slate-700 max-w-3xl">Beschreibung zum Portfolio (gekürzt).</p>

      <section className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
        <div ref={listRef} className="lg:col-span-5 space-y-3"
             onMouseLeave={() => { if (lastHoverIdx!==null){ setActiveIdx(lastHoverIdx); try{localStorage.setItem(STORAGE_KEY,String(lastHoverIdx));}catch{} } setHoverIdx(null); }}
             onBlur={(e)=>{ const next = e.relatedTarget || (e.nativeEvent && e.nativeEvent.relatedTarget); const leaving = !(listRef.current && next && listRef.current.contains(next)); if (leaving){ if (lastHoverIdx!==null){ setActiveIdx(lastHoverIdx); try{localStorage.setItem(STORAGE_KEY,String(lastHoverIdx));}catch{} } setHoverIdx(null); } }}
        >
          <ul role="listbox" aria-label="PVD-Schichten" className="space-y-3">
            {COATINGS.map((c,i)=>{
              const isActive = i === (hoverIdx ?? activeIdx)
              return (
                <li key={c.name}>
                  <FrameCard active={isActive}>
                    <button type="button" aria-current={i===activeIdx? "true": undefined} role="option" aria-selected={i===activeIdx}
                      aria-expanded={isActive} onClick={()=>{ setActiveIdx(i); try{localStorage.setItem(STORAGE_KEY,String(i));}catch{} }}
                      onMouseEnter={()=>{ setHoverIdx(i); setLastHoverIdx(i);} } onMouseLeave={()=>setHoverIdx(null)}
                      className="w-full text-left rounded-2xl px-2 py-1 transition">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-slate-900">{c.name}</span>
                        <span className="text-xs text-slate-500">{isActive? "Angezeigt" : "Details anzeigen"}</span>
                      </div>
                    </button>
                  </FrameCard>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <FrameCard>
            <h3 className="text-xl md:text-2xl font-semibold">{shown.name}</h3>
            <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-20 rounded-full mt-3 mb-5" />
            <div className="mt-2 space-y-2">
              <SpecLine label="Farbe:" value={shown.color} />
              <SpecLine label="Härte:" value={shown.hardness} />
              <SpecLine label="Schichtdicke:" value={shown.thickness} />
              <SpecLine label="Korrosionsbeständigkeit:" value={shown.corrosion} />
            </div>
            <div className="mt-5">
              <div className="text-sm font-medium text-slate-900 mb-2">Merkmale:</div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                {shown.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
            </div>
          </FrameCard>
        </div>
      </section>

      <section className="mt-12">
        <FrameCard>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-700">Bitte wählen Sie die passende PVD-Schicht und laden Sie das entsprechende Datenblatt herunter oder lassen Sie sich von uns beraten.</p>
          </div>
        </FrameCard>
      </section>
    </main>
  )
}
