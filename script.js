let score = 0;
let currentQuestionIndex = 0;

// Массив из 10 вопросов
const questions = [
    {
        question: "Кто выиграл Чемпионат мира по футболу 2022 года?",
        answers: [
            { text: "Франция", correct: false },
            { text: "Аргентина", correct: true },
            { text: "Хорватия", correct: false },
            { text: "Бразилия", correct: false }
        ]
    },
    // Добавь сюда остальные 9 объектов по аналогии
    {
        question: "Какой клуб называют 'Королевским клубом'?",
        answers: [
            { text: "Барселона", correct: false },
            { text: "Бавария", correct: false },
            { text: "Реал Мадрид", correct: true },
            { text: "Манчестер Юнайтед", correct: false }
        ]
    }
    // ... (продолжи список до 10 вопросов)
];

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    
    // Обновляем текст вопроса и прогресс
    document.getElementById('question').innerHTML = `
        <div style="font-size: 0.8em; color: #666; margin-bottom: 10px;">
            Вопрос ${currentQuestionIndex + 1} из ${questions.length}
        </div>
        ${q.question}
    `;
    
    const container = document.getElementById('answers');
    container.innerHTML = '';
    
    q.answers.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = a.text;
        btn.onclick = () => checkAnswer(a.correct, btn);
        container.appendChild(btn);
    });
}

function checkAnswer(isCorrect, btn) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        // Подсветим правильный ответ, если игрок ошибся
        buttons.forEach(b => {
            const index = Array.from(buttons).indexOf(b);
            if (questions[currentQuestionIndex].answers[index].correct) {
                b.classList.add('correct');
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showFinalResult();
        }
    }, 1200);
}

function showFinalResult() {
    const bestScore = localStorage.getItem('bestScore') || 0;
    if (score > bestScore) localStorage.setItem('bestScore', score);

    document.getElementById('quiz-container').innerHTML = `
        <h2>Игра окончена!</h2>
        <p style="font-size: 24px;">Твой результат: <strong>${score} из ${questions.length}</strong></p>
        <p>Личный рекорд: ${Math.max(score, bestScore)}</p>
        <button class="answer-btn" onclick="location.reload()">Играть снова</button>
    `;
}

loadQuestion();
