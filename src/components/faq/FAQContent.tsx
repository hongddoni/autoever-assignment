import { Tabs } from "./tabs/Tabs";
import { Search } from "./search/Search";
import { SearchInfo } from "./search/SearchInfo";
import { Filter } from "./filter/Filter";
import { FAQList } from "./faqList/FAQList";

export const FAQContent = () => {
  return (
    <>
      <Tabs />
      <Search />
      <SearchInfo />
      <Filter />
      <FAQList />
    </>
  );
};
