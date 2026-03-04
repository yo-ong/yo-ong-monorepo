---
name: monorepo-dev
description: pnpm + Turbo 모노레포 개발 워크플로우. dev 서버 실행, 빌드, 린트, 타입체크 등.
---

# Monorepo Dev

## When to Use
- 개발 서버 실행이 필요할 때
- 빌드/린트/타입체크를 실행할 때
- 모노레포 구조 관련 질문이 있을 때

## Instructions

### 개발 서버
- `pnpm dev` - 모든 앱 병렬 실행 (Turbo)
- `pnpm dev:web` - Next.js만
- `pnpm dev:admin` - Vite Admin만

### 빌드 & 검증
- `pnpm build` - 전체 빌드
- `pnpm lint` - ESLint
- `pnpm tsc` - TypeScript 타입체크
- `pnpm format` - Prettier 포맷

### 구조
- apps/web: Next.js (App Router)
- apps/admin: Vite + React (react-router-dom)
- packages/ui, api-client, utils: 공유 패키지
