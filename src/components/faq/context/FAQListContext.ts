import { createContext } from "react";
import type { FaqItem } from "../../../types/faq";
import type { PaginationRs } from "../../../network/rs/paginationRs";

export type FAQListContextType = {
    searchValue: string;
    setSearchValue: (value: string) => void;
    faqList: FaqItem[];
    pageInfo: PaginationRs;
  };

export const FAQListContext = createContext<FAQListContextType | undefined>(
  undefined!
);
