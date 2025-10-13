const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const outDir = path.join(__dirname, '..', 'public', 'downloads')
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const docs = [
  { name: 'datenblatt-tin-mod.pdf', title: 'TiN-mod – Der „Allrounder"', body: 'Vielseitig einsetzbar...' },
  { name: 'datenblatt-crn-mod.pdf', title: 'CrN-mod – Die „Erfahrene"', body: 'Robust, langlebig...' },
  { name: 'datenblatt-zrn.pdf', title: 'ZrN – Die „Unterschätzte"', body: 'Besondere Eigenschaften...' },
  { name: 'datenblatt-crn-mc.pdf', title: 'CrN‑MC – Die „Starke"', body: 'Maximale Belastbarkeit...' },
  { name: 'datenblatt-dlc.pdf', title: 'DLC – Der „Diamant"', body: 'Elegant und widerstandsfähig' },
  { name: 'begleitschein-beschichtungsgut.pdf', title: 'Begleitschein für das Beschichtungsgut', body: '' },
  { name: 'anforderungen-beschichtungsgut.pdf', title: 'Anforderungen an das Beschichtungsgut', body: '' },
  { name: 'agbs.pdf', title: 'AGBs', body: '' },
  { name: 'datenschutzerklaerung.pdf', title: 'Datenschutzerklärung', body: '' },
  { name: 'REACH-Bescheinigung.pdf', title: 'REACH-Konformität', body: '' },
]

console.log('Erzeuge PDFs in', outDir)

docs.forEach(d => {
  const filePath = path.join(outDir, d.name)
  const doc = new PDFDocument()
  const stream = fs.createWriteStream(filePath)
  doc.pipe(stream)
  doc.fontSize(20).text(d.title, { underline: true })
  doc.moveDown()
  doc.fontSize(12).text(d.body || 'Platzhalter-Dokument', { lineGap: 4 })
  doc.end()
  stream.on('finish', () => console.log('geschrieben', d.name))
})
