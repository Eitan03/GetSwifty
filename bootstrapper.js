import GameBoard from "./Controller/GameBoard.js";
import getGameBoardDiv from "./View/GameBoardView.js";
import BoxesDraggingFunctionality from "./View/BoxesDraggingFunctionality.js";

let gameBoard = new GameBoard();
window.gameBoard = gameBoard; // TODO remove this
let boxesDraggingFunctionality = new BoxesDraggingFunctionality(onDragEnd);
boxesDraggingFunctionality.addDraggingEvents();

document.addEventListener("swap", () => {
  let content = document.getElementsByClassName("content")[0];
  content.removeChild(content.lastChild);
  content.appendChild(getGameBoardDiv(gameBoard.Board.map(gamePiece => gamePiece.Value), gameBoard.Size));
})

document.getElementsByClassName("content")[0].appendChild(getGameBoardDiv(gameBoard.Board.map(gamePiece => gamePiece.Value), gameBoard.Size));

function onDragEnd(index1, index2) {
    gameBoard.TrySwapIndexes(index1, index2);
}