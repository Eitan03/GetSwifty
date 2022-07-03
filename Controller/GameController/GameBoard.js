import NumberedGamePiece from "./GamePieces/NumberedGamePiece.js";
import EmptyGamePiece from "./GamePieces/EmptyGamePiece.js";

const size = 3;

export default class Board {
    constructor() {
        this.Board = new Array(size * size);

        for (let i = 0; i < size * size - 1; i++) {
            this.Board[i] = new NumberedGamePiece(i);
        }
        this.Board[size * size - 1] = new EmptyGamePiece();
        this.Size = size;
    }

    TrySwapIndexes(index1, index2) {
		if (!(this.CheckIfEmpty(index1) || this.CheckIfEmpty(index2))) {
			return false;
		}
		[this.Board[index1], this.Board[index2]] = [this.Board[index2], this.Board[index1]];
	}

    CheckIfEmpty(index) {
        return this.Board[index].value === "empty";
    }
}
