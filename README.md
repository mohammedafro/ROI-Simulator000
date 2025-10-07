# ROI-Calculator

A Vite + React + TypeScript project for calculating ROI on invoice automation.

## Quickstart (Windows / PowerShell)

Prerequisites
- Node.js 18+ (recommended)
- pnpm (preferred) or npm

Install dependencies

```powershell
Set-Location -Path 'C:\Users\afroz\Downloads\ROI-Calculator\ROI-Calculator'
pnpm install
# or
# npm install
```

Start the dev server

```powershell
pnpm dev
# or
# npm run dev
```

Open a browser and navigate to the URL printed by Vite (usually http://localhost:8080).

Build for production

```powershell
pnpm build
# or
# npm run build
```

Preview production build

```powershell
pnpm preview
# or
# npm run preview
```


## Troubleshooting

Common issues on Windows:

- Slow installs or server start: Windows Defender / antivirus can slow down file I/O in `node_modules`. Add an exclusion for the project folder or `node_modules` to speed up installs and dev server startup.

- Missing type definitions: If TypeScript complains about missing type libs (e.g., `d3-path`, `phoenix`), run:

```powershell
pnpm add -D @types/phoenix @types/d3-path
```

- Clean install if things are odd:

```powershell
Remove-Item -Recurse -Force .\node_modules
Remove-Item package-lock.json
Remove-Item pnpm-lock.yaml
pnpm install
```

## Developer notes

- Code entry: `src/main.tsx` mounts the React app to `#root` in `index.html`.
- Vite config: `vite.config.ts` (server runs on port 8080 by default in this repo)


- Regenerate lockfiles to remove all historical references to `lovable-tagger`.

---


If you'd like the README expanded with API docs, component descriptions, or deployment instructions, tell me which sections you want and I'll add them.
