export class IdPromotion {
  constructor(
    readonly idPromotion: String
  ) {
    if (idPromotion.length <= 5) {
      throw new Error("The idPromotion must be at least 5 characters long");
    }

  }
}