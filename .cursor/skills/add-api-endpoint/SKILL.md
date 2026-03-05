---
name: add-api-endpoint
description: packages/api-client에 새 API 엔드포인트를 추가할 때 사용. REST API 호출 함수 정의 시.
---

# Add API Endpoint

## When to Use
- API 호출 함수를 추가할 때
- 백엔드 엔드포인트와 연동할 때
- apiClient로 GET/POST/PUT/DELETE 요청이 필요할 때

## Instructions

1. **엔드포인트 함수 정의**
   - `packages/api-client/src/`에 새 파일 또는 기존 파일에 추가
   - `apiClient` 또는 `createApiClient()` 인스턴스 사용

2. **패턴**
   - `apiClient.get('/path')` - GET
   - `apiClient.post('/path', data)` - POST
   - `apiClient.put('/path', data)` - PUT
   - `apiClient.delete('/path')` - DELETE

3. **인증**
   - 토큰은 `getToken()`으로 자동 주입됨 (client.ts interceptor)
   - 별도 설정 불필요

4. **Export**
   - `packages/api-client/src/index.ts`에 export 추가
