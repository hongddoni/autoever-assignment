import { useState } from "react";
import { FAQContext } from "./FAQContext";
import type { FAQContextType } from "./FAQContext";
import type { Tab } from "../../../types/tab";
import type { CategoryId } from "../../../types/category";
import { useFetchFAQList } from "../faqList/useFetchFAQList";

const DEFAULT_PAGINATION = {
  limit: 10,
  offset: 0,
};

interface Props {
  children: React.ReactNode;
}

export const FAQProvider = (props: Props) => {
  const { children } = props;
  const [selectedTab, setSelectedTab] = useState<Tab>("CONSULT");
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<CategoryId>("ALL");
  const [searchValue, setSearchValue] = useState("");

  const { faqList, pageInfo } = useFetchFAQList({
    ...DEFAULT_PAGINATION,
    tab: selectedTab,
    faqCategoryID: selectedCategoryId,
    question: searchValue.length > 0 ? searchValue : undefined,
  });

  const onTabChange = (tab: Tab) => {
    setSelectedTab(tab);
    setSelectedCategoryId("ALL");
    setSearchValue("");
  };

  const value: FAQContextType = {
    selectedTab,
    setSelectedTab: onTabChange,
    selectedCategoryId,
    setSelectedCategoryId,
    searchValue,
    setSearchValue,
    faqList,
    pageInfo,
  };

  return <FAQContext.Provider value={value}>{children}</FAQContext.Provider>;
};
