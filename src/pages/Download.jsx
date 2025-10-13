import React, { useEffect, useState } from 'react'
import DocLink from '../components/DocLink'
import CategoryHeading from '../components/CategoryHeading'

export default function Download(){
  const [meta, setMeta] = useState({})

  useEffect(() => {
    let cancelled = false
    fetch('/downloads/metadata.json')
      .then(res => {
        if (!res.ok) throw new Error('metadata not found')
        return res.json()
      })
      .then(j => { if (!cancelled) setMeta(j) })
      .catch(() => { /* metadata is optional */ })
    return () => { cancelled = true }
  }, [])

  const size = (filename) => meta && meta[filename] ? meta[filename].size : undefined

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Downloads</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <CategoryHeading>Datenblätter</CategoryHeading>
        <DocLink title="TiN-mod – Der „Allrounder“" desc="Vielseitig einsetzbar..." href="/downloads/datenblatt-tin-mod.pdf" size={size('datenblatt-tin-mod.pdf')} />
        <DocLink title="CrN-mod – Die „Erfahrene“" desc="Robust, langlebig..." href="/downloads/datenblatt-crn-mod.pdf" size={size('datenblatt-crn-mod.pdf')} />
  <DocLink title={'ZrN – Die „Unterschätzte“'} desc="Besondere Eigenschaften..." href="/downloads/datenblatt-zrn.pdf" size={size('datenblatt-zrn.pdf')} />
        <DocLink title="CrN‑MC – Die „Starke“" desc="Maximale Belastbarkeit..." href="/downloads/datenblatt-crn-mc.pdf" size={size('datenblatt-crn-mc.pdf')} />
        <DocLink title="DLC – Der „Diamant“ (externer Partner)" desc="Elegant und widerstandsfähig" href="/downloads/datenblatt-dlc.pdf" size={size('datenblatt-dlc.pdf')} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <CategoryHeading>Sonstige Dokumente</CategoryHeading>
        <DocLink title="Begleitschein für das Beschichtungsgut" href="/downloads/begleitschein-beschichtungsgut.pdf" size={size('begleitschein-beschichtungsgut.pdf')} />
        <DocLink title="Anforderungen an das Beschichtungsgut" href="/downloads/anforderungen-beschichtungsgut.pdf" size={size('anforderungen-beschichtungsgut.pdf')} />
        <DocLink title="AGBs" href="/downloads/agbs.pdf" size={size('agbs.pdf')} />
        <DocLink title="Datenschutzerklärung" href="/downloads/datenschutzerklaerung.pdf" size={size('datenschutzerklaerung.pdf')} />
        <DocLink title="REACH-Konformität" href="/downloads/REACH-Bescheinigung.pdf" size={size('REACH-Bescheinigung.pdf')} />
      </div>
    </div>
  )
}
