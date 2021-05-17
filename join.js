//Q.. write a simple javascript program to join all elements of the following array to a string?//
//sample array : my color ["red","green","black","white"]//


const join = (arr, joiner = ',') => arr.join(joiner);

console.log(join(["Red","Green","White","Black"],'+'));

console.log(join(["Red","Green","White","Black"],','));

console.log(join(["Red","Green","White","Black"],''));