interface AceLogoProps {
  className?: string
}

export function AceLogo({ className = "h-8 w-8" }: AceLogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield background */}
      <path
        d="M50 5L85 20V45C85 65 70 80 50 95C30 80 15 65 15 45V20L50 5Z"
        fill="#DC2626"
        stroke="#B91C1C"
        strokeWidth="2"
      />

      {/* Bug silhouette */}
      <ellipse cx="50" cy="40" rx="12" ry="8" fill="white" opacity="0.9" />
      <ellipse cx="50" cy="55" rx="8" ry="12" fill="white" opacity="0.9" />

      {/* Bug details */}
      <circle cx="46" cy="37" r="1.5" fill="#DC2626" />
      <circle cx="54" cy="37" r="1.5" fill="#DC2626" />

      {/* Antennae */}
      <path d="M45 32L42 28M55 32L58 28" stroke="white" strokeWidth="2" strokeLinecap="round" />

      {/* Cross/X mark over bug */}
      <path d="M35 35L65 65M65 35L35 65" stroke="white" strokeWidth="4" strokeLinecap="round" />

      {/* ACE text */}
      <text x="50" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">
        ACE
      </text>
    </svg>
  )
}
