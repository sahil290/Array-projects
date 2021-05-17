// Write a javascript function to check whether an "input" is an array or not ?//
//Test data//
//1. console.log (is array('w3resource'));// false//
//2.console.log (is array ([1,2,4,0]));// true//
const isArray = (arr) => (Array.isArray(arr));

console.log(isArray('w3resource'));

console.log(isArray([1,2,4,0]));