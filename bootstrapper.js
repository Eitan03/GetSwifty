import GameBoard from "./Controller/GameController/GameBoard.js";
import GameBoardView from "./View/GameBoardView.js";
import BoxesDraggingFunctionality from "./Controller/BoxesDraggingFunctionality.js";

let gameBoard = new GameBoard();
window.gameBoard = gameBoard; // TODO remove this
let boxesDraggingFunctionality = new BoxesDraggingFunctionality(gameBoard);
boxesDraggingFunctionality.addDraggingEvents();

document.addEventListener("swap", () => {
  console.log("swap was called");
  let content = document.getElementsByClassName("content")[0];
  content.removeChild(content.lastChild);
  content.appendChild(gameBoardView.getGameBoardDiv());
})

let gameBoardView = new GameBoardView(gameBoard);
document.getElementsByClassName("content")[0].appendChild(gameBoardView.getGameBoardDiv());