const questionElement = document.getElementById("quizQuestion");
const nextBtn = document.getElementById("nextBtn");
const answers = document.getElementById("answers");
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const body = document.body;
const quizApp = document.querySelector(".quizapp");
const pointsCounter = document.getElementById("score");
const pointsContainer = document.querySelector(".quizPoints");
const h4 = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

darkModeBtn.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    quizApp.style.backgroundColor = "#031d0aff";
    quizApp.style.color = "rgb(252, 246, 238)";
    nextBtn.style.backgroundColor ="#000502ff";
    nextBtn.style.color="white";
    pointsContainer.style.color="white";
    pointsContainer.style.backgroundColor="#031d0aff";
});

lightModeBtn.addEventListener("click", () => {
    body.style.backgroundColor = "rgb(233, 158, 170)";
    body.style.color = "white";
    quizApp.style.backgroundColor = "rgb(250, 236, 214)";
    quizApp.style.color = "#074016";
    nextBtn.style.backgroundColor ="rgb(233, 158, 170)";
    nextBtn.style.color="#074016";
    pointsContainer.style.color="#074016";
    pointsContainer.style.backgroundColor="rgb(250, 236, 214)";
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
        {option: "Sandra Bullock och Jeff Goldblum", correct: false},
        {option: "Cynthia Erivo och Ariana Grande", correct: true},
        {option: "Michelle Yeoh och Lady Gaga", correct: false},
        {option: "Ariana Grande och Lady Gaga", correct: false},
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
        {option: "Fiyero", correct: false},
        {option: "Nessarose", correct: false},
        {option: "The Wizard of Oz", correct: false},
    ]
},
{
    question: "Vilka av dessa karaktärer finns INTE med i Wicked?",
    answers: [
        {option: "Jeanine", correct: true},
        {option: "Jack", correct: true},
        {option: "Wonka", correct: true},
        {option: "Boq", correct: false},
    ]
},
{
    question: "Välj alla platser som finns med i Wicked",
    answers: [
        {option: "Emerald City", correct: true},
        {option: "Shiz University", correct: true},
        {option: "Munchkinland", correct: true},
        {option: "Diagon Alley", correct: false},
    ]
},
]

function startQuiz(){
    nextBtn.innerHTML ="Next";
    resetState();
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;
    questionElement.innerHTML = "Fråga " + questionNr + ". " + currentQuestion.question;

    if (questionNr <= 12 ) {

    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        label.style.display = "block";
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answerOption";
        radio.value = answer.option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + answer.option));
        answers.appendChild(label);
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
        answers.appendChild(label);
    });
    }
}

nextBtn.addEventListener("click", handleNextQuestion);

function resetState(){
    while (answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}

function handleNextQuestion() {
    let selectedAnswers = [];
    document.querySelectorAll("[name=answerOption]:checked").forEach(checkbox => {
        selectedAnswers.push(checkbox.value);
    });
    let correctAnswersObjects = [];
        correctAnswersObjects = questions[currentQuestionIndex].answers.filter(item => {
        return item.correct===true

    });
    let correctAnswers = [];
    correctAnswersObjects.forEach(item => {
        correctAnswers.push(item.option);
    });
    function compare(selectedAnswers, correctAnswers) {
    if (selectedAnswers.length === correctAnswers.length)
        return selectedAnswers.every((element, index) => element === correctAnswers[index]);
    }
    nextBtn.disabled = true;
    if (compare(selectedAnswers, correctAnswers)) {
            score++;
            questionElement.innerHTML = "Du valde: " + correctAnswersObjects.map(item => item.option).join(", ") + ". Rätt svar!";
            pointsCounter.innerHTML="Antal rätt: " + score;
            }else { 
            questionElement.innerHTML = "Du valde fel, rätt svar är " + correctAnswersObjects.map(item => item.option).join(", ");
            pointsCounter.innerHTML="Antal rätt: " + score;
            };
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
    
        setTimeout(() => {
        //nextBtn aktiveras efter 2 sekunder och showQuestion också efter 2 sekunder.
        nextBtn.disabled = false;
        showQuestion()
        }, 2000);
}
resetState();


if (currentQuestionIndex === questions.length){
    showFinalResults();

}
    
function showFinalResults(){
    nextBtn.remove();
    const h3 = document.getElementById("quizQuestion");
    h3.innerHTML = "Rätt svar är Emerald City, Shiz University och Munchkinland.";
        if (score < (currentQuestionIndex * 0.5)){
            const h3 = document.getElementById("quizQuestion");
            h4.innerHTML = "Ditt slutliga resultat är här! Du fick underkänt, " + score + " rätt av " + questions.length + ".";
            h4.style.backgroundColor = "red";
            h4.style.color ="white";
        }else if (score >= currentQuestionIndex * 0.5 && score <= currentQuestionIndex * 0.75) {
            h4.innerHTML = "Ditt resultat är här! Du fick godkänt, " + score + " rätt av " + questions.length + ".";
            h4.style.backgroundColor = "Yellow";
            h4.style.color ="Black";
        } else {
            h4.innerHTML = "Ditt resultat är här! Du fick godkänt, " + score + " rätt av " + questions.length + ".";
            h4.style.backgroundColor = "green";
            h4.style.color ="White";
        }
}
}
startQuiz();