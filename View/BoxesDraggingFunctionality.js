export default class BoxesDraggingFunctionality {
    constructor(onDragEnd) {
        this.onDragEnd = onDragEnd;

        this.selectedPieceIndex = undefined;
        this.selectedDestinationIndex = undefined;
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
		this.selectedPieceIndex = gamePieceIndex;

		// TODO move outta here
        this.onDragEnd(this.selectedPieceIndex, this.selectedDestinationIndex);
		this.selectedPieceIndex = undefined;
		this.selectedDestinationIndex = undefined;
	}

    DragOver(gamePieceIndex) {
		//console.log(`hovered over number ${gamePieceIndex}`)
		// TODO add animations?
	}

    Drop(gamePieceIndex) {
		console.log(`dropped on number ${gamePieceIndex}`)
		this.selectedDestinationIndex = gamePieceIndex
	}
}
