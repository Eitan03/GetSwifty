import NumberedGamePiece from "./GamePieces/NumberedGamePiece.js";
import EmptyGamePiece from "./GamePieces/EmptyGamePiece.js";

import * as BoardUtils from "./BoardUtils.js";

export default class Board {
    constructor(size, onSwap, onWin) {
        this.Size = size;
        this.onSwap = onSwap;
        this.onWin = onWin;
        this.Won = false;

        // TODO model array holder
        this.Board = new Array(size * size);
        this.ResetGame();
    }

    ResetGame() {
        this.Won = false;
        
        for (let i = 0; i < this.Size * this.Size - 1; i++) {
            this.Board[i] = new NumberedGamePiece(i + 1);
        }
        this.Board[this.Size * this.Size - 1] = new EmptyGamePiece();
        do {
            BoardUtils.shuffleArray(this.Board);
        } while (!BoardUtils.isBoardSolvable(this.Board, this.Size));
    }

    TrySwapIndexes(index1, index2) {
        if (this.Won) {
            return false;
        }

        if (!this.CheckIfCanSwitch(index1, index2)) {
            console.log("swap was not seccussful");
            return false;
        }
        [this.Board[index1], this.Board[index2]] = [
            this.Board[index2],
            this.Board[index1],
        ];
        // TODO remove from here
        if (BoardUtils.checkIfWon(this.Board.map(gamePiece => gamePiece.Value))) {
            this.Won = true;
            this.onWin();
        }
        console.log("swap was seccussful");
        this.onSwap(index1, index2);
        return true;
    }

    CheckIfCanSwitch(index1, index2) {
        return (
            BoardUtils.checkIfIndexesDefined(index1, index2) && 
            BoardUtils.checkIndexesNumberValid(index1, index2, this.Size) && 
            BoardUtils.checkIndexesNearEachOther(index1, index2, this.Size) &&
            BoardUtils.checkOnePieceEmpty(this.Board[index1], this.Board[index2])
            );
    }
}
