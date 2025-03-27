import { DateRange } from "./DateRange";
import { IdPromotion } from "./IdPromotion";

export class Promotion {
  constructor(
    readonly id: IdPromotion,
    readonly dateRange: DateRange,
    readonly discountPercentage: number,
  ) {

  }
}