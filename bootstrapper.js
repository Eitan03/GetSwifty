import GameBoard from "./Controller/GameController/GameBoard.js";
import getGameBoardDiv from "./View/GameBoardView.js";
import BoxesDraggingFunctionality from "./Controller/BoxesDraggingFunctionality.js";

let gameBoard = new GameBoard();
window.gameBoard = gameBoard; // TODO remove this
let boxesDraggingFunctionality = new BoxesDraggingFunctionality(gameBoard);
boxesDraggingFunctionality.addDraggingEvents();

document.addEventListener("swap", () => {
  console.log("swap was called");
  let content = document.getElementsByClassName("content")[0];
  content.removeChild(content.lastChild);
  content.appendChild(getGameBoardDiv(gameBoard.Board.map(gamePiece => gamePiece.Value), gameBoard.Size));
})

document.getElementsByClassName("content")[0].appendChild(getGameBoardDiv(gameBoard.Board.map(gamePiece => gamePiece.Value), gameBoard.Size));