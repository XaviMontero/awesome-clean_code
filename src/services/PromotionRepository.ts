import { IdPromotion } from "../models/IdPromotion";
import { Promotion } from "../models/Promotion";

export interface PromotionRepository {
  save(promotion: Promotion): Promise<void>;
  exists(idPromotion: IdPromotion): Promise<boolean>;
}