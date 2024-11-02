const questions = [
    {
        question: "What is the force on an object with a mass of 2 kg and an acceleration of 3 m/s²?",
        options: {
            A: "3 N",
            B: "6 N",
            C: "5 N",
            D: "9 N"
        },
        correctAnswer: "B"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.querySelector("#question-container").style.display = "block";
    document.querySelector("#score-display").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector("#question-text").innerText = question.question;
    document.querySelectorAll(".answer-btn").forEach((button, index) => {
        const optionKey = Object.keys(question.options)[index];
        button.innerText = `${optionKey}: ${question.options[optionKey]}`;
    });
}

function selectAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.correctAnswer) {
        score += 10;
    }
    document.querySelector("#score-display").innerText = `Score: ${score}`;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.querySelector("#question-container").style.display = "none";
    document.querySelector("#score-display").innerText += " - Game Over!";
}
