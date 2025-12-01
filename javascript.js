


const questionElement = document.getElementById("quizQuestion");
const nextBtn = document.getElementById("nextBtn");
const answerButton = document.getElementById("answerButton");
const darkModeBtn = document.getElementById("darkModeBtn");
const lighModeBtn = document.getElementById("lightModeBtn");
const body = document.body;
const quizApp = document.querySelector(".quizapp");



let currentQuestionIndex = 0;
let score = 0;

darkModeBtn.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    quizApp.style.backgroundColor = "#031d0aff";
    quizApp.style.color = "rgb(252, 246, 238)";
    nextBtn.style.backgroundColor ="#000502ff";
    nextBtn.style.color="white";
});

lighModeBtn.addEventListener("click", () => {
    body.style.backgroundColor = "rgb(233, 158, 170)";
    body.style.color = "white";
    quizApp.style.backgroundColor = "rgb(250, 236, 214)";
    quizApp.style.color = "#074016";
    nextBtn.style.backgroundColor ="rgb(233, 158, 170)";
    nextBtn.style.color="#074016";
});


const questions = [
{ 
    question: "En av huvudkaraktärerna i Wicked heter Elphaba Thropp",
    answers: [
        {option: "true", correct: true},
        {option: "false", correct: false},
    ]
},
{
    question: "En av huvudkaraktärerna i Wicked kallas Glinda",
    answers: [
        {option: "true", correct: true},
        {option: "false", correct: false},
    ]
},
{
    question: "En av huvudkaraktärerna i Wicked heter Elphaba Thropp",
    answers: [
        {option: "true", correct: true},
        {option: "false", correct: false},
    ]
},
{
    question: "Elphaba har ofta en rosa klänning",
    answers: [
        {option: "true", correct: false},
        {option: "false", correct: true},
    ]
},
{
    question: "Glinda hette tidigare Galinda",
    answers: [
        {option: "true", correct: true},
        {option: "false", correct: false},
    ]
},
{
    question: "Elphaba har en tvillingbror",
    answers: [
        {option: "true", correct: false},
        {option: "false", correct: true},
    ]
},
]

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;
    questionElement.innerHTML = "Fråga " + questionNr + ". " + currentQuestion.question;

    currentQuestion.answers.array.forEach(a => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        answerButton.appendChild("button");
        
    });
}

nextBtn.addEventListener("click", handleNextQuestion);

function resetState(){
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function handleNextQuestion() {
    currentQuestionIndex++; 

    if (currentQuestionIndex < questions.length){
        resetState();
        showQuestion();
    } else {
        showScore();
        resetState();
    }
}

startQuiz();

