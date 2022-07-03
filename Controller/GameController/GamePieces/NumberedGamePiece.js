import BasicGamePiece from "./BasicGamePiece";

class NumberedGamePiece extends BasicGamePiece {
  constructor(number) {
    if (!Number.isInteger(number)) {
      throw new Error($`Invalid number was given to NumberedGamePiece! type {typeof number}: number`);
    }
    super.value = number
  }
}