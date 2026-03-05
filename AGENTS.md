# Project Instructions

## Code Style

- Use TypeScript for all new files
- Prefer functional components in React
- Use Tailwind CSS for styling
- Follow ESLint and Prettier config in the project

## Monorepo Structure

- `apps/web` (`@repo/web`): Next.js app
- `apps/admin` (`@repo/admin`): Vite + React admin app
- `packages/ui` (`@repo/ui`): Shared React UI components
- `packages/api-client` (`@repo/api-client`): Axios client with auth token interceptor
- `packages/utils` (`@repo/utils`): Token helpers and date utilities

## Architecture

- Shared code lives in `packages/`
- Apps import from `@repo/ui`, `@repo/api-client`, `@repo/utils`
- Use `packages/ui` components instead of duplicating UI

## Commands

- `pnpm dev` - Run all apps in parallel
- `pnpm dev:web` - Run only Next.js web app
- `pnpm dev:admin` - Run only Vite admin app
- `pnpm build` - Build all workspaces
- `pnpm lint` - Lint across all workspaces
- `pnpm tsc` - Typecheck all workspaces
- `pnpm format` - Format with Prettier
