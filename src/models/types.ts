export type IdPromotion = string;

export interface PromotionRepository {
  exists(idPromotion: IdPromotion): Promise<boolean>;
}