export const SearchInfo = () => {
  return (
    <div className={"search-info"}>
      <h2 className={"heading-info"}>
        검색결과 총 <em>{0}</em>건
      </h2>
      <button type="button" className={"init"}>
        검색초기화
      </button>
    </div>
  );
};
