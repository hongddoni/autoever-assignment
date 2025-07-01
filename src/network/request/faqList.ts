import axios from "axios";
import type { FaqRq } from "../rq/faqRq";
import type { AxiosRs } from "../rs/axiosRs";
import type { FaqRs } from "../rs/faqRs";

export const fetchFAQList = async (rq: FaqRq): Promise<AxiosRs<FaqRs>> => {
  const response = await axios.get("/api/faqs", { params: rq });
  return response.data;
};
