// function User(name, id) {

//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//     console.log('Hello! ' + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }


// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan); // User {name: "Ivan", id: 25, human: true}
// console.log(alex); // User {name: "Alex", id: 20, human: true}

// ivan.hello() // Hello! Ivan
// alex.hello() // Hello! Alex

// ivan.exit() // Пользователь Ivan ушел

// console.log(User);

// 'use strict';
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);



// let user = {
//     name: "Jhon",
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith')); // Call принимает в виде строки
// console.log(sayName.apply(user), ['Snow']); // Apply принимает в виде массива

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);

// console.log(double[3]);
// console.log(double[10]);


// 1) Просто вызов функции - window/undefiend
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind