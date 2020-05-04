'use strict';

var cQuery = []


for (let i = 0; i < 100; i++) {
    
    let id = 197 + i;
    let id_status = (Math.random() > .7 ? 'Installment' : 'PDL');
    
    let obj = {
        id: "128/345" + id,
        id_status: id_status,
        debt: Math.round(200000 * Math.random()),
    };

    cQuery.push(obj)
}

var commonQuery = cQuery.sort((a, b) => (a.debt < b.debt ? 1 : -1))


var myQuery = [
    {
        id: "128/345232",
        id_status: "PDL",
        debt: 34630
    },
    {
        id: "128/345232",
        id_status: "PDL",
        debt: 34630
    },
]

var dataDetail = {
    type: "PDL",
    fullName: "Иванов Иван Иванович",
    delay: 16,
    commonDebt: 34223,
    contacts: [
        {
            tel: "8 954 234 3465",
            owner: "self",
            lastCall: "7 days",
            priority: 100
        },
        {
            tel: "8 986 435 2435",
            owner: "spouse",
            lastCall: "3 days",
            priority: 90
        },
        {
            tel: "8 800 555 3535",
            owner: "employer",
            lastCall: "",
            priority: 20
        },
    ]
}


// console.log(commonQuery);

// Тип договора: PDL
// ФИО: Иванов Иван Иванович
// Дней просрочки: 16
// Общая задолженность: 34223 руб.

// 8 954 234 3465 - Мобильный - последний звонок 7 дней назад
// Приоритет доп. контактов (выше контакт - больше приоритет):
// 8 986 435 2435 - Супруг/Супруга (последний звонок 3 дня назад)
// 8 800 555 3535 - Работодатель  (звонков не было)