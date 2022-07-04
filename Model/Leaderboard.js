export default class LeaderBoard {
    constructor() {
        this.Scores = [];
    }

    AddScore(score) {
        let insertionIndex = 0;
        for (
            let i = 0;
            i < this.Scores.length && this.Scores[i].moves <= score.moves;
            i++
        ) {
            insertionIndex++;
        }
        this.Scores.splice(insertionIndex, 0, score);
    }
}
