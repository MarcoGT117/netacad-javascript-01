const x = 5;
const y = 2;

console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25

//Unary arithmetic operators
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number


//Unary increment and decrement
let n5 = 10;
let n6 = 10;

console.log(n5); // -> 10
console.log(n5++); // -> 10
console.log(n5); // -> 11

console.log(n6); // -> 10
console.log(++n6); // -> 11
console.log(n6); // -> 11

let n7 = 20;
let n8 = 20;

console.log(n7); // -> 20
console.log(n7--); // -> 20
console.log(n7); // -> 19

console.log(n8); // -> 20
console.log(--n8); // -> 19
console.log(n8); // -> 19

//Compound assignment operators
let z = 10;

z += 2;
console.log(z); // -> 12
z -= 4;
console.log(z); // -> 8
z *= 3;
console.log(z); // -> 24
z /= 6;
console.log(z); // -> 4
z **= 3;
console.log(z); // -> 64
z %= 10;
console.log(z); // -> 4

//With logical operands
let a = true;
console.log(a); // -> true
a &&= false; //Is the same as a = a && false
console.log(a); // -> false

let b = false;
console.log(b); // -> false
b ||= true; //b = b || true
console.log(b); // -> true
