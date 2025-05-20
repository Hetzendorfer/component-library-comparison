# Component Showcase Architecture

This document outlines the architecture for three separate **Vite + React** applications, each showcasing the complete component set of a specific UI library:

-   **ShadCN UI**
-   **Heroicons** (with Tailwind CSS)
-   **Material UI (MUI)**

---

## 🧩 Common Principles

-   Built with **Vite** and **React (TypeScript)**.
-   **Client‑side routing** via `react-router-dom`.
-   A **sidebar or top navigation** for browsing components.
-   **Responsive layouts** out of the box.
-   Optional **dark‑mode toggle** where supported.
-   Every page demonstrates **all props and typical usages** of the showcased component.

---

## 1. 🌿 ShadCN UI Showcase

### Folder Structure

```text
shadcn-showcase/
├── src/
│   ├── components/
│   │   └── ui/                 # Auto‑generated ShadCN components
│   ├── pages/
│   │   ├── ButtonPage.tsx
│   │   ├── CardPage.tsx
│   │   └── …                   # one page per component
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── index.html
└── vite.config.ts
```

### Features

-   Add components with `npx shadcn-ui@latest add <component>`.
-   Sidebar groups components by category (Inputs, Feedback, Navigation, …).
-   Each page shows live examples and prop tables.

---

## 2. 🧭 Heroicons Showcase

### Folder Structure

```text
heroicons-showcase/
├── src/
│   ├── icons/
│   │   └── IconGrid.tsx        # Reusable grid component
│   ├── pages/
│   │   ├── SolidIconsPage.tsx
│   │   └── OutlineIconsPage.tsx
│   ├── layout/
│   │   └── Layout.tsx
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── index.html
└── vite.config.ts
```

### Features

-   Displays **all Heroicons** (solid & outline) in a searchable, filterable grid.
-   Icons rendered with Tailwind classes for easy copy‑paste usage.

---

## 3. 🧱 Material UI (MUI) Showcase

### Folder Structure

```text
mui-showcase/
├── src/
│   ├── components/demo/
│   │   ├── ButtonsDemo.tsx
│   │   ├── DialogsDemo.tsx
│   │   └── …                   # grouped by MUI category
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ComponentsPage.tsx
│   │   └── …                   # section views
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   ├── theme.ts                # light/dark theme toggle
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── vite.config.ts
```

### Features

-   Uses `@mui/material`, `@emotion/react`, and `@emotion/styled`.
-   Dark‑mode support via `ThemeProvider`.
-   Component pages organized by MUI categories (Inputs, Layout, Feedback, …).

---

## 🌐 Routing Convention

All three applications share a similar routing pattern:

```text
/
├── buttons
├── cards
├── forms
├── dialogs
└── icons      # Heroicons app only
```

---

## 🚀 Build & Deploy

```bash
# development
npm run dev

# production build
npm run build
npm run preview
```

Supported deployment targets:

-   **Netlify**
-   **Vercel**
-   **GitHub Pages**

---

## 🔮 Future Improvements

-   Interactive prop controls (Storybook‑like) for live editing.
-   Global search & filter across components.
-   Inline playgrounds with editable code snippets.
