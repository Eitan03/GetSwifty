export default function GetScoresDiv(scores) {
    // TODO make this html list
    let scoresDiv = document.createElement("ol");
    scoresDiv.classList.add("scoresList");
    for (let score of scores) {
        let scoreDiv = document.createElement("li");
        scoreDiv.classList.add("score");
        scoreDiv.innerText = score.level + " | " + score.user.name + " | " + score.moves + " | " + score.startingTime.toLocaleString();
        scoresDiv.appendChild(scoreDiv);
    }
    return scoresDiv;
}