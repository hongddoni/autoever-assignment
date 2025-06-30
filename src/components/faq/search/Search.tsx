interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Search = (props: Props) => {
  const { value, onChange } = props;
  return (
    <form>
      <div className={"search"}>
        <div className={"input-wrap"}>
          <input
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <button type="button" className={"clear"} data-ui-click="input-clear">
            다시 입력
          </button>
          <button type="button" className={"submit"}>검색</button>
        </div>
      </div>
    </form>
  );
};
