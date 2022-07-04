export default function GetGamePieceDiv(value, size, imagePath) {
    let gamePieceDiv = document.createElement("div");

    if (value!=="" && !isNaN(value)) {
        gamePieceDiv.style.background = "url(" + imagePath + ")";
        gamePieceDiv.style.backgroundSize = size * 100 + "%";
        gamePieceDiv.style.backgroundRepeat = "no-repeat";
        gamePieceDiv.style.backgroundPosition =  (((value-1) % size)*(100 / (size - 1) - 1))+ "% " +  (Math.floor((value-1) / size)*(100 / (size - 1) - 1))+ "%";
    }

    gamePieceDiv.innerHTML = value;

    gamePieceDiv.classList.add("game-piece");
    gamePieceDiv.id = "game-piece";
    gamePieceDiv.setAttribute("draggable", "true");
    return gamePieceDiv;
}
