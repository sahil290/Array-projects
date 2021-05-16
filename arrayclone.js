// Q2. write a javascript function to clone an array?
//Test data//
//1. console.log(arrayClone([1,2,4,0]));//
//2. console.log(arrayClone([1,2[4,0]]));//
var arrayClone = [];

arrayClone = (array) => {
    return array.slice(0);
}
console.log(arrayClone([1,2,4,0]));


console.log(arrayClone([1,2,[4,0]]));
