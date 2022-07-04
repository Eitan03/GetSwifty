export default class BoardHolder {
    constructor(boardValuesArr) {
        this.pieces = boardValuesArr;
    }

    IsGameSaved() {
        return true;
    }

    Get(index) {
        return this.pieces[index];
    }

    GetAll() {
        return this.pieces;
    }

    Set(index, value) {
        this.pieces[index] = value;
    }

    SetAll(valArr) {
        this.pieces[valArr];
    }

    Swap(index1, index2) {
        let temp = this.pieces[index1];
        this.pieces[index1] = this.pieces[index2];
        this.pieces[index2] = temp;
    }
}
