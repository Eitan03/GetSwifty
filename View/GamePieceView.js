import BasicGamePiece from "../Controller/GameController/GamePieces/BasicGamePiece.js";

export default class GamePieceView {
  constructor(gamePiece) {
    if (! (gamePiece instanceof BasicGamePiece)) {
      throw new Error(`Invalid game Piece was given! type ${typeof gamePiece} object: ${gamePiece}`);
    }
    this.GamePiece = gamePiece;
  }

  getGamePieceDiv() {
    let gamePieceDiv = document.createElement("div");
    gamePieceDiv.classList.add("game-piece-div");
    gamePieceDiv.innerHTML=this.GamePiece.value;
    return gamePieceDiv;
  }
}