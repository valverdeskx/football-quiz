// Список вопросов викторины
const questions = [
    {
        question: "Кто выиграл наибольшее количество «Золотых мячей» в истории футбола?",
        answers: [
            { text: "Криштиану Роналду", correct: false },
            { text: "Лионель Месси", correct: true },
            { text: "Пеле", correct: false },
            { text: "Диего Марадона", correct: false }
        ]
    },
    {
        question: "Какой клуб выиграл Лигу Чемпионов наибольшее количество раз?",
        answers: [
            { text: "Барселона", correct: false },
            { text: "Бавария", correct: false },
            { text: "Реал Мадрид", correct: true },
            { text: "Милан", correct: false }
        ]
    },
    {
        question: "В каком году прошёл легендарный финал Лиги Чемпионов в Стамбуле (Милан — Ливерпуль 3:3)?",
        answers: [
            { text: "2003", correct: false },
            { text: "2005", correct: true },
            { text: "2006", correct: false },
            { text: "2008", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Функция запуска игры
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Функция отображения вопроса
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    const questionTextElement = document.getElementById("question-text");
    const questionTitleElement = document.getElementById("question-title");
    
    questionTitleElement.innerHTML = `Вопрос №${questionNo}`;
    questionTextElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        document.getElementById("answer-buttons").appendChild(button);
    });
}

// Очистка старых кнопок
window.resetState = function() {
    const answerButtons = document.getElementById("answer-buttons");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Обработка выбора ответа
window.selectAnswer = function(answer) {
    if (answer.correct) {
        score++;
        alert("Правильно! Ты хорош! ⚽");
    } else {
        alert("Не угадал, думай дальше! ❌");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Показ финального результата
function showScore() {
    resetState();
    const questionTitleElement = document.getElementById("question-title");
    const questionTextElement = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    
    questionTitleElement.innerHTML = "Игра окончена! 🏆";
    questionTextElement.innerHTML = `Твой результат: ${score} из ${questions.length} правильных ответов!`;
    
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "Сыграть еще раз 🔄";
    restartButton.classList.add("btn");
    restartButton.onclick = startQuiz;
    answerButtons.appendChild(restartButton);
}

// Делаем функцию старта доступной глобально
window.startQuiz = startQuiz;
o
