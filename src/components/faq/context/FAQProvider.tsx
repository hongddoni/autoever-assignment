import { useState } from "react";
import { FAQContext } from "./FAQContext";
import type { FAQContextType } from "./FAQContext";
import type { Tab } from "../../../types/tab";
import type { CategoryId } from "../../../types/category";

interface Props {
  children: React.ReactNode;
}

export const FAQProvider = (props: Props) => {
  const { children } = props;
  const [selectedTab, setSelectedTab] = useState<Tab>("CONSULT");
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>("ALL");

  const value: FAQContextType = {
    selectedTab,
    setSelectedTab,
    selectedCategoryId,
    setSelectedCategoryId,
  };

  return <FAQContext.Provider value={value}>{children}</FAQContext.Provider>;
};
