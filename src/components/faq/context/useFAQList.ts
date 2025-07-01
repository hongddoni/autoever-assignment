import { useContext } from "react";
import { FAQContext } from "./FAQContext";

export const useFAQList = () => {
  const context = useContext(FAQContext);

  if (!context) {
    throw new Error("useFAQList must be used within a FAQProvider");
  }

  return {
    searchValue: context.searchValue,
    setSearchValue: context.setSearchValue,
    faqList: context.faqList,
    pageInfo: context.pageInfo,
    selectedQuestionId: context.selectedQuestionId,
    setSelectedQuestionId: context.setSelectedQuestionId,
    loadMore: context.loadMore,
  };
};
