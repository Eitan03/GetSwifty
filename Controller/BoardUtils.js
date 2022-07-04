import NumberedGamePiece from "./GamePieces/NumberedGamePiece.js";
import EmptyGamePiece from "./GamePieces/EmptyGamePiece.js";

export function checkIfIndexesDefined(index1, index2) {
    return !(index1 === undefined || index2 === undefined);
}

export function checkIndexesNumberValid(index1, index2, size) {
    return (
        !isNaN(index1) &&
        !isNaN(index2) &&
        index1 < size*size &&
        index2 < size*size
    );
}

export function checkOnePieceEmpty(gamePiece1, gamePiece2) {
    return ( checkIfEmpty(gamePiece1) || checkIfEmpty(gamePiece2) );
}

export function checkIndexesNearEachOther(index1, index2, size){
    return (
        Math.abs(index1 - index2) == 1 ||
        Math.abs(index1 - index2) % size == 0
    );
}

export function checkIfEmpty(gamePiece) {
    return gamePiece instanceof EmptyGamePiece;
}

// TODO maybe inject this?
export function isBoardSolvable(boardArr, size) {
    let ReversedSize = 0;
    for (let i = 0; i < size * size - 1; i++) {
        if (!(boardArr[i] instanceof NumberedGamePiece)) continue;
        for (let j = i + 1; j < boardArr.length - 1; j++) {
            if (!(boardArr[j] instanceof NumberedGamePiece)) continue;
            if (boardArr[i].Value > boardArr[j].Value)
                ReversedSize += boardArr[j].Value;
        }
    }
    if (size % 2 == 1) {
        return ReversedSize % 2 == 0;
    } else {
        let emptySpaceIndex =
            boardArr.findIndex((elem) => elem instanceof EmptyGamePiece) + 1;
        return (ReversedSize + emptySpaceIndex) % 2 == 0;
    }
}

export function checkIfWon(boardArr) {
    let isWon = true;
    for (let i = 0; i < boardArr.length - 1; i++) {
        isWon = (!isNaN(boardArr[i]) && boardArr[i]===(i+1))
        if (!isWon) break;
    }

    return isWon
}

/*
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
*/

// TODO remove bc of debugging

export function shuffleArray(array) {
    [array[0], array[1]] = [array[1], array[0]];
}

