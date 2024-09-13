
import { quizData } from "./data.js";
let currentQuestionIndex = 0;
let score = 0;

const startQuizBtn = document.getElementById('startQuizBtn');
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startQuizBtn.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {

    optionsEl.innerHTML = '';

    const currentQuestion = quizData[currentQuestionIndex];

    questionEl.textContent = currentQuestion.question;

    for (let option in currentQuestion) {
        if (option !== 'question' && option !== 'correct') {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${currentQuestion[option]}`;
            optionsEl.appendChild(label);
        }
    }
}

submitBtn.addEventListener('click', submitAnswer);

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const answer = selectedOption.value;

    if (answer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    quizContainer.style.display = 'none';
    resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}
