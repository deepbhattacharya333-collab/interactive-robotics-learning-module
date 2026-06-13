// ---------------- QUESTIONS ----------------
let questions = [
    {
        question: "What does an ultrasonic sensor measure?",
        optionA: "Temperature",
        optionB: "Distance",
        optionC: "Light intensity",
        optionD: "Sound volume",
        answer: "b"
    },
    {
        question: "Which part is the brain of a robot?",
        optionA: "Motor",
        optionB: "Battery",
        optionC: "Microcontroller",
        optionD: "Wheel",
        answer: "c"
    },
    {
        question: "Which sensor is used to detect light?",
        optionA: "Ultrasonic sensor",
        optionB: "LDR",
        optionC: "IR sensor",
        optionD: "Gyroscope",
        answer: "b"
    },
    {
        question: "What is the use of a motor in robotics?",
        optionA: "To sense objects",
        optionB: "To give movement",
        optionC: "To store data",
        optionD: "To control signals",
        answer: "b"
    }
];

let questionIndex = 0;
let score = 0;
let answered = false;


function loadQuestion() {

    document.getElementById("question").innerText =
        questions[questionIndex].question;

    document.getElementById("optionA").innerText =
        questions[questionIndex].optionA;

    document.getElementById("optionB").innerText =
        questions[questionIndex].optionB;

    document.getElementById("optionC").innerText =
        questions[questionIndex].optionC;

    document.getElementById("optionD").innerText =
        questions[questionIndex].optionD;

    let options = document.getElementsByName("answer");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }

    document.getElementById("result").innerText = "";
    answered = false;
}


function checkAnswer() {

    let selectedAnswer = "";
    let options = document.getElementsByName("answer");

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedAnswer = options[i].value;
        }
    }

    if (selectedAnswer === "") {
        document.getElementById("result").innerText =
            "Please select an option";
        return;
    }

    if (answered === true) {
        return;
    }

    if (selectedAnswer === questions[questionIndex].answer) {
        score++;
        document.getElementById("result").innerText = "Correct Answer!";
    } else {
        document.getElementById("result").innerText = "Wrong Answer!";
    }

    answered = true;
}


function nextQuestion() {

    if (answered === false) {
        document.getElementById("result").innerText =
            "Please submit your answer first";
        return;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            "<h2>Quiz Finished</h2>" +
            "<p>Your Score: " + score + " / " + questions.length + "</p>";
    }
}  


// ---------------- START QUIZ ----------------
loadQuestion();
