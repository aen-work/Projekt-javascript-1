/*
quizQuestion
true-button
false-button
nextBtn
correct
*/
const questionElement = document.getElementById("quizQuestion");
const trueBtn = document.getElementById("true-button");
const falseBtn = document.getElementById("false-button");
const correctBtn = document.getElementById("correct");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

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

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("btn");
        answerButton.appendChild(button);

    })
}

startQuiz();