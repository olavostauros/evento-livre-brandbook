# 🎫 Evento Livre — Manual de Identidade Visual

**Evento Livre** é uma plataforma SaaS de ticketing e gestão de eventos com foco B2B. Este repositório contém o **Manual de Identidade Visual** (Brand Book) interativo, construído com [Astro](https://astro.build/) e TypeScript.

## Stack

| Tecnologia | Uso |
|------------|-----|
| [Astro](https://astro.build/) | Site estático (SSG, zero SSR) |
| TypeScript | Lógica, tipagem, centralização de assets |
| CSS scoped | Estilos encapsulados por componente |
| SVG inline | Todos os gráficos vetoriais (zero PNG/JPG) |
| Google Fonts | Schibsted Grotesk + Instrument Sans |

## Estrutura do projeto

```
evento-livre-brandbook/
├── src/
│   ├── assets/
│   │   └── svgs/
│   │       └── index.ts          # Centralized SVG exports + brand color data
│   ├── components/
│   │   ├── Layout.astro          # Base layout (nav, footer, fonts)
│   │   ├── Hero.astro            # Seção 01 — Marca / Posicionamento
│   │   ├── SymbolSection.astro   # Seção 02 — Símbolo (mão + smartphone + QR)
│   │   ├── ColorsSection.astro   # Seção 03 — Paleta de cores
│   │   ├── TypographySection.astro # Seção 04 — Sistema tipográfico
│   │   ├── VoiceSection.astro    # Seção 05 — Tom de voz
│   │   └── ColorSwatch.astro     # Componente reutilizável de amostra de cor
│   ├── pages/
│   │   └── index.astro           # Página única com todas as seções
│   └── styles/
│       └── global.css            # Reset, tokens, tipografia base
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Como executar

```bash
npm install
npm run dev       # Servidor local (geralmente http://localhost:4321)
npm run build     # Gera site estático em dist/
npm run preview   # Preview do build
```

O build final gera uma saída **100% estática** em `dist/`, autocontida e pronta para deploy.

## Seções do manual

| # | Seção | Descrição |
|---|-------|-----------|
| 01 | **Marca** | Posicionamento, essência e promessa da marca |
| 02 | **Símbolo** | Conceito do símbolo (mão + smartphone + QR validado) em 3 camadas semióticas |
| 03 | **Cores** | Paleta cromática com código hex, papel e conotação |
| 04 | **Tipografia** | Sistema tipográfico (Schibsted Grotesk + Instrument Sans) com escala |
| 05 | **Voz** | Tom de voz e diretrizes de comunicação com exemplos |

## Micro-interações

- **Copiar HEX:** clique sobre o código hexadecimal de qualquer cor para copiá-lo para a área de transferência
- **Scroll suave:** navegação com scroll suave entre seções
- **Animação do QR:** o símbolo na seção de cores inclui animação sutil do check de validação
- **Menu mobile:** navegação responsiva com overlay em dispositivos móveis

## SVG centralizado

Todos os vetores (símbolo, ícones, animações) estão centralizados em `src/assets/svgs/index.ts` e importados pelos componentes `.astro`. Nenhum SVG cru está solto nos componentes — garantindo reuso, manutenção e consistência visual.

## Licença

Uso interno. © Evento Livre