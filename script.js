const quizData = [
    {
        question: "What is the difference between HTML and XHTML?",
        a: "HTML is stricter than XHTML.",
        b: "XHTML is an extension of HTML.",
        c: "HTML does not require closing tags, but XHTML does.",
        d: "There is no difference.",
        correct: "c",
    },
    {
        question: "What is the box model in CSS?",
        a: "A model that defines how elements are displayed.",
        b: "A structure for organizing JavaScript objects.",
        c: "A way to create responsive designs.",
        d: "A method for debugging CSS.",
        correct: "a",
    },
    {
        question: "What is REST?",
        a: "A data format.",
        b: "A type of database.",
        c: "An architectural style for APIs.",
        d: "A programming language.",
        correct: "c",
    },
    {
        question: "What are closures in JavaScript?",
        a: "Functions that are always invoked.",
        b: "Functions that retain access to their lexical scope.",
        c: "Functions that cannot access outer variables.",
        d: "Global functions.",
        correct: "b",
    },
    {
        question: "What is version control?",
        a: "A method for managing file changes.",
        b: "A software for tracking bugs.",
        c: "A programming language.",
        d: "A web development framework.",
        correct: "a",
    },
    {
        question: "What does SQL stand for?",
        a: "Structured Query Language.",
        b: "Simple Query Language.",
        c: "Standard Query Language.",
        d: "Secure Query Language.",
        correct: "a",
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        a: "To refer to the global object.",
        b: "To refer to the function itself.",
        c: "To refer to the object from which it was called.",
        d: "To create new objects.",
        correct: "c",
    },
    {
        question: "What is a promise in JavaScript?",
        a: "A way to handle asynchronous operations.",
        b: "A method for debugging.",
        c: "A type of variable.",
        d: "A function that always returns a value.",
        correct: "a",
    },
    {
        question: "What is a NoSQL database?",
        a: "A database that uses SQL.",
        b: "A type of relational database.",
        c: "A database that is non-relational.",
        d: "A database that is always open-source.",
        correct: "c",
    },
    {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        a: "There is no difference.",
        b: "'let' is block-scoped, while 'var' is function-scoped.",
        c: "'var' is block-scoped, while 'let' is function-scoped.",
        d: "'let' cannot be reassigned, while 'var' can.",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuestion.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuestion.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuestion.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuestion.d}
        </label><br>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            resultsContainer.innerHTML = `
                <h2>You scored ${score} out of ${quizData.length}</h2>
            `;
            quiz.innerHTML = '';
            submitButton.style.display = 'none'; // Hide submit button
        }
    } else {
        alert("Please select an answer!");
    }
});

// Load the first question
loadQuiz();
