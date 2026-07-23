// ─── Animated QR Code SVG ───────────────────────────────────────
// QR code with CSS keyframe animations for the validation pulse
// and checkmark reveal — the brand moment in motion.

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