const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreSpan = document.querySelector('.score')

let shuffledQuestions, currentQuestionIndex
let score = 0;
let countDown;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    countDown = setInterval(() => {
        timeSec--;
        displayTime(timeSec)
        if (timeSec <= 0 || timeSec < 1) {
            endtime();
            clearInterval(countDown);
        }
    }, 1000)
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    document.querySelector('.scoreContainer').classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    score = 0;
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (!correct) {
        // timeSec = timeSec - 5;
        // decrease timeSec by 5 seconds
        timeSec -= 5;
        displayTime(timeSec);
    } else {
        //increase score by one 
        score += 1;
        // score = score + 1;
        // score++
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        clearInterval(countDown);
        displayscore()
    }

}

function displayscore() {

    scoreSpan.innerText = score + '/' + shuffledQuestions.length
    document.querySelector('.scoreContainer').classList.toggle("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'what is html?',
        answers: [
            { text: 'Hypertext Markup Language,', correct: true },
            { text: 'a app', correct: false }
        ]
    },
    {
        question: 'what is css ',
        answers: [
            { text: 'language for describing the presentation of Web pages,', correct: true },
            { text: 'a part of flex box ', correct: false },
            { text: 'a html file ', correct: false },
            { text: 'a for loop ', correct: false }
        ]
    },
    {
        question: 'what is javascript',
        answers: [
            { text: 'a part of flex', correct: false },
            { text: 'a dynamic programming language', correct: true },
            { text: 'a container', correct: false },
            { text: 'idk', correct: false }
        ]
    },
    {
        question: 'where does flex- box go ',
        answers: [
            { text: 'java script', correct: false },
            { text: 'css', correct: true }
        ]
    }
]

const timer = document.getElementById('timer');
let timeSec = 45;

//timer.innerHTML = `00:${timeSec}`;

displayTime(timeSec)

/*const countDown = setInterval(() => {
    timeSec--;
    displayTime(timeSec)
    if (timeSec <= 0 || timeSec < 1) {
        endtime();
        clearInterval(countDown);
    }
}, 1000)*/

function displayTime(seconds) {
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}

function endtime() {

}