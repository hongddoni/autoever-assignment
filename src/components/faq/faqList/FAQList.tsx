import { useState } from "react";
import { useFAQ } from "../context/useFAQ";
import { useFAQList } from "./useFAQList";

const DEFAULT_PAGINATION = {
  limit: 10,
  offset: 0,
};

export const FAQList = () => {
  const { selectedTab, selectedCategoryId } = useFAQ();
  const faqList = useFAQList({
    ...DEFAULT_PAGINATION,
    tab: selectedTab,
    faqCategoryID: selectedCategoryId,
  });
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null
  );

  const handleToggle = (id: number) => {
    if (id === selectedQuestionId) {
      setSelectedQuestionId(null);
    } else {
      setSelectedQuestionId(id);
    }
  };

  return (
    <ul className={"faq-list"}>
      {faqList?.map((item) => (
        <li
          key={item.id}
          data-ui-item="true"
          className={`${selectedQuestionId === item.id ? "active show" : ""}`}
          onClick={() => handleToggle(item.id)}
        >
          <h4 className={"a"}>
            <button
              type="button"
              className={"btn"}
              data-ui-click="dropdown-toggle"
            >
              <em>{item.subCategoryName}</em>
              <strong>{item.question}</strong>
            </button>
          </h4>

          <div
            className={"q"}
            data-ui-target="true"
            style={{ height: selectedQuestionId === item.id ? "auto" : "0" }}
          >
            <div className={"inner"}>
              <p dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
