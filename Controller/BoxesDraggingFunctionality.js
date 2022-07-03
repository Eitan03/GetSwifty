export default class BoxesDraggingFunctionality {
    constructor(boardController) {
        this.BoardController = boardController;

        this.selectedPiece = undefined;
        this.selectedDestination = undefined;
    }


    addDraggingEvents() {
        document.addEventListener("dragstart", (event) => {
            let gamePieceIndex = this.GetgamePieceIndex(event.target);
            if (gamePieceIndex !== undefined)
                this.DragStart(gamePieceIndex);
        });

		document.addEventListener("dragend", (event) => {
            let gamePieceIndex = this.GetgamePieceIndex(event.target);
            if (gamePieceIndex !== undefined)
                this.DragEnd(gamePieceIndex);
        });

		document.addEventListener("dragover", (event) => {
            event.preventDefault();
            let gamePieceIndex = this.GetgamePieceIndex(event.target);
            if (gamePieceIndex !== undefined)
                this.DragOver(gamePieceIndex);
        });

		document.addEventListener("drop", (event) => {
            let gamePieceIndex = this.GetgamePieceIndex(event.target);
            if (gamePieceIndex !== undefined)
                this.Drop(gamePieceIndex);
        });
    }

    GetgamePieceIndex(div) {
        return Number.parseInt(div.id.split('-').pop());
    }

    DragStart(gamePieceIndex) {
		console.log(`picked up number ${gamePieceIndex}`)
		// TODO add animations?
	}

    DragEnd(gamePieceIndex) {
		console.log(`ended number ${gamePieceIndex}`)
		this.selectedPiece = gamePieceIndex;

		// TODO move outta here
        if (this.selectedPiece !== undefined && this.selectedDestination !== undefined
            && isNaN(this.selectedPiece) && isNaN(this.selectedDestination)
            ) {
            console.log(`swapping ${this.selectedDestination} with ${this.selectedDestination}`);
		    this.BoardController.TrySwapIndexes(this.selectedPiece, this.selectedDestination);
        } else {
            console.log(`Invalid Drop! ${this.selectedPiece} with ${this.selectedDestination}`);
        }
		this.selectedPiece = undefined;
		this.selectedDestination = undefined;
	}

    DragOver(gamePieceIndex) {
		//console.log(`hovered over number ${gamePieceIndex}`)
		// TODO add animations?
	}

    Drop(gamePieceIndex) {
		console.log(`dropped on number ${gamePieceIndex}`)
		this.selectedDestination = gamePieceIndex
	}
}
