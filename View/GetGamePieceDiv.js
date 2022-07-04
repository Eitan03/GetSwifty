export default function GetGamePieceDiv(value) {
    let gamePieceDiv = document.createElement("div");
    gamePieceDiv.classList.add("game-piece");
    gamePieceDiv.innerHTML = value;
    gamePieceDiv.id = "game-piece";
    gamePieceDiv.setAttribute("draggable", "true");
    return gamePieceDiv;
}
