import type { CategoryId } from "./category";

export interface FaqItem {
  answer: string;
  categoryName: string;
  id: number;
  question: string;
  subCategoryName: string;
  faqCategoryId: CategoryId | null;
}
