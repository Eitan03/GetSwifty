export default class BasicGamePiece {
  constructor(value) {
    if (new.target === BasicGamePiece) {
      throw new TypeError("Cannot construct BasicGamePiece instances directly");
    }
    this.value = value;
  }
} 