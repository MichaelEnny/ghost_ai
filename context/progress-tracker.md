# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Complete (01-design-system)

## Current Goal

- Pick up the next item in `context/feature-specs/` when ready.

## Completed

- 01-design-system — shadcn/ui initialized; Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea added; `lib/utils.ts` (`cn`); `lucide-react`; `dark` on `<html>`; app-level `components/home-preview.tsx` smoke composition; `npm run build` and `npm run lint` pass

## In Progress

- None

## Next Up

- Next feature spec in `context/feature-specs/`

## Open Questions

- [Any unresolved product or technical decisions]

## Architecture Decisions

- Keep the `shadcn` npm package as a runtime dependency: `app/globals.css` imports `shadcn/tailwind.css`, which resolves via that package. Removing it breaks the build.

## Session Notes

- Do not hand-edit `components/ui/*` after generation; compose in `components/*` outside `ui/`.
