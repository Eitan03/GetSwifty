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
            this.Board.Set(i, new NumberedGamePiece(i + 1));
        }
        this.Board.Set(this.Size * this.Size - 1, new EmptyGamePiece());
        let arr = this.Board.GetAll();
        do {
            BoardUtils.shuffleArray(arr);
        } while (
            !(
                BoardUtils.isBoardSolvable(arr, this.Size) &&
                !BoardUtils.checkIfWon(arr.map((piece) => piece.Value))
            )
        );
        this.Board.SetAll(arr);
    }

    TrySwapIndexes(index1, index2) {
        if (this.Won) {
            return false;
        }

        if (!this.CheckIfCanSwitch(index1, index2)) {
            console.log("swap was not seccussful");
            return false;
        }
        this.Board.Swap(index1, index2);

        this.onSwap(index1, index2);

        if (
            BoardUtils.checkIfWon(
                this.Board.GetAll().map((gamePiece) => gamePiece.Value)
            )
        ) {
            this.Won = true;
            this.onWin();
            return true;
        }
        return true;
    }

    CheckIfCanSwitch(index1, index2) {
        return (
            BoardUtils.checkIndexesNumberValid(index1, index2, this.Size) &&
            BoardUtils.checkIndexesNearEachOther(index1, index2, this.Size) &&
            BoardUtils.checkOnePieceEmpty(
                this.Board.Get(index1),
                this.Board.Get(index2)
            )
        );
    }
}
