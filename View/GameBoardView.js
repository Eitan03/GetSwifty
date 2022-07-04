import getGamePieceDiv from "./GamePieceView.js";

export default function getGameBoardDiv(boardValues, boardSize) {
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
        let gamePieceDiv = getGamePieceDiv(boardValues[i]);
        gamePieceDiv.id += "-" + i;
        curDiv.appendChild(gamePieceDiv);
    }
    boardDiv.appendChild(curDiv);
    return boardDiv;
}
