---
name: add-ui-component
description: packages/ui에 새 React UI 컴포넌트를 추가할 때 사용. 공통 버튼, 카드, 입력 등 UI 요소 생성 시.
---

# Add UI Component

## When to Use
- packages/ui에 새 공통 컴포넌트를 추가할 때
- 여러 앱에서 재사용할 UI 요소가 필요할 때
- Button, Card 외 추가 컴포넌트가 필요할 때

## Instructions

1. **컴포넌트 파일 생성**
   - `packages/ui/src/ComponentName.tsx` 생성
   - 기존 Button.tsx 패턴 참고

2. **컴포넌트 구조**
   - 함수형 컴포넌트, named export
   - Props는 HTML 요소 props 확장 (예: ButtonHTMLAttributes & { variant?: ... })
   - Tailwind로 스타일, variant별 className은 Record로 매핑
   - `className` prop은 기존 스타일과 병합

3. **Export**
   - `packages/ui/src/index.ts`에 export 추가

4. **사용 예시**
   - apps/web 또는 apps/admin에서 `import { ComponentName } from '@repo/ui'` 확인
