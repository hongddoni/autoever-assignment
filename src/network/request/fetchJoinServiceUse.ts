import axios from "axios";
import type { JoinServiceUseRq } from "../rq/joinServiceUseRq";
import type { JoinServiceUseRs } from "../rs/joinServiceUseRs";
import type { AxiosRs } from "../rs/axiosRs";

export const fetchJoinServiceUse = async (
  rq: JoinServiceUseRq
): Promise<AxiosRs<JoinServiceUseRs>> => {
  const response = await axios.get("/api/join-service-use", { params: rq });
  return response.data;
};
