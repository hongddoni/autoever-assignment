import { Tabs } from "./tabs/Tabs";
import { Search } from "./search/Search";
import { Filter } from "./filter/Filter";
import { FAQList } from "./faqList/FAQList";

export const FAQContent = () => {
  return (
    <>
      <Tabs />
      <Search />
      <Filter />
      <FAQList />
    </>
  );
};
