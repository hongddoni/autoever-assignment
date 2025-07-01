import { createContext } from "react";
import type { Tab } from "../../../types/tab";
import type { CategoryId } from "../../../types/category";
import type { FaqItem } from "../../../types/faq";
import type { PaginationRs } from "../../../network/rs/paginationRs";

export interface FAQContextType {
  selectedTab: Tab;
  selectedCategoryId: CategoryId;
  searchValue: string;
  faqList: FaqItem[];
  pageInfo: PaginationRs;

  setSelectedTab: (tab: Tab) => void;
  setSelectedCategoryId: (categoryId: CategoryId) => void;
  setSearchValue: (value: string) => void;
}

export const FAQContext = createContext<FAQContextType | undefined>(undefined!);
