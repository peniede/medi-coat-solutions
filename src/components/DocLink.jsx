import React from 'react'
import Button from './Button'

export default function DocLink({ title, desc, href, size }){
  // ensure href is a relative path to the file under /downloads
  const filename = href.split('/').pop()

  return (
    <div className="flex items-center justify-between p-4 rounded-md bg-white border hover:shadow-md transition">
      <div className="flex-1">
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold block">
          {title}
        </a>
        {desc && <div className="text-sm text-slate-600 mt-1">{desc}</div>}
      </div>

      <div className="ml-4 flex items-center space-x-3">
        {size && <div className="text-sm text-slate-500">{(size/1024).toFixed(1)} KB</div>}
        <Button href={href} className="text-sm" download={filename}>
          <span className="sr-only">Herunterladen </span>
          <span>Herunterladen</span>
        </Button>
      </div>
    </div>
  )
}
