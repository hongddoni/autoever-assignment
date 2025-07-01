import { useFAQ } from "../context/useFAQ";

export const Tabs = () => {
  const { selectedTab, setSelectedTab } = useFAQ();
  return (
    <ul className={"tabs"}>
      <li
        className={selectedTab === "CONSULT" ? "active" : ""}
        onClick={() => setSelectedTab("CONSULT")}
      >
        <a>
          <span>서비스 도입</span>
        </a>
      </li>
      <li
        className={selectedTab === "USAGE" ? "active" : ""}
        onClick={() => setSelectedTab("USAGE")}
      >
        <a>
          <span>서비스 이용</span>
        </a>
      </li>
    </ul>
  );
};
