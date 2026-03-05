# Create New UI Component

## Overview
packages/ui에 새 공통 컴포넌트를 추가합니다.

## Steps
1. **컴포넌트 생성**
   - `packages/ui/src/ComponentName.tsx` 생성
   - 함수형 컴포넌트, named export
   - Props 인터페이스 정의
   - Tailwind로 스타일링
   - variant가 필요하면 primary/secondary 등 Record 패턴 사용

2. **Export**
   - `packages/ui/src/index.ts`에 export 추가

3. **사용처 확인**
   - apps/web 또는 apps/admin에서 import 테스트

## 참고
기존 Button, Card 컴포넌트 패턴을 따르세요.
