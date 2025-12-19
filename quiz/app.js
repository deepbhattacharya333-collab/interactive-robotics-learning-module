function checkAnswer() {
    // Correct answer
    let correctAnswer = "b";

    // Get selected option
    let selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption === null) {
        alert("Please select an answer!");
        return;
    }

    // Check answer
    if (selectedOption.value === correctAnswer) {
        document.getElementById("result").innerText = "✅ Correct Answer!";
        localStorage.setItem("quizScore", 1);
    } else {
        document.getElementById("result").innerText = "❌ Wrong Answer!";
        localStorage.setItem("quizScore", 0);
    }
}
