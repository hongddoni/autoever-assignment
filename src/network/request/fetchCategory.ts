import axios from "axios";
import type { CategoryRq } from "../rq/categoryRq";
import type { CategoryRs } from "../rs/categoryRs";
import type { AxiosRs } from "../rs/axiosRs";

export const fetchCategory = async (
  rq: CategoryRq
): Promise<AxiosRs<CategoryRs>> => {
  const response = await axios.get("/api/categories", { params: rq });
  return response.data;
};
