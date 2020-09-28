
function start() {
    document.getElementById('startquiz').style.visibility = "hidden";
    document.getElementById('disclaimer').style.visibility = "hidden";
    document.getElementById('testquestions').style.visibility = "visible";
    questionone()
}

function questionone(){
    var q1 = document.querySelector("#question")
    var a1 = document.querySelector("#answer1")
    var a2 = document.querySelector("#answer2")
    var a3 = document.querySelector("#answer3")
    var a4 = document.querySelector("#answer4")

    q1.textContent = question1.question
    a1.textContent = question1.answer1
    a2.textContent = question1.answer2
    a3.textContent = question1.answer3
    a4.textContent = question1.answer4

    if (a3.addEventListener('click', questiontwo)) {

    }
}

function questiontwo() {
    var q1 = document.querySelector("#question")
    var a1 = document.querySelector("#answer1")
    var a2 = document.querySelector("#answer2")
    var a3 = document.querySelector("#answer3")
    var a4 = document.querySelector("#answer4")

    q1.textContent = question2.question
    a1.textContent = question2.answer1
    a2.textContent = question2.answer2
    a3.textContent = question2.answer3
    a4.textContent = question2.answer4

    if (a3.addEventListener('click', questionthree)) {

    }
    
}

function questionthree() {
    var q1 = document.querySelector("#question")
    var a1 = document.querySelector("#answer1")
    var a2 = document.querySelector("#answer2")
    var a3 = document.querySelector("#answer3")
    var a4 = document.querySelector("#answer4")

    q1.textContent = question3.question
    a1.textContent = question3.answer1
    a2.textContent = question3.answer2
    a3.textContent = question3.answer3
    a4.textContent = question3.answer4

    if (a4.addEventListener('click', questionfour)) {

    }
}

function questionfour() {
    var q1 = document.querySelector("#question")
    var a1 = document.querySelector("#answer1")
    var a2 = document.querySelector("#answer2")
    var a3 = document.querySelector("#answer3")
    var a4 = document.querySelector("#answer4")

    q1.textContent = question4.question
    a1.textContent = question4.answer1
    a2.textContent = question4.answer2
    a3.textContent = question4.answer3
    a4.textContent = question4.answer4

    if (a3.addEventListener('click', questionfive)) {

    }

}

function questionfive() {
    var q1 = document.querySelector("#question")
    var a1 = document.querySelector("#answer1")
    var a2 = document.querySelector("#answer2")
    var a3 = document.querySelector("#answer3")
    var a4 = document.querySelector("#answer4")

    q1.textContent = question5.question
    a1.textContent = question5.answer1
    a2.textContent = question5.answer2
    a3.textContent = question5.answer3
    a4.textContent = question5.answer4

    if (a4.addEventListener('click', complete)) {

    }

}

function complete() {
    var q1 = document.querySelector("#question")
    q1.textContent = "YOU DID IT BITCHHH"
    document.getElementById('answer1').style.visibility = "hidden";
    document.getElementById('answer2').style.visibility = "hidden";
    document.getElementById('answer3').style.visibility = "hidden";
    document.getElementById('answer4').style.visibility = "hidden";
}
var startquiz = document.querySelector("#startquiz")

startquiz.addEventListener('click', start);

console.log(startquiz)

var question1 = {
    question: "Commonly used data types DO NOT include…",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers"
};

var question2 = {
    question: "The condition in an if / else statement is enclosed within ___",
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parenthesis",
    answer4: "square brackets"
};

var question3 = {
    question: "Arrays in Javascript can be used to store ____",
    answer1: "Numbers and strings",
    answer2: "Other arrays",
    answer3: "Booleans",
    answer4: "All of the above"
};

var question4 = {
    question: "String values must be enclosed within ___ when being assigned to variables",
    answer1: "Commas",
    answer2: "Curly brackets",
    answer3: "Quotes",
    answer4: "Parenthesis"
};

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is____",
    answer1: "Javascript",
    answer2: "Terminal/bash",
    answer3: "For loops",
    answer4: "console.log"
}

question1.answer1 = true

console.log(question1.answer1)