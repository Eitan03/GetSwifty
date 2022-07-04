import GameBoard from "./Controller/GameBoard.js";
import GetGameBoardDiv from "./View/GetGameBoardDiv.js";
import BoxesDraggingFunctionality from "./View/BoxesDraggingFunctionality.js";
import Leaderboard from "./Model/Leaderboard.js";
import ScoreTracker from "./Controller/ScoreTracker.js";
import GetScoresDiv from "./View/GetScoresDiv.js";

let gameBoard = new GameBoard(3, onSwap, onWin);
window.gameBoard = gameBoard; // TODO remove this

let boxesDraggingFunctionality = new BoxesDraggingFunctionality(onDragEnd);
boxesDraggingFunctionality.addDraggingEvents(document.getElementsByClassName("board-content")[0]);

let leaderboard = new Leaderboard();
window.leaderboard = leaderboard; //TODO remove this
let scoreTracker = new ScoreTracker();
window.scoreTracker = scoreTracker;
scoreTracker.StartNewGame(gameBoard.Size);

updateBoard();
updateLeaderboard();

let resetGameForm = document.getElementById("reset-game-form");
resetGameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (isNaN(Number.parseInt(resetGameForm['size'].value)) || Number.parseInt(resetGameForm['size'].value) <= 1) {
		alert ("Invalid Size was given! Size has to be a number bigger then 1");
		return;
	} 
	gameBoard.Size = Number.parseInt(resetGameForm['size'].value);
    resetGame();
	
});

function onDragEnd(index1, index2) {
    // TODO move some of the input validation here
    gameBoard.TrySwapIndexes(index1, index2);
}

function onWin() {
    leaderboard.AddScore(scoreTracker.GenerateScore());
    updateLeaderboard();
    alert("You Won!");
}

function onSwap(index1, index2) {
    console.log("Swapped!");
    scoreTracker.Moves++;
    updateBoard();
}

function resetGame() {
	gameBoard.ResetGame();
    updateBoard();
    scoreTracker.StartNewGame(gameBoard.Size);
    console.log("reset game");
}

function updateBoard() {
	let content = document.getElementsByClassName("board-content")[0];
    content.innerHTML = '';
    content.appendChild(
        GetGameBoardDiv(
            gameBoard.Board.Pieces.map((gamePiece) => gamePiece.Value),
            gameBoard.Size
        )
    );
}

function updateLeaderboard() {
    let content = document.getElementsByClassName("leaderboard-content")[0];
    content.innerHTML = '';
    content.appendChild(GetScoresDiv(
            leaderboard.Scores
        )
    );
}