'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say(){
        console.log(`User name  + ${this.name} +  with age  + ${this._age}`);
    }
    get age(){
        return this._age;
    }
    set age (age){
        if (typeof age === 'number' && age > 0 && age < 120) {
            this._age = age;
        } else {
            console.log("error");
        }
    }
}

const iurii = new User('Iurii', 27);
console.log(iurii.age);
iurii.age = 99;
console.log(iurii.age);
iurii.say();