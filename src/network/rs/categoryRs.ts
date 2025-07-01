import axios from "axios";
import type { CategoryItem } from "../../types/category";

interface CategoryListResponse {
  data: CategoryItem[];
}

// 카테고리 목록 조회
export const getCategoryList = async (): Promise<CategoryListResponse> => {
  const response = await axios.get("/api/categories");
  return response.data;
};
