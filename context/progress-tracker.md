# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- 02-editor (navbar, project sidebar shell, dialog pattern)

## Current Goal

- Ship editor chrome per `context/feature-specs/02-editor.md`; next spec when ready.

## Completed

- 01-design-system — shadcn/ui initialized; Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea added; `lib/utils.ts` (`cn`); `lucide-react`; `dark` on `<html>`; app-level `components/home-preview.tsx` smoke composition; `npm run build` and `npm run lint` pass
- 02-editor — `components/editor/editor-navbar.tsx` (fixed-height bar, sidebar toggle with `PanelLeftOpen` / `PanelLeftClose`, three zones, dark card + bottom border); `components/editor/project-sidebar.tsx` (fixed overlay, slide-in, `isOpen`, Projects header + close, Tabs My Projects / Shared placeholders, full-width New Project + `Plus`); `components/editor/editor-dialog-pattern.tsx` (popover token shell: title, description, footer slots; no modal); `app/page.tsx` composes navbar + sidebar + canvas placeholder; build + lint clean

## In Progress

- None

## Next Up

- Next feature spec in `context/feature-specs/` after `02-editor.md`

## Open Questions

- [Any unresolved product or technical decisions]

## Architecture Decisions

- Keep the `shadcn` npm package as a runtime dependency: `app/globals.css` imports `shadcn/tailwind.css`, which resolves via that package. Removing it breaks the build.

## Session Notes

- Do not hand-edit `components/ui/*` after generation; compose in `components/*` outside `ui/`.
