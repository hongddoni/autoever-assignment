import { useQuery } from "@tanstack/react-query";
import { fetchJoinServiceUse } from "../../../network/request/fetchJoinServiceUse";
import type { JoinServiceUseRq } from "../../../network/rq/joinServiceUseRq";

export const useJoinServiceUse = (rq: JoinServiceUseRq) => {
  const { data, isLoading } = useQuery({
    queryKey: ["joinServiceUse", rq.termsClassID],
    queryFn: () => fetchJoinServiceUse(rq),
    enabled: !!rq.termsClassID,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    joinServiceUse: data?.data?.terms ?? [],
    isLoading,
  };
};
