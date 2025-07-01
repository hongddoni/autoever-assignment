import { http, HttpResponse } from "msw";
import type { CategoryItem } from "../types/category";

const mockConsultCategoryItems: CategoryItem[] = [
  {
    categoryID: "PRODUCT",
    name: "서비스 상품",
  },
  {
    categoryID: "COUNSELING",
    name: "도입 상담",
  },
  {
    categoryID: "CONTRACT",
    name: "계약",
  },
];

const mockUsageCategoryItems: CategoryItem[] = [
  {
    categoryID: "SIGN_UP",
    name: "가입문의",
  },
  {
    categoryID: "BUSINESS",
    name: "비즈니스(업무용)",
  },
  {
    categoryID: "ACCIDENT",
    name: "사고/보험",
  },
  {
    categoryID: "RESERVATION",
    name: "예약/결제",
  },
  {
    categoryID: "VEHICLE",
    name: "차량문의",
  },
  {
    categoryID: "REFUEL",
    name: "충전",
  },
  {
    categoryID: "COUPON",
    name: "쿠폰/기타",
  },
];

export const mockCategoryHandler = [
  http.get("/api/categories", ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");

    let categoryItems = mockConsultCategoryItems;

    if (tab === "USAGE") {
      categoryItems = mockUsageCategoryItems;
    } else if (tab === "CONSULT") {
      categoryItems = mockConsultCategoryItems;
    }

    return HttpResponse.json({
      data: categoryItems,
    });
  }),
];
