'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

const iurii = new User("Iurii", 32);
console.log(iurii);