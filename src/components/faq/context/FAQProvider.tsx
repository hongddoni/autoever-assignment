import { useCallback, useState } from "react";
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
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null
  );
  const [offset, setOffset] = useState(0);

  const { faqList, pageInfo } = useFetchFAQList({
    ...DEFAULT_PAGINATION,
    offset,
    tab: selectedTab,
    faqCategoryID: selectedCategoryId,
    question: searchValue.length > 0 ? searchValue : undefined,
  });

  const loadMore = useCallback(() => {
    if (pageInfo.nextOffset !== undefined && pageInfo.nextOffset > offset) {
      setOffset(pageInfo.nextOffset);
    }
  }, [pageInfo.nextOffset, offset]);

  const onCategoryChange = useCallback((categoryId: CategoryId) => {
    setSelectedCategoryId(categoryId);
    setSelectedQuestionId(null);
    setOffset(0); 
  }, []);

  const onTabChange = useCallback((tab: Tab) => {
    setSelectedTab(tab);
    setSelectedCategoryId("ALL");
    setSearchValue("");
    setSelectedQuestionId(null);
    setOffset(0);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setOffset(0);
  }, []);

  const value: FAQContextType = {
    selectedTab,
    setSelectedTab: onTabChange,
    selectedCategoryId,
    setSelectedCategoryId: onCategoryChange,
    searchValue,
    setSearchValue: onSearchChange,
    faqList,
    pageInfo,
    selectedQuestionId,
    setSelectedQuestionId,
    offset,
    loadMore,
  };

  return <FAQContext.Provider value={value}>{children}</FAQContext.Provider>;
};
