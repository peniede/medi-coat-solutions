const fs = require('fs')
const path = require('path')

const downloadsDir = path.join(__dirname, '..', 'public', 'downloads')
const outFile = path.join(downloadsDir, 'metadata.json')

if (!fs.existsSync(downloadsDir)) {
  console.error('downloads directory not found:', downloadsDir)
  process.exit(1)
}

const files = fs.readdirSync(downloadsDir).filter(f => f.toLowerCase().endsWith('.pdf'))
const meta = {}

files.forEach(f => {
  const p = path.join(downloadsDir, f)
  const stat = fs.statSync(p)
  meta[f] = { size: stat.size }
})

fs.writeFileSync(outFile, JSON.stringify(meta, null, 2))
console.log('Wrote metadata for', files.length, 'files to', outFile)
