import type { CategoryItem } from "../../../types/category";
import { useFAQ } from "../context/useFAQ";
import { useFilter } from "./useFilter";
import { Suspense } from "react";

const DEFAULT_CATEGORY: CategoryItem = {
  categoryID: "ALL",
  name: "전체",
};

export const Filter = () => {
  const { selectedTab, selectedCategoryId, setSelectedCategoryId } = useFAQ();
  const categoryItems = useFilter(selectedTab);

  const items: CategoryItem[] = [DEFAULT_CATEGORY, ...(categoryItems ?? [])];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={"filter"}>
        {items.map((item) => (
          <label key={item.categoryID}>
            <input
              type="radio"
              name="category"
              value={item.categoryID}
              checked={selectedCategoryId === item.categoryID}
              onChange={() => setSelectedCategoryId(item.categoryID)}
            />
            <i>{item.name}</i>
          </label>
        ))}
      </div>
    </Suspense>
  );
};
