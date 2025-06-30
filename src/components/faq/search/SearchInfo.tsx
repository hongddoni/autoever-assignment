interface Props {
  total: number;
}

export const SearchInfo = (props: Props) => {
  const { total } = props;
  return (
    <div className={"search-info"}>
      <h2 className={"heading-info"}>
        검색결과 총 <em>{total}</em>건
      </h2>
      <button type="button" className={"init"}>
        검색초기화
      </button>
    </div>
  );
};
