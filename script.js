//Arrow Functions

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,7));

// const add = (a,b) => a+b;
// console.log(add(2,6));

//how this keyword played in the arrow function

// const obj = {
//     name: "JohnIsDon",
//     regularfun: function(){
//         console.log(this.name);
//     },
//     arrfun: () => {
//         console.log(this.name);
//     arrfun
// }
// }
//     console.log(obj.regularfun());
//     console.log(obj.arrfun());

// Destructing of the Array

const arr = [1, 2, 3];

// let [first, second] = arr;
// console.log(second);
// console.log(first);

let [, , third] = arr;
console.log(third);


