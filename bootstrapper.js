import NumberedGamePiece from "./Controller/GameController/GamePieces/NumberedGamePiece.js";
import GamePieceView from "./View/GamePieceView.js";

document.getElementsByClassName("game-board")[0].appendChild(new GamePieceView(new NumberedGamePiece(5)).getGamePieceDiv());
document.getElementsByClassName("game-board")[0].appendChild(new GamePieceView(new NumberedGamePiece(5)).getGamePieceDiv());