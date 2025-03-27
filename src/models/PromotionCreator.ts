import { DateRange } from "./DateRange";
import { Promotion } from "./Promotion";
import { PromotionRepository } from "../services/PromotionRepository";
import { IdPromotion } from "./IdPromotion";
import { UniquePromotionValidator } from "./UniquePromotionValidator";
export class PromotionCreator {
  constructor(private readonly repository: PromotionRepository, private readonly uniqueValidator: UniquePromotionValidator) { }

  async create(
    startDate: Date,
    endDate: Date,
    discountPercentage: number,
    idPromotion: String
  ): Promise<void> {
    const promotion = new Promotion(
      new IdPromotion(idPromotion),
      new DateRange(startDate, endDate),
      discountPercentage,
    );
    await this.uniqueValidator.validate(promotion.id);

    await this.repository.save(promotion);
  }
}