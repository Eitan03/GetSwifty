import Leaderboard from "../Model/Leaderboard.js";

export default class LeaderboardManager {
    constructor() {
        this.leaderboards = new Map();
    }

    getLeaderboard(size) {
        if (!this.leaderboards.has(size)) {
            this.leaderboards.set(size, new Leaderboard());
        }
        return this.leaderboards.get(size);
    }
}