// Q2. write a javascript function to clone an array?
//Test data//
//1. console.log(arrayClone([1,2,4,0]));//
//2. console.log(arrayClone([1,2[4,0]]));//
const arrayClone = (arr) => (arr.map(item => item));

console.log(arrayClone([1,2,4,0]));

console.log(arrayClone([1,2,[4,0]]))
