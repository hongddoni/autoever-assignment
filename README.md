# Autoever Assignment

기아 비즈 FAQ 시스템을 구현한 React 애플리케이션입니다.

## 🛠️ 기술 스택

### **Frontend Core**
- **React** `19.1.0`
- **TypeScript** `5.8.3`
- **Vite** `7.0.0` 

### **State Management & Data Fetching**
- **TanStack Query** `5.81.5`
- **Axios** `1.10.0`

### **Mock & Development**
- **MSW** `2.10.2`

### **Styling**
- **CSS**

### **Package Manager**
- **Yarn**

## 🚀 주요 기능

- **FAQ 시스템**: 카테고리별 FAQ 조회 및 검색
- **페이지네이션**: 더보기 기능을 통한 데이터 로딩
- **모달 시스템**: 이용약관 등 팝업 컴포넌트
- **MSW 기반 목데이터**: 실제 API 없이도 완전한 기능 테스트 가능

## 🗂️ 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
├── layout/             # 레이아웃 컴포넌트
├── mock/               # MSW 목데이터 및 핸들러
├── network/            # API 요청 관련
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수
```

