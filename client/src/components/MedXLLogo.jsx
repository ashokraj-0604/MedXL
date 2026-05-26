/* MedXL Logo Component — matches uploaded logo exactly
   Usage:
     <MedXLLogo size={40} />           → icon only
     <MedXLLogo size={40} withText />  → icon + MEDXL text
     <MedXLLogo size={32} white />     → white monochrome version
*/

export default function MedXLLogo({ size = 40, withText = false, white = false }) {
  const grad1 = white ? '#ffffff' : '#9b27af'
  const grad2 = white ? '#ffffff' : '#c2185b'
  const textFill = white ? '#ffffff' : 'url(#logoTextGrad)'
  const id = `lg_${size}_${white ? 'w' : 'c'}`

  return (
    <svg
      width={withText ? size * 4.2 : size}
      height={size}
      viewBox={withText ? '0 0 168 40' : '0 0 40 40'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        {/* Shield gradient */}
        <linearGradient id={`${id}_sh`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={grad1} />
          <stop offset="100%" stopColor={grad2} />
        </linearGradient>
        {/* Text gradient */}
        {!white && (
          <linearGradient id="logoTextGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c864e0" />
            <stop offset="100%" stopColor="#e8578a" />
          </linearGradient>
        )}
      </defs>

      {/* ── SHIELD ICON ── */}
      {/* Outer shield outline */}
      <path
        d="M20 2 L34 7.5 L34 20 C34 27.5 27.5 34.5 20 38 C12.5 34.5 6 27.5 6 20 L6 7.5 Z"
        stroke={`url(#${id}_sh)`}
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Medical cross / chain links inside shield */}
      {/* Vertical bar top */}
      <rect x="17.5" y="9" width="5" height="7" rx="1.5"
        fill={`url(#${id}_sh)`} />
      {/* Vertical bar bottom */}
      <rect x="17.5" y="24" width="5" height="7" rx="1.5"
        fill={`url(#${id}_sh)`} />
      {/* Horizontal bar left */}
      <rect x="9" y="17.5" width="7" height="5" rx="1.5"
        fill={`url(#${id}_sh)`} />
      {/* Horizontal bar right */}
      <rect x="24" y="17.5" width="7" height="5" rx="1.5"
        fill={`url(#${id}_sh)`} />
      {/* Center connector */}
      <rect x="17.5" y="17.5" width="5" height="5" rx="1"
        fill={`url(#${id}_sh)`} />

      {/* Chain link overlapping detail — top-left notch */}
      <path
        d="M17.5 16 C17.5 14 19 13 20 13 C21 13 22.5 14 22.5 16"
        stroke={`url(#${id}_sh)`} strokeWidth="1.8"
        fill="none" strokeLinecap="round"
      />
      {/* Chain link overlapping detail — bottom-right notch */}
      <path
        d="M17.5 24 C17.5 26 19 27 20 27 C21 27 22.5 26 22.5 24"
        stroke={`url(#${id}_sh)`} strokeWidth="1.8"
        fill="none" strokeLinecap="round"
      />

      {/* ── TEXT "MEDXL" ── */}
      {withText && (
        <text
          x="46"
          y="29"
          fontFamily="'Clash Display', 'Arial Black', sans-serif"
          fontWeight="700"
          fontSize="22"
          letterSpacing="-0.5"
          fill={textFill}
        >
          MEDXL
        </text>
      )}
    </svg>
  )
}
