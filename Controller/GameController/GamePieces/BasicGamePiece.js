export default class BasicGamePiece {
  constructor(value) {
    if (new.target === BasicGamePiece) {
      throw new TypeError("Cannot construct BasicGamePiece instances directly");
    }
    this.Value = value;
    this.Id = generateRandomId();
  }
}

function generateRandomId() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}