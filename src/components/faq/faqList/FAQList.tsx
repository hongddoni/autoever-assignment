import { useRef, useEffect } from "react";
import { useFAQList } from "../context/useFAQList";
import { FAQEmpty } from "./FAQEmpty";

export const FAQList = () => {
  const {
    faqList,
    selectedQuestionId,
    setSelectedQuestionId,
    loadMore,
    pageInfo,
  } = useFAQList();

  const answerRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const handleToggle = (id: number) => {
    if (id === selectedQuestionId) {
      setSelectedQuestionId(null);
    } else {
      setSelectedQuestionId(id);
    }
  };

  const handleMore = () => {
    loadMore();
  };

  useEffect(() => {
    answerRefs.current.forEach((element, id) => {
      if (selectedQuestionId === id) {
        const scrollHeight = element.scrollHeight;
        element.style.height = `${scrollHeight}px`;
      } else {
        element.style.height = "0px";
      }
    });
  }, [selectedQuestionId]);

  const setAnswerRef = (id: number) => (el: HTMLDivElement | null) => {
    if (el) {
      answerRefs.current.set(id, el);
    } else {
      answerRefs.current.delete(id);
    }
  };

  if (faqList.length === 0) {
    return <FAQEmpty />;
  }

  const hasMore =
    pageInfo.nextOffset !== undefined && pageInfo.nextOffset > pageInfo.offset;

  return (
    <>
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
              ref={setAnswerRef(item.id)}
              className={"q"}
              data-ui-target="true"
              style={{
                height: "0px",
                overflow: "hidden",
                transition: "height 0.3s ease-in-out",
              }}
            >
              <div className={"inner"}>
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button type="button" className="list-more" onClick={handleMore}>
          <i />
          더보기
        </button>
      )}
    </>
  );
};
