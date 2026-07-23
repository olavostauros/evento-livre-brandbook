// ─── Symbol SVG ─────────────────────────────────────────────────
// A smartphone displaying a validated QR code —
// the brand moment of Evento Livre.

export const symbolSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
  <defs>
    <linearGradient id="phoneGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0E2A4F"/>
      <stop offset="100%" stop-color="#071527"/>
    </linearGradient>
    <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#16C79A" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#16C79A" stop-opacity="0"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#071527" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Glow behind phone -->
  <ellipse cx="200" cy="220" rx="120" ry="40" fill="url(#glowGrad)"/>

  <!-- Smartphone body (centered) -->
  <g filter="url(#shadow)">
    <rect x="130" y="80" width="140" height="230" rx="18" fill="url(#phoneGrad)" stroke="#93A0AE" stroke-width="2"/>
    <!-- Screen -->
    <rect x="142" y="100" width="116" height="190" rx="4" fill="#F6F4EF"/>
    <!-- Status bar -->
    <rect x="142" y="100" width="116" height="24" rx="4" fill="#0E2A4F"/>
    <circle cx="160" cy="112" r="3" fill="#16C79A"/>
    <rect x="170" y="110" width="40" height="4" rx="2" fill="#93A0AE"/>
    <circle cx="242" cy="112" r="3" fill="#93A0AE"/>
  </g>

  <!-- QR Code on screen -->
  <g transform="translate(160, 138)">
    <!-- QR frame corners -->
    <rect x="0" y="0" width="28" height="28" rx="3" fill="none" stroke="#0E2A4F" stroke-width="3"/>
    <rect x="2" y="2" width="24" height="24" rx="2" fill="#0E2A4F"/>
    <rect x="52" y="0" width="28" height="28" rx="3" fill="none" stroke="#0E2A4F" stroke-width="3"/>
    <rect x="54" y="2" width="24" height="24" rx="2" fill="#0E2A4F"/>
    <rect x="0" y="52" width="28" height="28" rx="3" fill="none" stroke="#0E2A4F" stroke-width="3"/>
    <rect x="2" y="54" width="24" height="24" rx="2" fill="#0E2A4F"/>

    <!-- QR data modules -->
    <rect x="34" y="6" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="44" y="6" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="6" y="34" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="18" y="34" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="34" y="34" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="52" y="34" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="68" y="34" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="6" y="44" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="34" y="44" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="44" y="44" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="68" y="44" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="34" y="52" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="52" y="52" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="62" y="52" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="18" y="62" width="6" height="6" rx="1" fill="#0E2A4F"/>
    <rect x="62" y="62" width="6" height="6" rx="1" fill="#0E2A4F"/>

    <!-- Validation checkmark overlay -->
    <circle cx="76" cy="56" r="18" fill="#16C79A" opacity="0.95"/>
    <path d="M68 56 l5.5 5.5 l10 -10" stroke="#071527" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Screen bottom indicator -->
  <rect x="190" y="276" width="20" height="3" rx="1.5" fill="#93A0AE"/>
</svg>`;