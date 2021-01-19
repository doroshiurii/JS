'use strict';



// 1. Звичайна функція: this = window, but if we have 'use strict", then this will be undefined.
// 2. Контект у мотодів об'єка це сам об'єкт.
    // const obj = {
    //     a: 20,
    //     b: 15,
    //     sum: function () {
    //         console.log(this);
    //         function shout(){
    //             console.log(this);
    //         }
    //         shout();
    //     }
    // };
    // obj.sum();
// 3. this в конструкторах і класах це новий екземпляр обєкта.

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello " + this.name);
//     };
// }

// let iurii = new User('Iurii', 43);
// iurii.hello();

// 4. Ручна привязка this: call, apply, bind.

// function sayMyName(){
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: "Johnny"
// };

// sayMyName.call(user);
// sayMyName.apply(user);

// function count(num){
//     return this*num;
// }

// const double = count.bind(3);
// console.log(double(3));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};