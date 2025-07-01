import { useSearch } from "../context/useSearch";

export const Search = () => {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <form>
      <div className={"search"}>
        <div className={"input-wrap"}>
          <input
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="button" className={"clear"} data-ui-click="input-clear">
            다시 입력
          </button>
          <button type="button" className={"submit"}>
            검색
          </button>
        </div>
      </div>
    </form>
  );
};
