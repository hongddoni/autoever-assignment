import { createContext } from "react";
import type { Tab } from "../../../types/tab";
import type { CategoryId } from "../../../types/category";

export interface FAQContextType {
  selectedTab: Tab;
  selectedCategoryId: CategoryId;

  setSelectedTab: (tab: Tab) => void;
  setSelectedCategoryId: (categoryId: CategoryId) => void;
}

export const FAQContext = createContext<FAQContextType | undefined>(undefined!);
