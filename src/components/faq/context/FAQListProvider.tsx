import { useState } from "react";
import { FAQListContext } from "./FAQListContext";
import { useFAQ } from "./useFAQ";
import { useFetchFAQList } from "../faqList/useFetchFAQList";

const DEFAULT_PAGINATION = {
  limit: 10,
  offset: 0,
};

export const FAQListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { selectedTab, selectedCategoryId } = useFAQ();
  const [searchValue, setSearchValue] = useState("");

  const { faqList, pageInfo } = useFetchFAQList({
    ...DEFAULT_PAGINATION,
    tab: selectedTab,
    faqCategoryID: selectedCategoryId,
    question: searchValue.length > 0 ? searchValue : undefined,
  });

  return (
    <FAQListContext.Provider
      value={{ faqList, pageInfo, searchValue, setSearchValue }}
    >
      {children}
    </FAQListContext.Provider>
  );
};
