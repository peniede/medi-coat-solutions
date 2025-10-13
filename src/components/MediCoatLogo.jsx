import React from 'react'

export default function MediCoatLogo() {
  return (
    <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg" aria-label="MediCoat Solutions Logo" role="img" className="h-16 md:h-20">
      <defs>
        <linearGradient id="mediGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1E3A8A", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="coatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#14532D", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#22C55E", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#7FB8E5", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#2C5282", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#7FB8E5", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#4A90E2", stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <g transform="translate(20, 25)">
        <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="url(#mediGradient)">Medi</text>
        <text x="85" y="30" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="url(#coatGradient)">C</text>
        <g transform="translate(123, 18)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="url(#ringGradient1)" strokeWidth="1.3" opacity="0.6" />
          <circle cx="0" cy="0" r="6" fill="url(#circleGradient)" />
          <circle cx="0" cy="0" r="7.3" fill="none" stroke="#4A90E2" strokeWidth="0.4" opacity="0.4" strokeDasharray="1,1" />
          <circle cx="7.3" cy="0" r="0.7" fill="#4A90E2" opacity="0.8" />
          <circle cx="-7.3" cy="0" r="0.7" fill="#4A90E2" opacity="0.8" />
          <circle cx="0" cy="0" r="9.3" fill="none" stroke="#5CB85C" strokeWidth="0.4" opacity="0.4" strokeDasharray="1,1" />
          <circle cx="9.3" cy="0" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="-9.3" cy="0" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="0" cy="9.3" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="0" cy="-9.3" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="6.6" cy="6.6" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="-6.6" cy="6.6" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="6.6" cy="-6.6" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="-6.6" cy="-6.6" r="0.5" fill="#5CB85C" opacity="0.8" />
          <circle cx="0" cy="0" r="10.7" fill="none" stroke="#6C7B7F" strokeWidth="0.4" opacity="0.4" strokeDasharray="1,1" />
          <circle cx="10.7" cy="0" r="0.4" fill="#6C7B7F" opacity="0.8" />
          <circle cx="-10.7" cy="0" r="0.4" fill="#6C7B7F" opacity="0.8" />
          <circle cx="0" cy="10.7" r="0.4" fill="#6C7B7F" opacity="0.8" />
          <circle cx="0" cy="-10.7" r="0.4" fill="#6C7B7F" opacity="0.8" />
        </g>
        <text x="137" y="30" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="url(#coatGradient)">at</text>
        <text x="175" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="normal" fill="#9CA3AF">Solutions</text>
      </g>
    </svg>
  );
}
