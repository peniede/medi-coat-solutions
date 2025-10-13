import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Simple Button component used across the app.
 * Props: to, href, children, className, onClick
 */
export default function Button({ to, href, children, className = '', onClick, download, type = 'button' }) {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-3 button-gradient text-white font-medium shadow';
  const cls = `${base} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} download={download}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
