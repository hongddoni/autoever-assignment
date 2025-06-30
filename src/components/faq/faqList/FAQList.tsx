interface Item {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

interface Props {
  items: Item[];
  selectedQuestionId: number | null;
  onToggle: (id: number | null) => void;
}

export const FAQList = (props: Props) => {
  const { items, selectedQuestionId, onToggle } = props;

  const handleToggle = (id: number) => {
    if (id === selectedQuestionId) {
      onToggle(null);
    } else {
      onToggle(id);
    }
  };

  return (
    <ul className={"faq-list"}>
      {items.map((item) => (
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
