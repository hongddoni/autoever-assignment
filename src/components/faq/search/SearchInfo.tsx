import { useFAQList } from "../context/useFAQList";

export const SearchInfo = () => {
  const { pageInfo, searchValue, setSearchValue } = useFAQList();

  const handleReset = () => {
    setSearchValue("");
  };

  if (searchValue.length < 1) return null;

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
