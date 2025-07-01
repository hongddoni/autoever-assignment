import type { CategoryId } from "../../types/category";
import type { Tab } from "../../types/tab";

export interface FaqRq {
  limit: number;
  offset: number;
  tab: Tab;
  question?: string;
  faqCategoryID?: CategoryId;
}
