


const questionElement = document.getElementById("quizQuestion");
const nextBtn = document.getElementById("nextBtn");
const answerButton = document.getElementById("answerButton");
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
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

lightModeBtn.addEventListener("click", () => {
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
    question: "Elphaba kan flyga på en kvast",
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
{
    question: "Vilka två skådespelare spelar huvudrollerna i filmen Wicked (2024)?",
    answers: [
        {option: "A: Sandra Bullock och Jeff Goldblum", correct: false},
        {option: "B: Cynthia Erivo och Ariana Grande", correct: true},
        {option: "C: Michelle Yeoh och Lady Gaga", correct: false},
        {option: "D: Ariana Grande och Lady Gaga", correct: false},
    ]
},
{
    question: "Vad är titeln på uppföljaren till Wicked?",
    answers: [
        {option: "Wicked: Again", correct: false},
        {option: "Wicked: Return to Oz", correct: false},
        {option: "Wicked: For Good", correct: true},
        {option: "Wicked: The Awakening", correct: false},
    ]
},
{
    question: "Vem regisserade filmen Wicked (2024)?",
    answers: [
        {option: "Steven Spielberg", correct: false},
        {option: "Jon M. Chu", correct: true},
        {option: "Christopher Nolan", correct: false},
        {option: "Tim Burton", correct: false},
    ]

},
{
    question: "Vad heter landet som Wicked utspelar sig i?",
    answers: [
        {option: "Oz", correct: true},
        {option: "Emerald land", correct: false},
        {option: "Narnia", correct: false},
        {option: "Panem", correct: false},

    ]

},
{
    question: "Vem är rektor på Shiz University?",
    answers: [
        {option: "The Wizard", correct: false},
        {option: "Madame Morrible", correct: true},
        {option: "Minerva McGonagall", correct: false},
        {option: "President Snow", correct: false},
    ]

},
{
    question: "Vem gav Elphaba hennes svarta hatt?",
    answers: [
        {option: "Glinda", correct: true},
        {option: "Prins Fiyero", correct: false},
        {option: "Nessa", correct: false},
        {option: "The Wizard of Oz", correct: false},
    ]
}
]

//Spara alla rätta svar i en array som sedan jämförs med array answers
let correctAnswers = [];


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML ="Next";
    resetState();
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;
    questionElement.innerHTML = "Fråga " + questionNr + ". " + currentQuestion.question;

    if (questionNr <= 6 ) {

    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        label.style.display = "block";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answerOption";
        radio.value = answer.option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + answer.option));

        answerButton.appendChild(label);
    });
} else {
    currentQuestion.answers.forEach(answer => {
    const label = document.createElement("label");
    label.style.display = "block";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "answerOption"; 
    checkbox.value = answer.option;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + answer.option));

    answerButton.appendChild(label);
});

}
}

nextBtn.addEventListener("click", handleNextQuestion);

function resetState(){
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}



function handleNextQuestion() {
 
    const selected = Array.from(document.querySelectorAll("input[name='answerOption']:checked"),
    input => input.value);

    const correct = questions[currentQuestionIndex].answers
        .filter(a => a.correct === true)
        .map(a => a.option);

    if (arraysEqual(selected, correct)) {
    console.log("Match!");
    score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length){
        resetState();
        showQuestion();
    } else {
        resetState();
        if (score < 6) {
        questionElement.innerHTML = "Quiz klart! Du fick underkänt " + score + " rätt av " + questions.length;
        quizApp.style.backgroundColor = "red";
        quizApp.style.color ="grey";
        }else if (score >=6 && score <=9) {
            questionElement.innerHTML = "Quiz klart! Du fick godkänt, men bättre kan du! " + score + " rätt av " + questions.length;
            quizApp.style.backgroundColor = "Yellow";
            quizApp.style.color ="grey";
        } else { questionElement.innerHTML = "Quiz klart! Du fick godkänt " + score + " rätt av " + questions.length;
            quizApp.style.backgroundColor = "green";
            quizApp.style.color ="grey";

        }
    }
}

startQuiz();

