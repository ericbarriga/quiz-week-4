const startButton = document.getElementById('startBtn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')  
const answerButtonElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)








function startGame() {
    console.log('yes just like that daddy ')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
}



   function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
   }

   function showQuestion(question) {
    questionElement.innerText = question.question

   }

   