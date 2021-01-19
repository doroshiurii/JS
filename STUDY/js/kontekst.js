function hello() {
    console.log('Hello', this);
}

const person = {
    name: "IUrii",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

const lena = {
    name: 'Elena',
    age: 23
};

//person.logInfo.bind(lena, 'Front-End', '111-111-1-1-1-1')();
//person.logInfo.call(lena, 'Front-End', '111-111-1-1-1-1');
//person.logInfo.apply(lena, ['Front-End', '111-111-1-1-1-1']);

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map( x => x * n);
// }

Array.prototype.multBy = function(n){
    return this.map( x => x * n);
};

console.log(array.multBy(22));

//console.log(multBy(array, 65));

