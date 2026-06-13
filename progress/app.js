window.onload = function () {

    let totalQuestions = 4; 

    let score = localStorage.getItem("quizScore");

    
    if (score === null) {
        score = 0;
    }

    score = Number(score);

    let percentage = Math.round((score / totalQuestions) * 100);

    document.getElementById("total").innerText = totalQuestions;
    document.getElementById("score").innerText = score;
    document.getElementById("percentage").innerText = percentage;

    document.getElementById("progress-fill").style.width = percentage + "%";
};

function restartQuiz() {
    localStorage.removeItem("quizScore");
    window.location.href = "../quiz/index.html";
}
