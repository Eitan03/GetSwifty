export default class ScoreTracker {
    StartNewGame(boardSize) {
        this.StartingTime = new Date();
        this.Level = boardSize + "x" + boardSize;
        this.User = {
            name: "unknown",
        };
        this.Moves = 0;
    }

    GenerateScore() {
        return {
            user: this.User,
            level: this.Level,
            startingTime: this.StartingTime,
            moves: this.Moves,
        };
    }
}
