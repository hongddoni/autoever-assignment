import { Tabs } from "./tabs/Tabs";
import { Search } from "./search/Search";
import { SearchInfo } from "./search/SearchInfo";
import { Filter } from "./filter/Filter";
import { FAQList } from "./faqList/FAQList";
import { SearchProvider } from "./context/SearchProvider";

export const FAQContent = () => {
  return (
    <>
      <Tabs />
      <SearchProvider>
        <Search />
        <SearchInfo />
        <Filter />
        <FAQList />
      </SearchProvider>
    </>
  );
};
