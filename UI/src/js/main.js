var user = 'admin';

var articleService = (function () {
    var articles = [
        {
            id: '1',
            title: 'Традиционное унижение "Гамбурга"',
            summary: 'Хороший подарок подарили футболисты «Баварии» Карло Анчелотти на тысячный матч в тренерской ' +
            'карьере. Мюнхенцы у себя дома просто-напросто унизили «Гамбург», отгрузив в его ворота восемь безответных мя',
            createdAt: new Date('2017-02-27T23:12:00'),
            author: 'Иванов Иван',
            content: 'Хороший подарок подарили футболисты «Баварии» Карло Анчелотти на тысячный матч в тренерской ' +
            'карьере. Мюнхенцы у себя дома просто-напросто унизили «Гамбург», отгрузив в его ворота восемь безответных мя',
            imgUrl: 'img/bayern.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'germany'
                }
            ]
        },
        {
            id: '2',
            title: 'Дубль Обамеянга помог "Боруссии"',
            summary: 'Удивительно легко сложился для "Боруссии" гостевой поединок против "Фрайбурга". Команда Кристиана' +
            ' Штрайха обычно предстаёт в родных стенах весьма боевым коллективом, однако в матче с дортмундцами она ',
            createdAt: new Date('2017-02-26T21:05:00'),
            author: 'Иванов Иван',
            content: 'Удивительно легко сложился для "Боруссии" гостевой поединок против "Фрайбурга". Команда Кристиана' +
            ' Штрайха обычно предстаёт в родных стенах весьма боевым коллективом, однако в матче с дортмундцами она ',
            imgUrl: 'img/bd.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'germany'
                }
            ]
        },
        {
            id: '3',
            title: 'Туринская машина побеждает снова',
            summary: 'Чемпионский экспресс «Ювентуса» следует от станции к станции по расписанию,' +
            'без внеплановых остановок. Победа в домашнем матче над «Эмполи» стала для «Старой синьоры» уже седьмой ' +
            'подряд в чемпионате.',
            createdAt: new Date('2017-02-26T23:00:00'),
            author: 'Алексеев Алексей',
            content: 'Чемпионский экспресс «Ювентуса» следует от станции к станции по расписанию,' +
            'без внеплановых остановок. Победа в домашнем матче над «Эмполи» стала для «Старой синьоры» уже седьмой ' +
            'подряд в чемпионате.',
            imgUrl: 'img/juve.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'italy'
                }
            ]
        },
        {
            id: '4',
            title: '"Манчестер юнайтед" и "Сельта" сыграют в России',
            summary: 'Две российские команды сумели пробиться в 1/8 финала Лиги Европы. И вот в пятницу, 24 февраля,' +
            ' в швейцарском Ньоне состоялась жеребьёвка, которая определила соперников "Краснодара" и "Ростова". Команд',
            createdAt: new Date('2017-02-25T21:00:00'),
            author: 'Алексеев Алексей',
            content: 'Две российские команды сумели пробиться в 1/8 финала Лиги Европы. И вот в пятницу, 24 февраля,' +
            ' в швейцарском Ньоне состоялась жеребьёвка, которая определила соперников "Краснодара" и "Ростова". Команд',
            imgUrl: 'img/mu.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'europa league'
                }
            ]
        },
        {
            id: '5',
            title: 'Парад испанских голов в Лондоне',
            summary: 'Чемпионская гонка в Англии в этот уик-энд не обострится. Так постановил «Челси», который в ' +
            'довольно непростом домашнем матче одолел «Суонси» и набрал дежурные три очка. Забивали в этой игре исключител',
            createdAt: new Date('2017-02-24T21:00:00'),
            author: 'Иванов Иван',
            content: 'Чемпионская гонка в Англии в этот уик-энд не обострится. Так постановил «Челси», который в ' +
            'довольно непростом домашнем матче одолел «Суонси» и набрал дежурные три очка. Забивали в этой игре исключител',
            imgUrl: 'img/chelsea.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'england'
                }
            ]
        },
        {
            id: '6',
            title: '"Лейпциг" подавил гостей из Кельна',
            summary: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            createdAt: new Date('2017-02-23T21:00:00'),
            author: 'Иванов Иван',
            content: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            imgUrl: 'img/rb.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'germany'
                }
            ]
        },
        {
            id: '7',
            title: 'Караваев лишил "Ростов" победы',
            summary: 'Два разных тайма провели команды в ответном матче. Несмотря на то, что игра носила почти формальный'
            + ' характер – поверить в то, что «Спарта» отыграет четыре, было сложно – команды подошли к ней серьёзно',
            createdAt: new Date('2017-02-22T21:00:00'),
            author: 'Иванов Иван',
            content: 'Удивительно легко сложился для "Боруссии" гостевой поединок против "Фрайбурга". Команда Кристиана' +
            ' Штрайха обычно предстаёт в родных стенах весьма боевым коллективом, однако в матче с дортмундцами она ',
            imgUrl: 'img/rost.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'europa league'
                }
            ]
        },
        {
            id: '8',
            title: 'Почему «Лестер» должен вылететь из АПЛ. Навсегда',
            summary: 'Год назад я наизусть выучил имя Вишай Шривадданапрабха. Правда. Я и сейчас могу выговорить его без'
            + ' помощи «Гугла». Теперь жалею об этом. И постараюсь его забыть. В начале августа «Лестер» продлил конт',
            createdAt: new Date('2017-02-21T21:00:00'),
            author: 'Иванов Иван',
            content: 'Год назад я наизусть выучил имя Вишай Шривадданапрабха. Правда. Я и сейчас могу выговорить его без'
            + ' помощи «Гугла». Теперь жалею об этом. И постараюсь его забыть. В начале августа «Лестер» продлил конт',
            imgUrl: 'img/lester.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'england'
                }
            ]
        },
        {
            id: '9',
            title: 'Убийственная геометрия «Баварии». Вся тактика Лиги чемпионов',
            summary: 'План «Арсенала» на флангах обороны и ответ «Баварии». Мило писать такое после 1:5, но «Арсенал»'
            + ' тактически выдал сильный первый тайм, и катастрофа после перерыва вызвана не безграмотными схемами, а ме',
            createdAt: new Date('2017-02-20T21:00:00'),
            author: 'Иванов Иван',
            content: 'План «Арсенала» на флангах обороны и ответ «Баварии». Мило писать такое после 1:5, но «Арсенал»'
            + ' тактически выдал сильный первый тайм, и катастрофа после перерыва вызвана не безграмотными схемами, а ме',
            imgUrl: 'img/fcb.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'champions league'
                }
            ]
        },
        {
            id: '10',
            title: 'Даже не четвёртый. Почему Венгеру пора уйти из «Арсенала»',
            summary: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
            + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
            createdAt: new Date('2017-02-19T21:00:00'),
            author: 'Иванов Иван',
            content: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
            + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
            imgUrl: 'img/arsen.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'england'
                }
            ]
        },
        {
            id: '11',
            title: 'Традиционное унижение "Гамбурга"',
            summary: 'Хороший подарок подарили футболисты «Баварии» Карло Анчелотти на тысячный матч в тренерской ' +
            'карьере. Мюнхенцы у себя дома просто-напросто унизили «Гамбург», отгрузив в его ворота восемь безответных мя',
            createdAt: new Date('2017-02-21T23:00:00'),
            author: 'Иванов Иван',
            content: 'Хороший подарок подарили футболисты «Баварии» Карло Анчелотти на тысячный матч в тренерской ' +
            'карьере. Мюнхенцы у себя дома просто-напросто унизили «Гамбург», отгрузив в его ворота восемь безответных мя',
            imgUrl: 'img/bayern.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                },
                {
                    name: 'germany'
                }
            ]
        },
        {
            id: '12',
            title: 'Дубль Обамеянга помог "Боруссии"',
            summary: 'Удивительно легко сложился для "Боруссии" гостевой поединок против "Фрайбурга". Команда Кристиана' +
            ' Штрайха обычно предстаёт в родных стенах весьма боевым коллективом, однако в матче с дортмундцами она ',
            createdAt: new Date('2017-02-26T21:00:00'),
            author: 'Иванов Иван',
            content: 'Удивительно легко сложился для "Боруссии" гостевой поединок против "Фрайбурга". Команда Кристиана' +
            ' Штрайха обычно предстаёт в родных стенах весьма боевым коллективом, однако в матче с дортмундцами она ',
            imgUrl: 'img/bd.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '13',
            title: 'Туринская машина побеждает снова',
            summary: 'Чемпионский экспресс «Ювентуса» следует от станции к станции по расписанию,' +
            'без внеплановых остановок. Победа в домашнем матче над «Эмполи» стала для «Старой синьоры» уже седьмой ' +
            'подряд в чемпионате.',
            createdAt: new Date('2017-02-26T23:00:00'),
            author: 'Алексеев Алексей',
            content: 'Чемпионский экспресс «Ювентуса» следует от станции к станции по расписанию,' +
            'без внеплановых остановок. Победа в домашнем матче над «Эмполи» стала для «Старой синьоры» уже седьмой ' +
            'подряд в чемпионате.',
            imgUrl: 'img/juve.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '14',
            title: '"Манчестер юнайтед" и "Сельта" сыграют в России',
            summary: 'Две российские команды сумели пробиться в 1/8 финала Лиги Европы. И вот в пятницу, 24 февраля,' +
            ' в швейцарском Ньоне состоялась жеребьёвка, которая определила соперников "Краснодара" и "Ростова". Команд',
            createdAt: new Date('2017-03-09T12:02:00'),
            author: 'Алексеев Алексей',
            content: 'Две российские команды сумели пробиться в 1/8 финала Лиги Европы. И вот в пятницу, 24 февраля,' +
            ' в швейцарском Ньоне состоялась жеребьёвка, которая определила соперников "Краснодара" и "Ростова". Команд',
            imgUrl: 'img/mu.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '15',
            title: 'Парад испанских голов в Лондоне',
            summary: 'Чемпионская гонка в Англии в этот уик-энд не обострится. Так постановил «Челси», который в ' +
            'довольно непростом домашнем матче одолел «Суонси» и набрал дежурные три очка. Забивали в этой игре исключител',
            createdAt: new Date('2017-02-24T21:00:00'),
            author: 'Иванов Иван',
            content: 'Чемпионская гонка в Англии в этот уик-энд не обострится. Так постановил «Челси», который в ' +
            'довольно непростом домашнем матче одолел «Суонси» и набрал дежурные три очка. Забивали в этой игре исключител',
            imgUrl: 'img/chelsea.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '16',
            title: '"Лейпциг" подавил гостей из Кельна',
            summary: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            createdAt: new Date('2017-02-23T21:00:00'),
            author: 'Иванов Иван',
            content: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            imgUrl: 'img/rb.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '17',
            title: 'Караваев лишил "Ростов" победы',
            summary: 'Два разных тайма провели команды в ответном матче. Несмотря на то, что игра носила почти формальный'
            + ' характер – поверить в то, что «Спарта» отыграет четыре, было сложно – команды подошли к ней серьёзно',
            createdAt: new Date('2017-02-22T21:00:00'),
            author: 'Иванов Иван',
            content: 'Удивительно легко сложился для "Боруссии" гостевой поединок против "Фрайбурга". Команда Кристиана' +
            ' Штрайха обычно предстаёт в родных стенах весьма боевым коллективом, однако в матче с дортмундцами она ',
            imgUrl: 'img/rost.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '18',
            title: 'Почему «Лестер» должен вылететь из АПЛ. Навсегда',
            summary: 'Год назад я наизусть выучил имя Вишай Шривадданапрабха. Правда. Я и сейчас могу выговорить его без'
            + ' помощи «Гугла». Теперь жалею об этом. И постараюсь его забыть. В начале августа «Лестер» продлил конт',
            createdAt: new Date('2017-02-21T21:00:00'),
            author: 'Иванов Иван',
            content: 'Год назад я наизусть выучил имя Вишай Шривадданапрабха. Правда. Я и сейчас могу выговорить его без'
            + ' помощи «Гугла». Теперь жалею об этом. И постараюсь его забыть. В начале августа «Лестер» продлил конт',
            imgUrl: 'img/lester.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '19',
            title: 'Убийственная геометрия «Баварии». Вся тактика Лиги чемпионов',
            summary: 'План «Арсенала» на флангах обороны и ответ «Баварии». Мило писать такое после 1:5, но «Арсенал»'
            + ' тактически выдал сильный первый тайм, и катастрофа после перерыва вызвана не безграмотными схемами, а ме',
            createdAt: new Date('2017-02-20T21:00:00'),
            author: 'Иванов Иван',
            content: 'План «Арсенала» на флангах обороны и ответ «Баварии». Мило писать такое после 1:5, но «Арсенал»'
            + ' тактически выдал сильный первый тайм, и катастрофа после перерыва вызвана не безграмотными схемами, а ме',
            imgUrl: 'img/fcb.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '20',
            title: 'Даже не четвёртый. Почему Венгеру пора уйти из «Арсенала»',
            summary: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
            + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
            createdAt: new Date('2017-02-19T21:00:00'),
            author: 'Иванов Иван',
            content: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
            + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
            imgUrl: 'img/arsen.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '21',
            title: '"Лейпциг" подавил гостей из Кельна',
            summary: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            createdAt: new Date('2017-02-23T21:00:00'),
            author: 'Иванов Иван',
            content: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            imgUrl: 'img/rb.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        },
        {
            id: '22',
            title: '"Лейпциг" подавил гостей из Кельна',
            summary: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            createdAt: new Date('2017-02-23T21:00:00'),
            author: 'Иванов Иван',
            content: 'Кажется, «Лейпциг» уже начинает обретать определенный класс – признак большой опытной команды,'
            + ' чего не скажешь о «быках», глядя на их историю и состав. Но вот такое нынче немецкое чудо в Бундеслиге вы',
            imgUrl: 'img/rb.png',
            tag: [
                {
                    name: 'sport'
                },
                {
                    name: 'football'
                }
            ]
        }
    ];

    var tags = [
        {
            id: 1,
            name: 'sport'
        },
        {
            id: 2,
            name: 'football'
        },
        {
            id: 3,
            name: 'germany'
        },
        {
            id: 4,
            name: 'germany'
        },
        {
            id: 5,
            name: 'england'
        },
        {
            id: 6,
            name: 'champions league'
        },
        {
            id: 7,
            name: 'europa league'
        }
    ];

    var addTag = function (name) {
        if (findIndexByProperty(tags, 'name', name) === -1) {
            var maxId = tags[tags.length - 1].id;

            tags.push({
                id: maxId + 1,
                name: name
            });

            return true;
        }

        return false;
    };

    var getArticles = function (skip, top, filterConfig) {
        var tempArray,
            authorName = filterConfig.authorName,
            tags = filterConfig.tags;

        skip = skip || 0;
        top = top || 0;

        if (authorName) {
            tempArray = [];
            articles.forEach(function (article) {
                var containsAuthor = article.author.indexOf(authorName) >= 0;
                var containsTags = !tags || tags.length === 0;

                containsTags = containsTags || tags.every(function (searchTag, index, array) {
                        return article.tag && findIndexByProperty(article.tag, 'name', searchTag) >= 0;
                    });

                if (containsAuthor && containsTags) {
                    tempArray.push(article);
                }
            });

        } else {
            tempArray = articles;
        }

        tempArray.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });

        return tempArray.slice(skip, top);
    };

    var getArticleById = function (id) {
        var expectedArticle = null;
        articles.forEach(function (article) {
            if (article.id === id) {
                expectedArticle = article;
            }
        });
        return expectedArticle;
    };

    var validateArticle = function (article) {
        var validArticleData = article.id && (article.title && article.title.length < 100) && (article.summary
            && article.summary.length < 200) && article.createdAt && (article.author && article.author.length > 0)
            && (article.content && article.content.length > 0) && article.imgUrl;

        var validTagData = article.tag && article.tag.length > 0 &&
            article.tag.every(function (articleTag) {
                return findIndexByProperty(tags, 'name', articleTag.name) >= 0;
            });

        return validArticleData && validTagData;
    };

    var addArticle = function (article) {
        if (validateArticle(article)) {
            articles.push(article);
            return true;
        }
        return false;
    };

    var removeArticle = function (id) {
        var itemIndexToRemove = findIndexByProperty(articles, 'id', id);

        if (itemIndexToRemove != -1) {
            articles.splice(itemIndexToRemove, 1);
            return true;
        }

        return false;
    };

    var editArticle = function (id, article) {
        var currentArticle = getArticleById(id);
        currentArticle.title = article.title || currentArticle.title;
        currentArticle.summary = article.summary || currentArticle.summary;
        currentArticle.content = article.content || currentArticle.content;
        currentArticle.imgUrl = article.imgUrl || currentArticle.imgUrl;
        currentArticle.tag = article.tag || currentArticle.tag;
        if (validateArticle(currentArticle)) {
            return true;
        }
        return false;
    };

    var findIndexByProperty = function (data, propertyName, value) {
        return data.findIndex(function (dataItem) {
            return value === dataItem[propertyName];
        });
    };

    return {
        addTag: addTag,
        getArticles: getArticles,
        getArticleById: getArticleById,
        validateArticle:validateArticle,
        addArticle: addArticle,
        removeArticle: removeArticle,
        editArticle: editArticle,
        findIndexByProperty: findIndexByProperty,
        articles: articles
    };

}());

var articleRenderService = (function () {
    var fillArticleTemplate = function(article) {
        return '<div class="cols col-3">'
            + '<img src="' + article.imgUrl + '" alt="thumbnail">'
            + '<div class="news-item-title">'
                + '<h1>' + article.title + '</h1>'
            + '</div>'
            + '<p class="news-item-description">' + article.summary + '</p>'
            + '<span class="content-item-read-btn"><a href="#">Read more...</a></span>'
            + '<div class="content-item-author-date">'
                + '<span>by&nbsp</span>'
                + '<span>' + article.author + ' ' + '</span>'
                + '<span>/' + ' ' + '</span>'
                + '<span>' + formatDate(article.createdAt) + ' ' +'</span>'
                + '<span>/ </span>'
                + '<span>' + formatTime(article.createdAt) + '</span>'
            + '</div>'
            + '<div class="content-item-tag-wrapper">'
                + fillTags(article.tag)
            + '</div>'
            + (user ? '<div class="edit-btns">'
                + '<span class="fa fa-pencil-square-o" aria-hidden="true"></span>'
                + '<span><a href="#">edit</a></span>'
                + '<span class="fa fa-trash-o" aria-hidden="true"></span>'
                + '<span><a href="#">delete</a></span>'
            + '</div>' : '')
            + '</div>';
    };

    var fillTags = function (tags) {
        var result = '';
        tags.forEach(function (tag) {
            result += '<span class="content-item-tag"> <a href="#">' + tag.name + '</a></span>';
        });
        return result;
    };

    var headerTemplate = function () {
        return '<span class="header-title">FOOTBALL NEWS</span>'
                + '<span class="header-title-sm">FN</span>'
                + '<ul>'
                    + '<li>'
                        + '<a class="fa fa-search" aria-hidden="true" href="#"></a>'
                    + '</li>'
                    + (user ? '<li>'
                        + '<a class="fa fa-plus-square-o" aria-hidden="true" href="#"></a>'
                        + '<a href="#">&nbsp add news</a>'
                    + '</li>' : '')
                    + '<li>'
                        + '<span class="fa fa-user-o" aria-hidden="true"></span>'
                        + (user ? '<span>&nbsp' + user + '</span>' : '<span>&nbsp guest</span>')
                    + '</li>'
                        + (user ? '<li><a href="#">Log out</a></li>' : '<li><a href="#">Log in</a></li>')
                + '</ul>'
    };
    
    var addHeaderToHtml = function () {
        var headerWrapper = document.querySelector('.header-wrapper');
        headerWrapper.innerHTML = headerTemplate();
    };

    var addNewsToHtml = function (articles) {
        var wrapper = document.querySelector('.row');
        articles.forEach(function (article) {
            wrapper.insertAdjacentHTML('beforeend', fillArticleTemplate(article));
        });

        var newsItems = document.querySelectorAll('.cols.col-3');
        for(var i = 0; i < newsItems.length; i++) {
            newsItems.item(i).dataset.id = articles[i].id;
        }
    };

    var formatDate = function (date) {
        var monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return monthName[monthIndex] + ' ' + day + ', ' + year;
    };

    var formatTime = function (date) {
        return date.getUTCHours() + ':' + (date.getUTCMinutes()<10?'0':'') + date.getUTCMinutes();
    };

    return {
        addNewsToHtml : addNewsToHtml,
        addHeaderToHtml : addHeaderToHtml
    };
}());

document.addEventListener('DOMContentLoaded', function(event) {
    articleRenderService.addHeaderToHtml();
    articleRenderService.addNewsToHtml(articleService.articles);
});

console.log(articleService.getArticleById('12'));
console.log(articleService.getArticles(0, 5, {authorName: 'Иван', tags: ['sport', 'germany']}));
console.log(articleService.getArticles(0, 20, {authorName: 'Алексей', tags: ['sport']}));
console.log('is article removed: ' + articleService.removeArticle('22'));
console.log(articleService.articles.length);
console.log('is article added: ' + articleService.addArticle({
        id: '23',
        title: 'NEW ARTICLE!!',
        summary: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
        + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
        createdAt: new Date('2017-02-19T21:00:00'),
        author: 'new author',
        content: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
        + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
        imgUrl: 'img/arsen.png',
        tag: [
            {
                name: 'sport'
            },
            {
                name: 'football'
            }
        ]
    }));
console.log(articleService.articles.length);
console.log(articleService.articles[articleService.articles.length - 1]);
console.log('is article added with no id: ' + articleService.addArticle({
        title: 'NEW ARTICLE!!',
        summary: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
        + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
        createdAt: new Date('2017-02-19T21:00:00'),
        author: 'new author',
        content: 'Венгеру нужен ещё как минимум год, чтобы его стратегия управления командой сработала и, возможно,'
        + ' принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт). Но у «Арсенала»',
        imgUrl: 'img/arsen.png',
        tag: [
            {
                name: 'sport'
            },
            {
                name: 'football'
            }
        ]
    }));

console.log(articleService.editArticle('5', {
    title: 'NEW!!!',
    summary: 'принесла первый серьёзный титул за многие годы (Кубок и Суперкубок Англии не в счёт)'
}));
console.log(articleService.getArticleById('5'));