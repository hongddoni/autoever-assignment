import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../../../network/request/fetchCategory";
import type { Tab } from "../../../types/tab";

export const useFilter = (tab: Tab) => {
  const { data } = useQuery({
    queryKey: ["categoryItems", tab],
    queryFn: () => fetchCategory({ tab }),
    enabled: !!tab,
  });

  return data?.data ?? [];
};
