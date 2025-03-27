import { PromotionRepository } from "../services/PromotionRepository";
import { IdPromotion } from "./IdPromotion";

export class UniquePromotionValidator {
  constructor(private readonly repository: PromotionRepository) {}

  async validate(idPromotion: IdPromotion): Promise<void> {
    const exists = await this.repository.exists(idPromotion);
    if (exists) {
      throw new Error("The idPromotion must be unique");
    }
  }
}