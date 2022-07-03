import NumberedGamePiece from "./Controller/GameController/GamePieces/NumberedGamePiece.js";
import GamePieceView from "./View/GamePieceView.js";

document.body.appendChild(new GamePieceView(new NumberedGamePiece(5)).getGamePieceDiv());