const questions = [
    {
        question: "Qual é o nome científico do Urso-Preguiça?",
        answers: [
            {text: "Melursus ursinus", correct: true},
            {text: "Tremarctos ornatus", correct: false},
            {text: "Helarctos malayanus", correct: false},
            {text: "Ursus thibetanus", correct: false},
            {text: "Ursus americanus", correct: false},
        ],
        img: "img/1qbackground.jpg",
    },
    {
        question: "Quais ursos possuem uma mancha em forma de \"V\" no peito ?",
        answers: [
            {text: "Urso negro asiático e urso negro americano", correct: false},
            {text: "Urso polar e urso negro americano", correct: false},
            {text: "Urso do Sol e urso-preguiça", correct: false},
            {text: "Urso negro asiático e urso-preguiça", correct: true},
            {text: "Urso-de-óculos e urso pardo", correct: false},
        ],
        img: "img/2qbackground.jpg",
    },
    {
        question: "Em quais regiões é possível encontrar ursos pandas-gigantes?",
        answers: [
            {text: "Canadá, alguns estados dos Estados Unidos e norte do México", correct: false},
            {text: "Malásia, Tailândia, Vietnã e Bornéu", correct: false},
            {text: "Venezuela, Colômbia, Equador, Bolívia e Peru", correct: false},
            {text: "Sudoeste da China", correct: true},
            {text: "Círculo Polar Ártico", correct: false},
        ],
        img: "img/3qbackground.jpg",
    },
    {
        question: "Qual das seguintes espécies de ursos não corre risco de extinção atualmente?",
        answers: [
            {text: "Urso negro americano", correct: true},
            {text: "Urso do sol", correct: false},
            {text: "Urso polar", correct: false},
            {text: "Urso-preguiça", correct: false},
            {text: "Urso-de-óculos", correct: false},
        ],
        img: "img/4qbackground.png",
    },
    {
        question: "Qual das seguintes espécies de ursos possui a alimentação mais atípica?",
        answers: [
            {text: "Urso pardo", correct: false},
            {text: "Urso panda-gigante", correct: true},
            {text: "Urso negro asiático", correct: false},
            {text: "Urso negro americano", correct: false},
            {text: "Urso polar", correct: false},
        ],
        img: "img/5qbackground.jpg",
    },
    {
        question: "Qual das seguintes espécies de ursos tem como ameaça o uso medicinal de sua bile?",
        answers: [
            {text: "Urso panda-gigante", correct: false},
            {text: "Urso pardo", correct: false},
            {text: "Urso do Sol", correct: true},
            {text: "Urso-preguiça", correct: false},
            {text: "Urso-de-óculos", correct: false},
        ],
        img: "img/6qbackground.jpg",
    },
    {
        question: "Qual é a maior espécie de ursos existente em termos de proporção corporal?",
        answers: [
            {text: "Urso-de-óculos", correct: false},
            {text: "urso-preguiça", correct: false},
            {text: "Urso panda-gigante", correct: false},
            {text: "Urso negro asiático", correct: false},
            {text: "Urso polar", correct: true},
        ],
        img: "img/7qbackground.png",
    },
    {
        question: "Qual é a cor da pelagem dos ursos polares ?",
        answers: [
            {text: "Marrom", correct: false},
            {text: "Incolor", correct: true},
            {text: "Branca", correct: false},
            {text: "Bege", correct: false},
            {text: "Preta", correct: false},
        ],
        img: "img/8qbackground.jpg",
    },
    {
        question: "Qual das espécies de ursos tem a pelagem do pescoço mais longa, formando uma espécie de juba ?",
        answers: [
            {text: "Urso de óculos", correct: false},
            {text: "Urso do sol", correct: false},
            {text: "Urso negro americano", correct: false},
            {text: "Urso negro asiático", correct: true},
            {text: "Urso-preguiça", correct: false},
        ],
        img: "img/9qbackground.webp",
    },
    {
        question: "Qual das espécies de ursos abaixo melhor tolera a presença humana ?",
        answers: [
            {text: "Urso negro americano", correct: true},
            {text: "Urso negro asiático", correct: false},
            {text: "Urso panda-gigante", correct: false},
            {text: "Urso pardo", correct: false},
            {text: "Urso do sol", correct: false},
        ],
        img: "img/10qbackground.webp",
    }
];

const questionImage = document.getElementById("question-img");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let scoreText = "";

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
    questionImage.src = currentQuestion.img;
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

function showText() {

    if (score <= 5) {
        scoreText = "Você não sabe quase nada sobre ursos. Estude mais e tente novamente!";
        scoreImage = "img/scoreBackground5.webp";
    } else if (score <= 7){
        scoreText = "Aparentemente você já estudou sobre ursos alguma vez, mas ainda tem muito o que aprender. Estude mais e tente novamente!";
        scoreImage = "img/scoreBackground7.jpg";
    } else if (score < 10) {
        scoreText = "Parabés, pelo visto você entende bastante sobre ursos, mas lembre-se que sempre é possível aprimorar seus conhecimentos. Estude mais e tente novamente! ";
        scoreImage = "img/scoreBackground10.jpg";
    } else {
        scoreText = "Parabéns, você certamente é um amante de ursos. Sempre que puder, espalhe esse conhecimento com outras pessoas!";
        scoreImage = "img/scoreBackground.png";
    }

    let text = document.createElement('p');
    text.className = "score-text";
    text.innerText = scoreText;

    let element = document.querySelector('.score-text-div');
    element.appendChild(text);
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}`;
    showText();
    nextButton.innerHTML = "Tentar novamente";
    nextButton.style.display = "block";
    questionImage.src = scoreImage;
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
        document.querySelector(".score-text").remove();
        startQuiz();
    }
});

startQuiz();
console.log("teste");