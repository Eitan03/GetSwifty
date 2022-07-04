import BasicGamePiece from "./BasicGamePiece.js";

export default class NumberedGamePiece extends BasicGamePiece {
  constructor(number) {
    if (!Number.isInteger(number)) {
      throw new Error(`Invalid number was given to NumberedGamePiece! type ${typeof number}: object: ${number}`);
    }
    super(number)
  }
}