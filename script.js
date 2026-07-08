// База данных вопросов по уровням сложности
const quizData = {
    easy: [
        { question: "Кто выиграл наибольшее количество «Золотых мячей»?", answers: [{ text: "Криштиану Роналду", correct: false }, { text: "Лионель Месси", correct: true }, { text: "Пеле", correct: false }, { text: "Марадона", correct: false }] },
        { question: "Какой клуб выиграл Лигу Чемпионов наибольшее количество раз?", answers: [{ text: "Барселона", correct: false }, { text: "Бавария", correct: false }, { text: "Реал Мадрид", correct: true }, { text: "Милан", correct: false }] },
        { question: "В какой стране прошёл Чемпионат мира 2022 года?", answers: [{ text: "Бразилия", correct: false }, { text: "Катар", correct: true }, { text: "Россия", correct: false }, { text: "Франция", correct: false }] },
        { question: "За какой клуб большую часть карьеры играл Лионель Месси?", answers: [{ text: "ПСЖ", correct: false }, { text: "Реал Мадрид", correct: false }, { text: "Барселона", correct: true }, { text: "Манчестер Юнайтед", correct: false }] },
        { question: "Как называется домашний стадион ФК «Барселона»?", answers: [{ text: "Сантьяго Бернабеу", correct: false }, { text: "Камп Ноу", correct: true }, { text: "Олд Траффорд", correct: false }, { text: "Энфилд", correct: false }] },
        { question: "Какая сборная выиграла Чемпионат мира в 2018 году в России?", answers: [{ text: "Хорватия", correct: false }, { text: "Франция", correct: true }, { text: "Бразилия", correct: false }, { text: "Германия", correct: false }] },
        { question: "Какое прозвище носит туринский «Ювентус»?", answers: [{ text: "Старая синьора", correct: true }, { text: "Сливочные", correct: false }, { text: "Красные дьяволы", correct: false }, { text: "Аристократы", correct: false }] },
        { question: "В какой лиге выступают клубы «Манчестер Сити» и «Ливерпуль»?", answers: [{ text: "Ла Лига", correct: false }, { text: "Серия А", correct: false }, { text: "Английская Премьер-лига", correct: true }, { text: "Бундеслига", correct: false }] },
        { question: "Какого цвета карточку показывает судья при удалении игрока с поля?", answers: [{ text: "Желтую", correct: false }, { text: "Зеленую", correct: false }, { text: "Красную", correct: true }, { text: "Синюю", correct: false }] },
        { question: "Сколько игроков одной команды находится на поле в начале матча?", answers: [{ text: "10", correct: false }, { text: "11", correct: true }, { text: "12", correct: false }, { text: "9", correct: false }] }
    ],
    medium: [
        { question: "В каком году прошёл легендарный финал ЛЧ в Стамбуле (Милан — Ливерпуль 3:3)?", answers: [{ text: "2003", correct: false }, { text: "2005", correct: true }, { text: "2006", correct: false }, { text: "2008", correct: false }] },
        { question: "Кто из этих футболистов НЕ выигрывал Золотой Мяч?", answers: [{ text: "Карим Бензема", correct: false }, { text: "Неймар", correct: true }, { text: "Лука Модрич", correct: false }, { text: "Кака", correct: false }] },
        { question: "Какой клуб стал победителем Лиги чемпионов в сезоне 2019/2020 (в ковидный год)?", answers: [{ text: "ПСЖ", correct: false }, { text: "Бавария", correct: true }, { text: "Реал Мадрид", correct: false }, { text: "Ливерпуль", correct: false }] },
        { question: "Кто является лучшим бомбардиром в истории Лиги Чемпионов?", answers: [{ text: "Лионель Месси", correct: false }, { text: "Криштиану Роналду", correct: true }, { text: "Роберт Левандовски", correct: false }, { text: "Рауль", correct: false }] },
        { question: "Игрок какой сборной забил знаменитый гол «Рука Бога»?", answers: [{ text: "Бразилия", correct: false }, { text: "Аргентина", correct: true }, { text: "Италия", correct: false }, { text: "Англия", correct: false }] },
        { question: "Какой английский клуб совершил легендарный требл в 1999 году?", answers: [{ text: "Манчестер Юнайтед", correct: true }, { text: "Арсенал", correct: false }, { text: "Челси", correct: false }, { text: "Манчестер Сити", correct: false }] },
        { question: "За какой итальянский клуб, помимо «Милана», играл Златан Ибрагимович?", answers: [{ text: "Интер", correct: true }, { text: "Рома", correct: false }, { text: "Наполи", correct: false }, { text: "Лацио", correct: false }] },
        { question: "Кто был главным тренером сборной Испании, когда они выиграли ЧМ-2010?", answers: [{ text: "Луис Арагонес", correct: false }, { text: "Висенте дель Боске", correct: true }, { text: "Пеп Гвардиола", correct: false }, { text: "Жозе Моуринью", correct: false }] },
        { question: "Какой номер взял себе Криштиану Роналду, когда впервые перешел в «Реал Мадрид»?", answers: [{ text: "7", correct: false }, { text: "9", correct: true }, { text: "10", correct: false }, { text: "11", correct: false }] },
        { question: "Какая сборная выиграла Чемпионат Европы (Евро) в 2021 году (Евро-2020)?", answers: [{ text: "Англия", correct: false }, { text: "Италия", correct: true }, { text: "Франция", correct: false }, { text: "Испания", correct: false }] }
    ],
    hard: [
        { question: "Какой клуб выиграл первый в истории розыгрыш Кубка европейских чемпионов (1956)?", answers: [{ text: "Реймс", correct: false }, { text: "Реал Мадрид", correct: true }, { text: "Милан", correct: false }, { text: "Бенфика", correct: false }] },
        { question: "Кто из этих игроков забил самый быстрый гол в истории Чемпионатов мира?", answers: [{ text: "Хакан Шюкюр", correct: true }, { text: "Роналдо", correct: false }, { text: "Клинт Демпси", correct: false }, { text: "Пеле", correct: false }] },
        { question: "В каком немецком клубе начинал свою взрослую карьеру Роберт Левандовски до «Боруссии»?", answers: [{ text: "Лех Познань", correct: true }, { text: "Легия", correct: false }, { text: "Ягеллония", correct: false }, { text: "Пяст", correct: false }] },
        { question: "Какая африканская сборная ПЕРВОЙ в истории дошла до полуфинала Чемпионата мира?", answers: [{ text: "Гана", correct: false }, { text: "Сенегал", correct: false }, { text: "Камерун", correct: false }, { text: "Марокко", correct: true }] },
        { question: "Кто стал лучшим бомбардиром ЧМ-2014 в Бразилии?", answers: [{ text: "Томас Мюллер", correct: false }, { text: "Хамес Родригес", correct: true }, { text: "Лионель Месси", correct: false }, { text: "Неймар", correct: false }] },
        { question: "Какой французский клуб, кроме «Марселя», доходил до финала ЛЧ в XXI веке?", answers: [{ text: "ПСЖ", correct: false }, { text: "Монако", correct: true }, { text: "Лион", correct: false }, { text: "Лилль", correct: false }] },
        { question: "Кто из тренеров выиграл Лигу Чемпионов с двумя разными португальскими клубами?", answers: [{ text: "Жозе Моуринью", correct: false }, { text: "Никто", correct: true }, { text: "Жорже Жезуш", correct: false }, { text: "Фернанду Сантуш", correct: false }] }, // Примечание: Моуринью выиграл только с Порту (и Интером)
        { question: "Какому клубу принадлежит рекорд по количеству матчей без поражений подряд в АПЛ (49 матчей)?", answers: [{ text: "Манчестер Юнайтед", correct: false }, { text: "Челси", correct: false }, { text: "Арсенал", correct: true }, { text: "Манчестер Сити", correct: false }] },
        { question: "В каком клубе завершил игровую карьеру легендарный Зинедин Зидан?", answers: [{ text: "Ювентус", correct: false }, { text: "Реал Мадрид", correct: true }, { text: "Бордо", correct: false }, { text: "Канн", correct: false }] },
        { question: "Кто взял «Золотой мяч» в 1994 году после триумфа на Чемпионате мира?", answers: [{ text: "Ромарио", correct: false }, { text: "Христо Стоичков", correct: true }, { text: "Роберто Баджо", correct: false }, { text: "Паоло Мальдини", correct: false }] }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(difficulty) {
    currentQuestions = quizData[difficulty]; // Загружаем вопросы выбранной сложности
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    document.getElementById("question-title").innerHTML = `Вопрос №${questionNo} из 10`;
    document.getElementById("question-text").innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        document.getElementById("answer-buttons").appendChild(button);
    });
}

window.resetState = function() {
    const answerButtons = document.getElementById("answer-buttons");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

window.selectAnswer = function(answer) {
    if (answer.correct) {
        score++;
        alert("Правильно! 👍");
    } else {
        alert("Неправильно! ❌");
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    document.getElementById("question-title").innerHTML = "Уровень пройден! 🏆";
    document.getElementById("question-text").innerHTML = `Ваш результат: ${score} из 10 правильных ответов!`;
    
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "В главное меню 🔄";
    restartButton.classList.add("btn");
    restartButton.onclick = () => location.reload(); // Перезагружает страницу для возврата к выбору сложности
    document.getElementById("answer-buttons").appendChild(restartButton);
}

window.startQuiz = startQuiz;
