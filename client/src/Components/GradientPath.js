import React from 'react'

const GradientPath = ({ gradientId, translate = 0, rotate = 0 }) => {
  return (
    <svg style={{ transform: `translateY(${translate}%) rotate(${rotate}deg)` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="100%">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#1c1f93', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff6ee3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        fill="none"
        d="M0,160L48,158.7C96,157,192,155,288,165.3C384,176,480,208,576,213.3C672,219,768,197,864,186.7C960,176,1056,176,1152,186.7C1248,197,1344,219,1392,229.3L1440,240"
      ></path>
    </svg>
  )
}

export default GradientPath
