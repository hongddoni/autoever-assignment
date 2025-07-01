import { useContext } from "react";
import { FAQContext } from "./FAQContext";

export const useFAQList = () => {
  const context = useContext(FAQContext);

  if (!context) {
    throw new Error("useFAQList must be used within a FAQProvider");
  }

  // FAQ 리스트 관련 필드들만 반환
  return {
    searchValue: context.searchValue,
    setSearchValue: context.setSearchValue,
    faqList: context.faqList,
    pageInfo: context.pageInfo,
  };
};
