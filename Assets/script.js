const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++; // increment
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
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
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
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
        question: 'Question',
        answer: [
            { text: '4', correct: true },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'placeholder2',
        answer: [
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
        ]
    },
    {
        question: 'placeholder3',
        answer: [
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
        ]
    },

    {
        question: 'placeholder3',
        answer: [
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
        ]
    },

    {
        question: 'placeholder4',
        answer: [
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
            { text: '1', correct: true },
        ]
    },
]


const startingMinutes = 3;
let time = startingMinutes * 60;

const countDownEL = document.getElementById('countDown');
var timeInterval = setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let secounds = time % 60;

    countDownEL.innerText = `${minutes}: ${secounds}`;
    time--;

    if (time === 0) {
        time--; clearInterval(timeInterval);

    }
}




