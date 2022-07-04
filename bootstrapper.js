import GameBoard from "./Controller/GameBoard.js";
import GetGameBoardDiv from "./View/GetGameBoardDiv.js";
import BoxesDraggingFunctionality from "./View/BoxesDraggingFunctionality.js";

let gameBoard = new GameBoard(3, onSwap, onWin);
window.gameBoard = gameBoard; // TODO remove this
let boxesDraggingFunctionality = new BoxesDraggingFunctionality(onDragEnd);
boxesDraggingFunctionality.addDraggingEvents();

document.getElementsByClassName("board-content")[0].appendChild(
    GetGameBoardDiv(
        gameBoard.Board.map((gamePiece) => gamePiece.Value),
        gameBoard.Size
    )
);

let resetGameForm = document.getElementById("reset-game-form");
resetGameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("submitted");
	if (isNaN(resetGameForm['size'].value) || Number.parseInt(resetGameForm['size'].value) <= 1) {
		alert ("Invalid Size was given! Size has to be a number bigger then 1");
		return;
	} 
	gameBoard.Size = Number.parseInt(resetGameForm['size'].value);
	gameBoard.ResetGame();
	updateBoard();
	
});

function onDragEnd(index1, index2) {
    gameBoard.TrySwapIndexes(index1, index2);
}

function onWin() {
    alert("You Won!");
}

function onSwap(index1, index2) {
    console.log("Swapped!");
    updateBoard();
}

function updateBoard() {
	let content = document.getElementsByClassName("board-content")[0];
    content.removeChild(content.lastChild);
    content.appendChild(
        GetGameBoardDiv(
            gameBoard.Board.map((gamePiece) => gamePiece.Value),
            gameBoard.Size
        )
    );
}