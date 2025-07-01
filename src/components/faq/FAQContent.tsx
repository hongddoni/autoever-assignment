import { Tabs } from "./tabs/Tabs";
import { Search } from "./search/Search";
import { SearchInfo } from "./search/SearchInfo";
import { Filter } from "./filter/Filter";
import { FAQList } from "./faqList/FAQList";
import { FAQListProvider } from "./context/FAQListProvider";

export const FAQContent = () => {
  return (
    <>
      <Tabs />
      <FAQListProvider>
        <Search />
        <SearchInfo />
        <Filter />
        <FAQList />
      </FAQListProvider>
    </>
  );
};
