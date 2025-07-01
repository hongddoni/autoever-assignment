import type { PaginationRs } from "./paginationRs";
import type { FaqItem } from "../../types/faq";

export interface FaqRs {
  items: FaqItem[];
  pageInfo: PaginationRs;
}
