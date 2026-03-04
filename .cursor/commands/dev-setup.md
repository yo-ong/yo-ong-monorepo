# Development Setup

## Overview
새 개발자 온보딩 및 로컬 개발 환경 설정 가이드입니다.

## Steps
1. **필수 도구**
   - Node.js (LTS 권장)
   - pnpm
   - Git

2. **설치**
   ```bash
   pnpm install
   ```

3. **개발 서버 실행**
   ```bash
   pnpm dev          # 전체 앱
   pnpm dev:web      # Next.js만
   pnpm dev:admin    # Admin만
   ```

4. **검증**
   - `pnpm build` 성공
   - `pnpm lint` 통과
   - `pnpm tsc` 통과

## 구조
- apps/web: Next.js
- apps/admin: Vite + React
- packages: ui, api-client, utils
