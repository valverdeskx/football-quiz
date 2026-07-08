const quizData = {
    easy: [
        { question: "Кто выиграл ЧМ-2022?", answers: [{text: "Аргентина", correct: true}, {text: "Франция", correct: false}, {text: "Бразилия", correct: false}, {text: "Англия", correct: false}] },
        { question: "Сколько игроков в составе команды на поле?", answers: [{text: "9", correct: false}, {text: "10", correct: false}, {text: "11", correct: true}, {text: "12", correct: false}] },
        { question: "Как называют футболиста, который защищает ворота?", answers: [{text: "Нападающий", correct: false}, {text: "Защитник", correct: false}, {text: "Вратарь", correct: true}, {text: "Судья", correct: false}] },
        { question: "Сколько таймов в обычном футбольном матче?", answers: [{text: "1", correct: false}, {text: "2", correct: true}, {text: "3", correct: false}, {text: "4", correct: false}] },
        { question: "Какой предмет нужно забить в ворота?", answers: [{text: "Мяч", correct: true}, {text: "Шайбу", correct: false}, {text: "Волан", correct: false}, {text: "Обруч", correct: false}] },
        { question: "Как называется футбольный турнир лучших сборных мира?", answers: [{text: "Лига Чемпионов", correct: false}, {text: "Чемпионат Мира", correct: true}, {text: "Олимпиада", correct: false}, {text: "Кубок УЕФА", correct: false}] },
        { question: "Кто вводит мяч в игру из аута?", answers: [{text: "Вратарь", correct: false}, {text: "Игрок рукой", correct: true}, {text: "Тренер", correct: false}, {text: "Судья", correct: false}] },
        { question: "Какого цвета карточка означает удаление?", answers: [{text: "Желтая", correct: false}, {text: "Красная", correct: true}, {text: "Зеленая", correct: false}, {text: "Синяя", correct: false}] },
        { question: "Где проводится футбольный матч?", answers: [{text: "На корте", correct: false}, {text: "На ринге", correct: false}, {text: "На поле", correct: true}, {text: "На льду", correct: false}] },
        { question: "Что означает 'гол'?", answers: [{text: "Мяч в воротах", correct: true}, {text: "Пас", correct: false}, {text: "Фол", correct: false}, {text: "Угловой", correct: false}] }
    ],
    medium: [
        { question: "Какой клуб называют 'Сливочными'?", answers: [{text: "Барселона", correct: false}, {text: "Реал Мадрид", correct: true}, {text: "Ювентус", correct: false}, {text: "Милан", correct: false}] },
        { question: "Кто больше всех выигрывал Золотой мяч?", answers: [{text: "Криштиану Роналду", correct: false}, {text: "Лионель Месси", correct: true}, {text: "Пеле", correct: false}, {text: "Марадона", correct: false}] },
        { question: "В какой стране базируется клуб 'Бавария'?", answers: [{text: "Испания", correct: false}, {text: "Англия", correct: false}, {text: "Германия", correct: true}, {text: "Италия", correct: false}] },
        { question: "Кто является лучшим бомбардиром в истории сборной Португалии?", answers: [{text: "Фигу", correct: false}, {text: "Эйсебио", correct: false}, {text: "Роналду", correct: true}, {text: "Деку", correct: false}] },
        { question: "За какой клуб выступал Диего Марадона в Европе?", answers: [{text: "Наполи", correct: true}, {text: "Интер", correct: false}, {text: "Челси", correct: false}, {text: "Ливерпуль", correct: false}] },
        { question: "Сколько минут длится основной матч?", answers: [{text: "80", correct: false}, {text: "90", correct: true}, {text: "100", correct: false}, {text: "45", correct: false}] },
        { question: "Как называют штрафной удар с 11 метров?", answers: [{text: "Пенальти", correct: true}, {text: "Угловой", correct: false}, {text: "Фри-кик", correct: false}, {text: "Аут", correct: false}] },
        { question: "Кто выиграл Лигу Чемпионов 2024?", answers: [{text: "Манчестер Сити", correct: false}, {text: "Реал Мадрид", correct: true}, {text: "ПСЖ", correct: false}, {text: "Бавария", correct: false}] },
        { question: "Как зовут легендарного тренера 'Манчестер Юнайтед'?", answers: [{text: "Клопп", correct: false}, {text: "Фергюсон", correct: true}, {text: "Гвардиола", correct: false}, {text: "Моуринью", correct: false}] },
        { question: "Какая команда прозвища 'Красные дьяволы'?", answers: [{text: "Ливерпуль", correct: false}, {text: "Манчестер Юнайтед", correct: true}, {text: "Арсенал", correct: false}, {text: "Челси", correct: false}] }
    ],
    hard: [
        { question: "Кто выиграл первый Кубок европейских чемпионов?", answers: [{text: "Реал Мадрид", correct: true}, {text: "Милан", correct: false}, {text: "Бенфика", correct: false}, {text: "Бавария", correct: false}] },
        { question: "Самый быстрый гол на ЧМ?", answers: [{text: "Хакан Шюкюр", correct: true}, {text: "Пеле", correct: false}, {text: "Роналдо", correct: false}, {text: "Мюллер", correct: false}] },
        { question: "В каком году прошел первый ЧМ?", answers: [{text: "1930", correct: true}, {text: "1950", correct: false}, {text: "1924", correct: false}, {text: "1942", correct: false}] },
        { question: "Кто забил 'Рукой Бога'?", answers: [{text: "Пеле", correct: false}, {text: "Марадона", correct: true}, {text: "Месси", correct: false}, {text: "Роналдиньо", correct: false}] },
        { question: "Какая страна выиграла Евро-2004?", answers: [{text: "Португалия", correct: false}, {text: "Греция", correct: true}, {text: "Франция", correct: false}, {text: "Испания", correct: false}] },
        { question: "Кто провел больше всех матчей за Реал?", answers: [{text: "Рауль", correct: true}, {text: "Касильяс", correct: false}, {text: "Бензема", correct: false}, {text: "Рамос", correct: false}] },
        { question: "Какая команда не проиграла сезон в АПЛ?", answers: [{text: "Челси", correct: false}, {text: "Арсенал", correct: true}, {text: "МЮ", correct: false}, {text: "Ливерпуль", correct: false}] },
        { question: "Кто забил 91 гол за календарный год?", answers: [{text: "Пеле", correct: false}, {text: "Герд Мюллер", correct: false}, {text: "Месси", correct: true}, {text: "Роналду", correct: false}] },
        { question: "Какой игрок забил в 3 финалах ЛЧ?", answers: [{text: "Роналду", correct: true}, {text: "Месси", correct: false}, {text: "Бэйл", correct: false}, {text: "Салах", correct: false}] },
        { question: "Клуб, выигравший 7 ЛЧ подряд?", answers: [{text: "Реал", correct: false}, {text: "Милан", correct: false}, {text: "Аякс", correct: false}, {text: "Никто", correct: true}] }
    ]
};

// Остальной код (startQuiz, loadQuestion, checkAnswer) оставляй как был, он теперь будет брать из этих массивов ровно по 10 вопросов.
