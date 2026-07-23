// ─── SVG Assets — Modular Barrel ────────────────────────────────
// Every vector graphic is defined in its own file under this directory.
// This barrel re-exports everything so existing imports like
// `from "../assets/svgs/index"` keep working seamlessly.
//
// Structure:
//   symbol.ts       → symbolSVG (hand + smartphone + QR validated)
//   check-icon.ts   → checkIconSVG (standalone validation mark)
//   qr-animated.ts  → qrAnimatedSVG (QR with CSS animations)
//   arrow-down.ts   → arrowDownSVG (collapsible indicator)
//   check-small.ts  → checkSmallSVG (compact bullet check)
//   colors.ts       → BrandColor interface & brandColors array

export { symbolSVG } from "./symbol";
export { checkIconSVG } from "./check-icon";
export { qrAnimatedSVG } from "./qr-animated";
export { arrowDownSVG } from "./arrow-down";
export { checkSmallSVG } from "./check-small";
export type { BrandColor } from "./colors";
export { brandColors } from "./colors";