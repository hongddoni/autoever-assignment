import { useContext } from "react";
import { FAQListContext } from "./FAQListContext";

export const useFAQList = () => {
  const context = useContext(FAQListContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
};
