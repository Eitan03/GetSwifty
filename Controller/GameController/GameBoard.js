import NumberedGamePiece from "./GamePieces/NumberedGamePiece.js";
import EmptyGamePiece from "./GamePieces/EmptyGamePiece.js";

const size = 3;

export default class Board {
    constructor() {
        this.board = new Array(size * size);

        for (let i = 0; i < size * size - 1; i++) {
            this.board[i] = new NumberedGamePiece(i);
        }
        this.board[size * size - 1] = new EmptyGamePiece();
    }

    TrySwapIndexes(index1, index2) {
		if (!(this.CheckIfEmpty(index1) || this.CheckIfEmpty(index2))) {
			return false;
		}
		[this.board[index1], this.board[index2]] = [this.board[index2], this.board[index1]];
	}

    CheckIfEmpty(index) {
        return this.board[index].value === "empty";
    }
}
