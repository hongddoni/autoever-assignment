export type CategoryId =
  | "ALL"
  | "PRODUCT"
  | "COUNSELING"
  | "CONTRACT"
  | "SIGN_UP"
  | "BUSINESS"
  | "ACCIDENT"
  | "RESERVATION"
  | "VEHICLE"
  | "REFUEL"
  | "COUPON";

export interface CategoryItem {
  categoryID: CategoryId;
  name: string;
}
