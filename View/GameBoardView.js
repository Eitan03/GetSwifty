import GameBoard from "../Controller/GameController/GameBoard.js";
import GamePieceView from "./GamePieceView.js";

export default class GameBoardView {
    constructor(gameBoard) {
        if (!(gameBoard instanceof GameBoard)) {
            throw new Error(
                `Invalid GameBoard was given! type ${typeof gameBoard} object: ${gameBoard}`
            );
        }
        this.GamePieces = new Map();
        this.GameBoard = gameBoard;
        for (let gamePiece of gameBoard.Board) {
            this.GamePieces.set(gamePiece.Id, new GamePieceView(gamePiece));
        }
    }

    getGameBoardDiv() {
        let boardSize = this.GameBoard.Size;
		let boardDiv = document.createElement("div");
		boardDiv.classList.add("game-board");
		let curDiv;
        for (let i = 0; i < boardSize * boardSize; i++) {
            if (i % boardSize == 0) {
				if (i !== 0) {
					boardDiv.appendChild(curDiv);
				}
				curDiv = document.createElement("div");
				curDiv.classList.add("row");
            }
			let gamePieceDiv = this.GamePieces.get(this.GameBoard.Board[i].Id).getGamePieceDiv();
			gamePieceDiv.id += "-" + i;
			curDiv.appendChild(gamePieceDiv);
        }
		boardDiv.appendChild(curDiv);
		return boardDiv;
    }
}
