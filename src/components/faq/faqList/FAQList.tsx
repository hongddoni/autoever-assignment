import { useFAQList } from "../context/useFAQList";
import { FAQEmpty } from "./FAQEmpty";

export const FAQList = () => {
  const { faqList, selectedQuestionId, setSelectedQuestionId } = useFAQList();

  const handleToggle = (id: number) => {
    if (id === selectedQuestionId) {
      setSelectedQuestionId(null);
    } else {
      setSelectedQuestionId(id);
    }
  };

  if (faqList.length === 0) {
    return <FAQEmpty />;
  }

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
