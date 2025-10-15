import React, { useEffect, useState } from 'react'

function formatSize(bytes) {
  if (!bytes || typeof bytes !== 'number') return ''
  if (bytes < 1024) return bytes + ' B'
  const kb = bytes / 1024
  if (kb < 1024) return kb.toFixed(1) + ' KB'
  return (kb / 1024).toFixed(1) + ' MB'
}

function beautifyFilename(filename) {
  const base = filename.replace(/\.pdf$/i, '')
  let name = base.replace(/^datenblatt[-_]/i, '')
  name = name.replace(/[-_]+/g, ' ')
  name = name.replace(/\b(tin)\b/i, 'TiN')
  name = name.replace(/\b(crn)\b/i, 'CrN')
  name = name.replace(/\b(zrn)\b/i, 'ZrN')
  name = name.replace(/\b(dlc)\b/i, 'DLC')
  name = name.replace(/\breach\b/i, 'REACH')
  name = name.replace(/datenschutzerklaerung/i, 'Datenschutzerklärung')
  name = name.replace(/anforderungen[-_ ]beschichtungsgut/i, 'Anforderungen an das Beschichtungsgut')
  name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return name
}

function DocLink({ title, desc, href, size }) {
  return (
    <a href={href} className="block rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition" download>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          {desc && <p className="text-sm text-slate-600 mt-1">{desc}</p>}
          {size != null && <p className="text-xs text-slate-500 mt-1">{formatSize(size)}</p>}
        </div>
        <span className="text-xs text-blue-700 underline whitespace-nowrap">PDF herunterladen</span>
      </div>
    </a>
  )
}

function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
      <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      {children}
    </section>
  )
}

function CategoryHeading({ children }) {
  return (
    <div className="md:col-span-2 rounded-xl p-[2px] bg-gradient-to-r from-blue-800/20 via-blue-600/20 to-green-500/20">
      <div className="rounded-xl bg-white px-4 py-2"><h4 className="text-lg font-semibold text-black">{children}</h4></div>
    </div>
  )
}

export default function Downloadcenter() {
  const [files, setFiles] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    // Build an absolute URL for metadata so this works when the app is served under a base path
    const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/'
    let metaUrl = '/downloads/metadata.json'
    try {
      // prefer an absolute URL composed from the current origin + base
      if (typeof window !== 'undefined' && window.location && window.location.origin) {
        // ensure base ends with '/'
        const baseFixed = base.endsWith('/') ? base : base + '/'
        metaUrl = new URL('downloads/metadata.json', window.location.origin + baseFixed).href
      } else {
        // fall back to path-relative
        metaUrl = (base.endsWith('/') ? base : base + '/') + 'downloads/metadata.json'
      }
    } catch (e) {
      metaUrl = (base.endsWith('/') ? base : base + '/') + 'downloads/metadata.json'
    }

    fetch(metaUrl)
      .then(r => { if (!r.ok) throw new Error('Metadata not found'); return r.json() })
      .then(data => {
        if (!mounted) return
        const items = Object.keys(data).map(fn => ({ filename: fn, size: data[fn] && data[fn].size ? data[fn].size : null }))
        items.sort((a, b) => {
          const aIs = /datenblatt/i.test(a.filename) ? 0 : 1
          const bIs = /datenblatt/i.test(b.filename) ? 0 : 1
          if (aIs !== bIs) return aIs - bIs
          return a.filename.localeCompare(b.filename, 'de')
        })
        setFiles(items)
      })
      .catch(err => { console.warn('Failed to load downloads metadata', err); if (mounted) setError(err.message || 'failed') })
    return () => { mounted = false }
  }, [])

  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="downloadcenter-title">
      <h2 id="downloadcenter-title" className="text-3xl md:text-4xl font-semibold">Downloadcenter</h2>
      <div className="h bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
      <p className="mt-3 text-slate-600 max-w-3xl">Willkommen im Downloadcenter von MediCoat Solutions. Hier finden Sie aktuelle und relevante Dokumente.</p>

      <Section title="Dokumente zum Download">
        {files === null && !error && (<div className="mt-6">Lade Dokumentliste…</div>)}
        {error && (<div className="mt-6 text-sm text-rose-600">Konnte Download-Liste nicht laden. Die statische Liste wird angezeigt.</div>)}

        {files && (
          <div className="grid md:grid-cols-2 gap-6">
            <CategoryHeading>Datenblätter</CategoryHeading>
            {files.filter(f => /datenblatt/i.test(f.filename)).map(f => (
              <DocLink key={f.filename} title={beautifyFilename(f.filename)} href={`/downloads/${f.filename}`} size={f.size} />
            ))}
          </div>
        )}

        {files && (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <CategoryHeading>Sonstige Dokumente</CategoryHeading>
            {files.filter(f => !/datenblatt/i.test(f.filename)).map(f => (
              <DocLink key={f.filename} title={beautifyFilename(f.filename)} href={`/downloads/${f.filename}`} size={f.size} />
            ))}
          </div>
        )}

        {error && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <CategoryHeading>Datenblätter</CategoryHeading>
              <DocLink title="TiN-mod – Der ‚Allrounder‘" desc="Vielseitig einsetzbar..." href="/downloads/datenblatt-tin-mod.pdf" />
              <DocLink title="CrN-mod – Die ‚Erfahrene‘" desc="Robust, langlebig..." href="/downloads/datenblatt-crn-mod.pdf" />
              <DocLink title="ZrN – Die ‚Unterschätzte‘" desc="Besondere Eigenschaften..." href="/downloads/datenblatt-zrn.pdf" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <CategoryHeading>Sonstige Dokumente</CategoryHeading>
              <DocLink title="Begleitschein für das Beschichtungsgut" href="/downloads/begleitschein-beschichtungsgut.pdf" />
              <DocLink title="Anforderungen an das Beschichtungsgut" href="/downloads/anforderungen-beschichtungsgut.pdf" />
              <DocLink title="AGBs" href="/downloads/agbs.pdf" />
            </div>
          </>
        )}

      </Section>

      <p className="mt-10 text-slate-700">Alle Dokumente stehen Ihnen als PDF zum Download zur Verfügung.</p>
    </main>
  )
}
