import GameBoard from "./Controller/GameController/GameBoard.js"
import GameBoardView from "./View/GameBoardView.js";

let gameBoard = new GameBoardView(new GameBoard());
document.getElementsByClassName("content")[0].appendChild(gameBoard.getGameBoardDiv());