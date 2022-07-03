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
    gamePieceDiv.classList.add("game-piece");
    gamePieceDiv.innerHTML=this.GamePiece.Value;
    gamePieceDiv.id = "game-piece"
    gamePieceDiv.setAttribute("draggable", "true");
    return gamePieceDiv;
  }
}