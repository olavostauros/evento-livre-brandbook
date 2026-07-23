// ─── Brand Color Palette ───────────────────────────────────────
// Typed color definitions used across the entire brand system.

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