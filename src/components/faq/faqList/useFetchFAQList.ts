import { useQuery } from "@tanstack/react-query";
import { fetchFAQList } from "../../../network/request/faqList";
import type { FaqRq } from "../../../network/rq/faqRq";

export const useFetchFAQList = (rq: FaqRq) => {
  const { data } = useQuery({
    queryKey: [
      "faqList",
      rq.tab,
      rq.limit,
      rq.offset,
      rq.question,
      rq.faqCategoryID,
    ],
    queryFn: () => fetchFAQList(rq),
    enabled: !!rq.tab && !!rq.limit && rq.offset >= 0,
  });

  return {
    faqList: data?.data?.items ?? [],
    pageInfo: data?.data?.pageInfo ?? {
      limit: 0,
      nextOffset: 0,
      offset: 0,
      prevOffset: 0,
      totalRecord: 0,
    },
  };
};
