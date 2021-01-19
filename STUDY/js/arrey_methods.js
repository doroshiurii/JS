const people = [
    {name: 'Iurii', age: 31, budget: 9009},
    {name: 'Oleg', age: 30, budget: 3311},
    {name: 'Nazarii', age: 29, budget: 32123},
    {name: 'Taras', age: 21, budget: 44223},
    {name: 'Andrew', age: 32, budget: 4664},
    {name: 'Martin', age: 36, budget: 5677},
];


// for (let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// for (let i of people) {
//     console.log(i);
// }

// ForEach
//people.forEach(value => console.log(value));

// Map
// const newPeople = people.map(person => {
//     return person;
// });

// console.log(newPeople);

// Filter

// const adults = people.filter(person => {
//     if (person.age >= 30) {
//         return true;
//     }
// });

// const adults2 = people.filter(person => person.age >= 30);
// console.log(adults2);


// Reduce
// let amount = 0;
// for (let i = 0; i < people.length; i++){
//     amount += people[i].budget;
// }
// console.log(amount);

// const amount = people.reduce((total, person) => total += person.budget, 0);

// console.log(amount);

// Find
// const iurii = people.find(person => person.name === "Iurii");
// console.log(iurii);

// FindIndex
// const iurii = people.findIndex(person => person.name === "Iurii");
// console.log(iurii);
