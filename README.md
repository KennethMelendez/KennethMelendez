# kennethmelendez.dev

My personal portfolio. Single page scroll, dark theme, Three.js background based on the Manhattan street grid — tilted at the same ~29° angle as the actual grid. The orange is the J train.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS v3** for styling
- **shadcn/ui** for Button, Badge, and Card components
- **Three.js** for the 3D background
- **Vitest** + **Testing Library** for tests
- Deployed on **Vercel**

## Structure

```
src/
  components/
    ManhattanGrid.tsx   Three.js canvas, fixed behind everything
    Nav.tsx             Fixed top nav, hides on scroll down / shows on scroll up
    Hero.tsx            Full viewport intro with avatar, links, resume download
    Skills.tsx          Tech stack laid out by category
    Experience.tsx      Job history cards with metrics
    CertsEducation.tsx  AWS cert + education
    Contact.tsx         Footer links
    ui/                 shadcn components (button, badge, card)
  App.tsx
  main.tsx
  index.css             Tailwind directives + CSS custom properties for theming
public/
  resume.pdf
  preview.png           OG image for link previews
  favicon.svg           KM initials in J train orange
```

## Running locally

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

40 tests across all components.

## Build

```bash
npm run build
```

TypeScript check runs first, then Vite bundles to `dist/`.
