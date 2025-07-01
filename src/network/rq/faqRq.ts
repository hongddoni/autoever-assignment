import axios from "axios";
import type { CategoryId } from "../../types/category";
import type { Tab } from "../../types/tab";
import type { FaqItem } from "../../types/faq";

export interface FaqRq {
  limit: number;
  offset: number;
  tab: Tab;
  question?: string;
}

interface FAQListResponse {
  data: FaqItem[];
  total: number;
}

interface FAQResponse {
  data: FaqItem;
}

interface FAQListParams {
  category?: CategoryId;
  search?: string;
}

// FAQ 목록 조회
export const getFAQList = async (
  params?: FAQListParams
): Promise<FAQListResponse> => {
  const response = await axios.get("/api/faqs", { params });
  return response.data;
};

// 특정 FAQ 조회
export const getFAQ = async (id: number): Promise<FAQResponse> => {
  const response = await axios.get(`/api/faqs/${id}`);
  return response.data;
};
