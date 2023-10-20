const questions = [
    {
        question: "1 + 1 = ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        question: "7 + 3 = ?",
        answers: [
            {text: "2", correct: false},
            {text: "6", correct: false},
            {text: "4", correct: false},
            {text: "10", correct: true},
            {text: "8", correct: false},
        ] 
    },
    {
        question: "28 - 3 = ?",
        answers: [
            {text: "23", correct: false},
            {text: "20", correct: false},
            {text: "25", correct: true},
            {text: "27", correct: false},
            {text: "19", correct: false},
        ] 
    },
    {
        question: "23 + 13 = ?",
        answers: [
            {text: "34", correct: false},
            {text: "28", correct: false},
            {text: "26", correct: false},
            {text: "36", correct: true},
            {text: "31", correct: false},
        ] 
    },
    {
        question: "19 + 3 = ?",
        answers: [
            {text: "21", correct: false},
            {text: "18", correct: false},
            {text: "13", correct: false},
            {text: "22", correct: true},
            {text: "25", correct: false},
        ] 
    },
    {
        question: "1 + 1 = ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "3", correct: false},
        ]
    },
    {
        question: "1 + 1 = ?",
        answers: [
            {text: "2", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
            {text: "0", correct: false},
            {text: "3", correct: false},
        ]
    },  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();   
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;   
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");    
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Tentar novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}   

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
console.log("teste");