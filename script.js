let score = 0;
let currentQuestionIndex = 0;

// Твои вопросы (структура для примера)
const questions = [
    { question: "Кто выиграл ЧМ 2022?", answers: [{text: "Аргентина", correct: true}, {text: "Франция", correct: false}] },
    { question: "Сколько игроков в команде?", answers: [{text: "11", correct: true}, {text: "10", correct: false}] }
];

function checkAnswer(isCorrect, btn) {
    // 1. Блокируем все кнопки
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.disabled = true);

    // 2. Добавляем класс анимации
    btn.classList.add(isCorrect ? 'correct' : 'wrong');

    // 3. Считаем очки и ждем
    if (isCorrect) score++;
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            alert("Игра окончена! Твой счет: " + score);
            // Тут можно добавить логику с localStorage
        }
    }, 1000);
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question').textContent = q.question;
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

loadQuestion();
