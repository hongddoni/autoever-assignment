import { useState } from "react";
import { useFAQList } from "../context/useFAQList";
import { Dialog } from "../../dialog/Dialog";
import { useDialog } from "../../dialog/useDialog";

export const Search = () => {
  const { searchValue, setSearchValue, pageInfo } = useFAQList();
  const [localValue, setLocalValue] = useState(searchValue);
  const dialog = useDialog();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (localValue.length < 2) {
      dialog.open();
      return;
    }
    setSearchValue(localValue);
  };

  const onReset = () => {
    setLocalValue("");
    setSearchValue("");
  };

  const handleReset = () => {
    setSearchValue("");
    setLocalValue("");
  };

  return (
    <>
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
          <Dialog isOpen={dialog.isOpen} onClose={dialog.close}>
            검색어는 2자 이상 입력해주세요.
          </Dialog>
        </div>
      </div>
      {searchValue.length > 0 && (
        <div className={"search-info"}>
          <h2 className={"heading-info"}>
            검색결과 총 <em>{pageInfo.totalRecord}</em>건
          </h2>
          <button type="button" className={"init"} onClick={handleReset}>
            검색초기화
          </button>
        </div>
      )}
    </>
  );
};
