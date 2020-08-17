var questionIndex = 0
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    }
    ];

    function displayQuestions (index) {
        document.querySelector("#questionsAsked p").textContent=questions[index].title
        var choices = document.querySelector("#answerChoices")
        choices.innerHTML = ""
        for (i=0; i<questions[index].choices.length; i++){
            var listItem = document.createElement("li")
            listItem.addEventListener ("click", function() {
                displayQuestions(questionIndex)
            })
            listItem.textContent=questions[index].choices[i]
            choices.appendChild(listItem)
        }
        questionIndex++
    }

    displayQuestions(questionIndex);