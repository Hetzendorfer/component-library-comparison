# MVP Build Tasks

A numbered backlog of **atomic, test‑first tasks** for the engineering LLM.
Each task includes **Start**, **End / Acceptance Test**, and a single, isolated concern.

> **Convention**
> • Complete tasks **in order**.
> • After each task, the human tester confirms the Acceptance Test before the next begins.

---

## Phase 0 – Repo & Tooling

|  #    | Task                                          | Start                               | End / Acceptance Test                                                          |
| ----- | --------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------ |
|  T00  | Create monorepo with pnpm workspaces          | `component-showcase/` folder exists | `pnpm-workspace.yaml` in root; `git` init; first commit tagged `init-monorepo` |
|  T01  | Add root ESLint + Prettier config             |  Existing repo                      | `pnpm lint` passes on empty workspace                                          |
|  T02  | Add GitHub Actions CI workflow (lint + build) | Root repo                           | CI run succeeds on push to `main`                                              |

---

## Phase 1 – Scaffold Apps (one per library)

|  #    | Task                                                 | Start      | End / Acceptance Test                                              |
| ----- | ---------------------------------------------------- | ---------- | ------------------------------------------------------------------ |
|  T10  | Scaffold **shadcn-showcase** with Vite (React TS)    |  Root repo | `pnpm --filter @apps/shadcn-showcase dev` starts default Vite page |
|  T11  | Scaffold **heroicons-showcase** with Vite (React TS) |  Root repo | Dev server runs on port 5174 and shows Vite page                   |
|  T12  | Scaffold **mui-showcase** with Vite (React TS)       | Root repo  | Dev server runs on port 5175 and shows Vite page                   |

---

## Phase 2 – Shared Infrastructure

|  #    | Task                                                    | Start           | End / Acceptance Test                                           |
| ----- | ------------------------------------------------------- | --------------- | --------------------------------------------------------------- |
|  T20  | Add **react-router-dom** to each app                    | Fresh scaffolds | `npm run dev` → navigating to `/test` renders placeholder route |
|  T21  | Add simple `<Layout>` with header + sidebar to each app | Router present  | Layout visible on all routes                                    |

---

## Phase 3 – ShadCN UI Implementation

|  #    | Task                                    | Start                   | End / Acceptance Test                                          |
| ----- | --------------------------------------- | ----------------------- | -------------------------------------------------------------- |
|  T30  | Install Tailwind + ShadCN generator     | Scaffolds ready         | `npx shadcn-ui@latest init` completes; `tailwind` styles load  |
|  T31  | Generate ShadCN **Button** component    | Generator installed     | `/buttons` page shows live ShadCN Button with variants         |
|  T32  | Create **ButtonPage.tsx** showcase      | Button component exists | Page lists all Button variants; toggling props updates preview |
|  T33  | Commit **Card** component + CardPage    | Button page done        | `/cards` renders ShadCN Card demos                             |
|  T34  | Add dark‑mode toggle using ShadCN theme | Layout present          | Clicking toggle swaps dark/light classes across pages          |

---

## Phase 4 – Heroicons Implementation

|  #    | Task                                  | Start            | End / Acceptance Test                                     |
| ----- | ------------------------------------- | ---------------- | --------------------------------------------------------- |
|  T40  | Install Heroicons package & Tailwind  | Scaffold ready   | Importing `ArrowLeftIcon` renders correctly               |
|  T41  | Build `<IconGrid>` reusable component | Icons installed  | Grid displays 20 icons with names in `/icons/solid` route |
|  T42  | Add search filter to `<IconGrid>`     | IconGrid present | Typing "user" filters grid to icons with "user" in name   |
|  T43  | Implement `/icons/outline` page       | Solid page done  | Outline grid renders and search works                     |

---

## Phase 5 – MUI Implementation

|  #    | Task                                   | Start             | End / Acceptance Test                                           |
| ----- | -------------------------------------- | ----------------- | --------------------------------------------------------------- |
|  T50  | Install MUI core + emotion deps        | Scaffold ready    | Importing `<Button>` from MUI renders                           |
|  T51  | Create `theme.ts` with light/dark mode | MUI installed     | Toggling switch swaps MUI palette modes                         |
|  T52  | Build `ButtonsDemo.tsx` page           | Theme ready       | `/buttons` in MUI app lists contained + outlined + text buttons |
|  T53  | Build `DialogsDemo.tsx` page           | Buttons demo done | `/dialogs` renders open/closeable dialog demos                  |

---

## Phase 6 – Cross‑App Refinements

|  #    | Task                                                     | Start                   | End / Acceptance Test                                       |
| ----- | -------------------------------------------------------- | ----------------------- | ----------------------------------------------------------- |
|  T60  | Add global README with setup docs                        | Repo complete           | Running through README steps spins up all three dev servers |
|  T61  | Add unit tests (Vitest) for one sample component per app | Apps feature pages done | `pnpm test` passes with 3 green tests                       |
|  T62  | Add basic Playwright e2e test for navigation in each app | Unit tests pass         | Playwright suite navigates to /buttons and asserts h1 text  |

---

## Phase 7 – Deployment

|  #    | Task                                                              | Start               | End / Acceptance Test                                |
| ----- | ----------------------------------------------------------------- | ------------------- | ---------------------------------------------------- |
|  T70  | Create Netlify config for **shadcn-showcase**                     | Build scripts ready | Netlify preview deploy URL returns 200 and shows app |
|  T71  | Create Vercel config for **heroicons-showcase**                   | Build scripts ready | Vercel preview deploy URL returns 200 and shows app  |
|  T72  | Configure GitHub Pages for **mui-showcase** via `gh-pages` branch | Build scripts ready | https\://<user>.github.io/mui-showcase loads app     |

---

## Phase 8 – Stretch

|  #    | Task                                                                | Start             | End / Acceptance Test                                     |
| ----- | ------------------------------------------------------------------- | ----------------- | --------------------------------------------------------- |
|  T80  | Add Storybook to monorepo root                                      | All apps stable   | `pnpm storybook` opens Storybook with ShadCN Button story |
|  T81  | Integrate live code playground for ShadCN components using Sandpack | Storybook running | Editing code in playground updates preview live           |

---

**Total atomic tasks:** 31

Feel free to resequence or drop Phase 8 for initial MVP.
