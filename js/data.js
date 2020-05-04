'use strict';

var cQuery = []

let count = Math.round(Math.random() * 300);

console.log(count);


for (let i = 0; i < count; i++) {
    
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
    contract: '128/345232',
    type: "PDL",
    fullName: "Иванов Иван Иванович",
    delay: 16,
    commonDebt: 34223,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, placeat totam cupiditate delectus aspernatur soluta error voluptas, aliquam officia cumque eum reprehenderit natus doloremque? Aliquid minima asperiores dignissimos ut. Fugit tempora fugiat quisquam magni neque. Similique ex veritatis aut. Soluta odio ullam voluptas quas fugit saepe nemo, impedit tempore distinctio!",
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

