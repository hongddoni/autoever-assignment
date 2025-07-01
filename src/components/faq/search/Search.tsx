import { useState } from "react";
import { useFAQList } from "../context/useFAQList";

export const Search = () => {
  const { searchValue, setSearchValue } = useFAQList();
  const [localValue, setLocalValue] = useState(searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setSearchValue(localValue);
  };

  const onReset = () => {
    setLocalValue("");
    setSearchValue("");
  };

  return (
    <div className={"search"}>
      <div className={"input-wrap"}>
        <input
          type="text"
          placeholder="찾으시는 내용을 입력해 주세요"
          value={localValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={"clear"}
          data-ui-click="input-clear"
          onClick={onReset}
        >
          다시 입력
        </button>
        <button type="button" className={"submit"} onClick={handleSubmit}>
          검색
        </button>
      </div>
    </div>
  );
};
