import NumberedGamePiece from "./GamePieces/NumberedGamePiece.js";
import EmptyGamePiece from "./GamePieces/EmptyGamePiece.js";

const size = 3;

export default class Board {
    constructor() {
        this.Size = size;

        // TODO model array holder
        this.Board = new Array(size * size);
        this.ResetGame();
    }

    FindGamePiece(id) {
        return this.Board.find(gamePiece => id === gamePiece.Id);
    }

    ResetGame() {
        for (let i = 0; i < size * size - 1; i++) {
            this.Board[i] = new NumberedGamePiece(i);
        }
        this.Board[size * size - 1] = new EmptyGamePiece();
        do {
            shuffleArray(this.Board);
        } while (!this.isBoardSolvable());
    }

    TrySwapIndexes(index1, index2) {
        if (
            (!(this.CheckIfEmpty(index1) || this.CheckIfEmpty(index2))) 
            // TODO
            || !((Math.abs(index1 - index2) == 1) || ((Math.abs(index1 - index2) % this.Size) == 0))
            ) {
            console.log("swap was not seccussful");
            return false;
        }
        [this.Board[index1], this.Board[index2]] = [
            this.Board[index2],
            this.Board[index1],
        ];
        // TODO maybe remove from here
        document.dispatchEvent(new Event("swap"));
        console.log("swap was seccussful");
        return true;
    }

    CheckIfEmpty(index) {
        console.log("index");
        console.log(index);
        return this.Board[index].Value === "empty";
    }

    // TODO maybe inject this?
    isBoardSolvable() {
        let ReversedSize = 0;
        for (let i = 0; i < this.Board.length - 1; i++) {
            if (!(this.Board[i] instanceof NumberedGamePiece)) continue;
            for (let j = i + 1; j < this.Board.length - 1; j++) {
                if (!(this.Board[j] instanceof NumberedGamePiece)) continue;
                if (this.Board[i].Value > this.Board[j].Value)
                    ReversedSize += this.Board[j].Value;
            }
        }
        if (this.Size % 2 == 1) {
            return ReversedSize % 2 == 0;
        } else {
            let emptySpaceIndex =
                this.Board.findIndex((elem) => elem instanceof EmptyGamePiece) +
                1;
            return (ReversedSize + emptySpaceIndex) % 2 == 0;
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
