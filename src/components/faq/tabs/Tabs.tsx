type Tab = "introduction" | "service";

interface Props {
  selected: Tab;
  setSelected: (tab: Tab) => void;
}

export const Tabs = (props: Props) => {
  const { selected, setSelected } = props;
  return (
    <ul className={"tabs"}>
      <li
        className={selected === "introduction" ? "active" : ""}
        onClick={() => setSelected("introduction")}
      >
        <a>
          <span>서비스 도입</span>
        </a>
      </li>
      <li
        className={selected === "service" ? "active" : ""}
        onClick={() => setSelected("service")}
      >
        <a>
          <span>서비스 이용</span>
        </a>
      </li>
    </ul>
  );
};
