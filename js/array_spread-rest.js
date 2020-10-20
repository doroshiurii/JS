const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

//log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(num = 1, basis) {
    console.log(num * basis);
}

//calcOrDouble(12, 2);


const arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = arr;

const arr3 = [...arr, 'ddd'];

console.log(arr);
console.log(arr2);
console.log(arr == arr2);
console.log(arr3);
console.log(arr == arr3);
