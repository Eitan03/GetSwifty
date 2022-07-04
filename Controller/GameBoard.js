import NumberedGamePiece from "../Model/GamePieces/NumberedGamePiece.js";
import EmptyGamePiece from "../Model/GamePieces/EmptyGamePiece.js";
import BoardHolder from "../Model/BoardHolder.js";

import * as BoardUtils from "./BoardUtils.js";

export default class Board {
    constructor(size, onSwap, onWin) {
        this.Size = size;
        this.onSwap = onSwap;
        this.onWin = onWin;
        this.Won = false;

        this.ResetGame();
    }

    ResetGame() {
        this.Won = false;
        this.Board = new BoardHolder(new Array(this.Size * this.Size));
        for (let i = 0; i < this.Size * this.Size - 1; i++) {
            this.Board.Pieces[i] = new NumberedGamePiece(i + 1);
        }
        this.Board.Pieces[this.Size * this.Size - 1] = new EmptyGamePiece();
        do {
            BoardUtils.shuffleArray(this.Board.Pieces);
        } while (!BoardUtils.isBoardSolvable(this.Board.Pieces, this.Size));
    }

    TrySwapIndexes(index1, index2) {
        if (this.Won) {
            return false;
        }

        if (!this.CheckIfCanSwitch(index1, index2)) {
            console.log("swap was not seccussful");
            return false;
        }
        [this.Board.Pieces[index1], this.Board.Pieces[index2]] = [
            this.Board.Pieces[index2],
            this.Board.Pieces[index1],
        ];
        
        this.onSwap(index1, index2);
        // TODO remove from here
        if (BoardUtils.checkIfWon(this.Board.Pieces.map(gamePiece => gamePiece.Value))) {
            this.Won = true;
            this.onWin();
            return true;
        }
        return true;
    }

    CheckIfCanSwitch(index1, index2) {
        return (
            BoardUtils.checkIfIndexesDefined(index1, index2) && 
            BoardUtils.checkIndexesNumberValid(index1, index2, this.Size) && 
            BoardUtils.checkIndexesNearEachOther(index1, index2, this.Size) &&
            BoardUtils.checkOnePieceEmpty(this.Board.Pieces[index1], this.Board.Pieces[index2])
            );
    }
}
