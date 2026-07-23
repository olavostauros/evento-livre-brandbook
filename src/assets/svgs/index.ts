// ─── Centralized SVG Assets ───────────────────────────────────────
// Every vector graphic used throughout the brandbook is defined here,
// ensuring reusability, maintainability, and visual consistency.
// Import from this file only — no raw SVGs inside .astro components.

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

  <!-- Hand / wrist (simplified geometric silhouette) -->
  <g transform="translate(80, 140)">
    <!-- Wrist -->
    <path d="M60 160 Q55 200 50 240 Q48 255 55 260 Q65 265 75 250 Q80 235 82 200 Q84 180 80 160 Z"
          fill="#24282D"/>
    <!-- Palm -->
    <path d="M60 160 Q70 130 100 110 Q120 100 135 105 Q150 110 155 120 L150 130
             Q145 120 135 115 Q120 110 105 120 Q85 135 75 160 Z"
          fill="#24282D"/>
    <!-- Thumb -->
    <path d="M100 110 Q95 90 100 75 Q105 65 115 68 Q125 72 125 85 Q125 95 120 105"
          fill="#24282D"/>
    <!-- Fingers wrapping around phone -->
    <path d="M135 105 Q155 95 175 100 Q190 105 195 115 L190 125
             Q185 115 175 110 Q160 105 150 115"
          fill="#24282D"/>
    <path d="M150 130 Q170 120 190 125 Q205 130 210 140 L205 150
             Q200 140 190 135 Q175 130 165 140"
          fill="#24282D"/>
    <path d="M165 155 Q185 145 200 150 Q215 155 218 165 L213 175
             Q208 165 198 160 Q185 155 175 165"
          fill="#24282D"/>
  </g>

  <!-- Smartphone body -->
  <g filter="url(#shadow)">
    <rect x="170" y="80" width="140" height="230" rx="18" fill="url(#phoneGrad)" stroke="#93A0AE" stroke-width="2"/>
    <!-- Screen -->
    <rect x="182" y="100" width="116" height="190" rx="4" fill="#F6F4EF"/>
    <!-- Status bar -->
    <rect x="182" y="100" width="116" height="24" rx="4" fill="#0E2A4F"/>
    <circle cx="200" cy="112" r="3" fill="#16C79A"/>
    <rect x="210" y="110" width="40" height="4" rx="2" fill="#93A0AE"/>
    <circle cx="282" cy="112" r="3" fill="#93A0AE"/>
  </g>

  <!-- QR Code on screen -->
  <g transform="translate(200, 138)">
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
  <rect x="230" y="276" width="20" height="3" rx="1.5" fill="#93A0AE"/>
</svg>`;

export const checkIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="22" fill="#16C79A"/>
  <path d="M14 24 l6.5 6.5 l13 -13" stroke="#071527" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const qrAnimatedSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
  <style>
    @keyframes qrPulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
    @keyframes qrCheck {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.15); opacity: 1; }
      100% { transform: scale(1); opacity: 0.95; }
    }
    .qr-module { animation: qrPulse 3s ease-in-out infinite; }
    .qr-module:nth-child(2n) { animation-delay: 0.2s; }
    .qr-module:nth-child(3n) { animation-delay: 0.5s; }
    .qr-check { animation: qrCheck 2s ease-out infinite; }
  </style>
  <!-- QR Frame -->
  <rect x="0" y="0" width="28" height="28" rx="3" fill="none" stroke="#0E2A4F" stroke-width="3"/>
  <rect x="68" y="0" width="28" height="28" rx="3" fill="none" stroke="#0E2A4F" stroke-width="3"/>
  <rect x="0" y="68" width="28" height="28" rx="3" fill="none" stroke="#0E2A4F" stroke-width="3"/>
  <rect x="3" y="3" width="22" height="22" rx="2" fill="#0E2A4F"/>
  <rect x="71" y="3" width="22" height="22" rx="2" fill="#0E2A4F"/>
  <rect x="3" y="71" width="22" height="22" rx="2" fill="#0E2A4F"/>
  <!-- QR modules -->
  <rect x="34" y="6" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="44" y="6" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="56" y="6" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="6" y="34" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="18" y="34" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="34" y="34" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="52" y="34" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="62" y="34" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="72" y="34" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="6" y="44" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="44" y="44" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="56" y="44" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="72" y="44" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="34" y="56" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="56" y="56" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="62" y="56" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="18" y="62" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="34" y="62" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="44" y="62" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <rect x="72" y="62" width="6" height="6" rx="1" fill="#0E2A4F" class="qr-module"/>
  <!-- Validation checkmark -->
  <g class="qr-check" transform="translate(76, 56)">
    <circle cx="0" cy="0" r="14" fill="#16C79A"/>
    <path d="M-7 0 l4.5 4.5 l9 -9" stroke="#071527" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;

export const arrowDownSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const checkSmallSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  <path d="M3 8l3.5 3.5L13 5" stroke="#16C79A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ─── Color palette data (typed) ────────────────────────────────

export interface BrandColor {
  hex: string;
  name: string;
  role: "primary" | "secondary" | "support" | "accent";
  connotation: string;
  cssVar: string;
}

export const brandColors: BrandColor[] = [
  {
    hex: "#0E2A4F",
    name: "Deep Navy",
    role: "primary",
    connotation: "Profundidade, confiança, tecnologia madura — a âncora visual da marca",
    cssVar: "--color-primary",
  },
  {
    hex: "#071527",
    name: "Midnight",
    role: "secondary",
    connotation: "Base sólida, noite, o fundo que dá contraste e profundidade",
    cssVar: "--color-secondary",
  },
  {
    hex: "#16C79A",
    name: "Validation Green",
    role: "accent",
    connotation: "Aprovação, fluidez, o instante do QR validado na portaria",
    cssVar: "--color-accent",
  },
  {
    hex: "#24282D",
    name: "Graphite",
    role: "support",
    connotation: "Neutro estrutural, textos de apoio, solidez visual",
    cssVar: "--color-support-1",
  },
  {
    hex: "#93A0AE",
    name: "Silver",
    role: "support",
    connotation: "Neutro secundário, bordas, hint text, UI sutil",
    cssVar: "--color-support-2",
  },
  {
    hex: "#F6F4EF",
    name: "Off White",
    role: "support",
    connotation: "Fundo limpo, espaço em branco, clareza e respiro",
    cssVar: "--color-bg",
  },
];