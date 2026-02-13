# yo-ong-monorepo

A React monorepo powered by Turbo and pnpm.  
`apps` contains runnable applications, and `packages` contains shared libraries.

## Project Structure

```text
yo-ong-monorepo/
├─ apps/
│  ├─ web/            # Next.js web app
│  └─ admin/          # Vite + React admin app
├─ packages/
│  ├─ ui/             # Shared UI components
│  ├─ api-client/     # Axios-based API client
│  └─ utils/          # Shared utilities (token/date, etc.)
├─ package.json       # Root scripts (dev/build/lint/typecheck)
├─ pnpm-workspace.yaml
└─ turbo.json
```

## Workspace Overview

- `apps/web` (`@repo/web`): Next.js app using shared packages (`@repo/ui`, `@repo/api-client`, `@repo/utils`)
- `apps/admin` (`@repo/admin`): Vite app using the same shared packages
- `packages/ui` (`@repo/ui`): Shared React UI components (e.g. button)
- `packages/api-client` (`@repo/api-client`): Axios client with auth token interceptor
- `packages/utils` (`@repo/utils`): Token helpers and date formatting utilities

## Quick Start

```bash
pnpm install
pnpm dev
```

Common root commands:

- `pnpm dev:web` - Run only the web app
- `pnpm dev:admin` - Run only the admin app
- `pnpm build` - Build all workspaces
- `pnpm lint` - Run lint across all workspaces
- `pnpm tsc` - Run typecheck across all workspaces

## Notes

- Workspace paths are defined in `pnpm-workspace.yaml` as `apps/*` and `packages/*`.
- Task pipeline configuration is defined in `turbo.json`.
