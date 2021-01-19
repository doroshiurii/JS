'use strict';


const str = 'Ma name is R2D2';

console.log(str.match(/\D/ig));



// new RegExp('pattern', 'flags');

// /pattern/fa 

// const ans = prompt('Neter your Nmber');

// const reg = /\d/g;
// console.log(ans.match(reg));

// i - flag not case sensitive
// g - flag global 
// m - flag multiple lines

// \d digits
// \w words
// \s spaces


// \D not digits
// \W not words
// \S not spaces

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Your Password');
// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));