import GameBoard from "./Controller/GameBoard.js";
import GetGameBoardDiv from "./View/GetGameBoardDiv.js";
import BoxesDraggingFunctionality from "./View/BoxesDraggingFunctionality.js";
import LeaderboardManager from "./Controller/LeaderboardsManager.js";
import ScoreTracker from "./Controller/ScoreTracker.js";
import GetScoresDiv from "./View/GetScoresDiv.js";
import ImageLoader from "./View/ImageLoader.js";

let gameBoard = new GameBoard(3, onSwap, onWin);

let boxesDraggingFunctionality = new BoxesDraggingFunctionality(onDragEnd);
boxesDraggingFunctionality.addDraggingEvents(
    document.getElementsByClassName("board-content")[0]
);

let leaderboardManager = new LeaderboardManager();
let scoreTracker = new ScoreTracker();
scoreTracker.StartNewGame(gameBoard.Size);

const imageLoader = new ImageLoader(
    "public/placeHolderImage.png",
    (imageURL) => {
        updateBoard();
    }
);

updateBoard();
updateLeaderboard();

let resetGameForm = document.getElementById("reset-game-form");
resetGameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        isNaN(Number.parseInt(resetGameForm["size"].value)) ||
        Number.parseInt(resetGameForm["size"].value) <= 1
    ) {
        alert("Invalid Size was given! Size has to be a number bigger then 1");
        return;
    }
    gameBoard.Size = Number.parseInt(resetGameForm["size"].value);
    resetGame();
});

let chooseImageDiv = document.getElementById("choose-image-input");
chooseImageDiv.addEventListener("change", (e) => {
    e.preventDefault();
    const imageFile = chooseImageDiv.files[0];
    if (imageFile) imageLoader.ProccessImage(imageFile);
});

function onDragEnd(index1, index2) {
    if (
        index1 === undefined ||
        index2 === undefined ||
        isNaN(index1) ||
        isNaN(index2)
    ) {
        return;
    }
    gameBoard.TrySwapIndexes(index1, index2);
}

function onWin() {
    let name = prompt(
        "Congratulations! You Won!\nPlease Enter your name to save the score or press cancel in order for the score to not be saved"
    );
    if (name !== null) {
        scoreTracker.User.name = name;
        leaderboardManager
            .getLeaderboard(gameBoard.Size)
            .AddScore(scoreTracker.GenerateScore());
        updateLeaderboard();
    }
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
    updateLeaderboard();
    console.log("reset game");
}

function updateBoard() {
    let content = document.getElementsByClassName("board-content")[0];
    content.innerHTML = "";
    content.appendChild(
        GetGameBoardDiv(
            gameBoard.Board.GetAll().map((gamePiece) => gamePiece.Value),
            gameBoard.Size,
            imageLoader.image
        )
    );
}

function updateLeaderboard() {
    let content = document.getElementsByClassName("leaderboard-content")[0];
    content.innerHTML = "";
    content.appendChild(
        GetScoresDiv(leaderboardManager.getLeaderboard(gameBoard.Size).Scores)
    );
}
