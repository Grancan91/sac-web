# SAC Web — Sitio Corporativo

Web corporativa de **SAC (Soluciones Avanzadas Comerciales)**, construida con Next.js 15, Tailwind CSS, shadcn/ui y Framer Motion. Diseñada con el SAC Design System.

## Stack

- **Next.js 15** (App Router, JavaScript — sin TypeScript)
- **Tailwind CSS 3** con tokens del SAC Design System
- **Framer Motion** — animaciones
- **lucide-react** — iconografía
- **Radix UI** — componentes accesibles (base de shadcn/ui)
- **Docker** — contenedores para producción y desarrollo

---

## Desarrollo local (sin Docker)

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Docker — Producción

```bash
# Construir y levantar
docker compose up --build

# Solo producción (sin dev)
docker compose up web
# → http://localhost:3000
```

## Docker — Desarrollo con hot reload

```bash
docker compose --profile dev up web-dev
# → http://localhost:3001
```

---

## Estructura del proyecto

```
src/
├── app/                     # Rutas (App Router)
│   ├── layout.jsx           # Layout global + metadata
│   ├── page.jsx             # Home
│   ├── soluciones/
│   ├── productos/
│   ├── precios/
│   ├── casos-de-exito/
│   ├── blog/
│   ├── sobre-nosotros/
│   └── contacto/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Nav sticky con dropdown y mobile menu
│   │   └── Footer.jsx       # Footer completo con CTA band
│   └── sections/            # 12 componentes de sección
│       ├── HeroSection.jsx
│       ├── ProblemSection.jsx
│       ├── SolutionCards.jsx
│       ├── ProductFeatures.jsx  # Tabs interactivos
│       ├── VerifactuSection.jsx
│       ├── Testimonials.jsx     # Carrusel
│       ├── CaseStudies.jsx
│       ├── Integrations.jsx
│       ├── PricingCards.jsx     # Toggle mensual/anual
│       ├── FAQ.jsx              # Acordeón
│       ├── CTASection.jsx       # Variantes: default y compact
│       └── ContactForm.jsx      # Formulario con validación
├── lib/
│   └── utils.js
└── styles/
    └── globals.css          # Tailwind + tokens SAC + fuentes Google
```

## Páginas

| Ruta | Objetivo |
|------|----------|
| `/` | Home — captación inicial |
| `/soluciones` | Detalle de soluciones por segmento |
| `/productos` | Módulos y hardware |
| `/precios` | Pricing con toggle mensual/anual |
| `/casos-de-exito` | Social proof + testimonios |
| `/blog` | Listado de artículos |
| `/sobre-nosotros` | Historia, valores, equipo |
| `/contacto` | Formulario demo + canales |

## Design System SAC

Los tokens de color, tipografía, sombras y espaciado están mapeados en `tailwind.config.js` a partir del SAC Design System:

- **Primario:** `#00296f` (azul confianza)
- **Secundario:** `#339966` (verde soporte)
- **Acento:** `#e67e22` (naranja cálido)
- **Tipografías:** Montserrat (display) · Source Sans 3 (body) · IBM Plex Mono (datos)

## Accesibilidad

- WCAG 2.1 AA: roles ARIA, landmarks, focus-visible, skip links
- `prefers-reduced-motion` respetado globalmente
- Semántica HTML5 correcta (header, main, nav, section, article, aside)
- Contraste de color verificado en todos los estados

## SEO

- Metadata por página con `export const metadata`
- `metadataBase` configurado para OG y Twitter cards
- `robots: { index: true, follow: true }`
- Estructura de headings h1→h2→h3 en cada página
- `text-wrap: balance` en todos los headings
