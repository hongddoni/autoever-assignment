import { useQuery } from "@tanstack/react-query";
import { fetchFAQList } from "../../../network/request/faqList";
import type { FaqRq } from "../../../network/rq/faqRq";

export const useFAQList = (rq: FaqRq) => {
  const { data } = useQuery({
    queryKey: ["faqList", rq.tab, rq.limit, rq.offset, rq.question, rq.faqCategoryID],
    queryFn: () => fetchFAQList(rq),
    enabled: !!rq.tab && !!rq.limit && rq.offset >= 0,
  });

  return data?.data?.items ?? [];
};
