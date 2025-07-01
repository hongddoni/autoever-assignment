import { useFAQList } from "../context/useFAQList";

export const SearchInfo = () => {
  const { pageInfo, setSearchValue } = useFAQList();

  const handleReset = () => {
    setSearchValue("");
  };

  return (
    <div className={"search-info"}>
      <h2 className={"heading-info"}>
        검색결과 총 <em>{pageInfo.totalRecord}</em>건
      </h2>
      <button type="button" className={"init"} onClick={handleReset}>
        검색초기화
      </button>
    </div>
  );
};
