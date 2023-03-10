//Function expression
let add = function(a, b) {
    return a + b;
}
console.log(add(10, 20)); // -> 30

//Arrow function

let addA = (a, b)=> {
    return a+ b;
}
console.log(addA(10, 20)); // -> 30

//Simplified arrow function
let addB = (a, b) => a+b;
console.log(addB(10, 20)); // -> 30

//Ejemplo de una funcion recursiva que devuelve el factorial de un numero
function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120

//Misma funcion usando arrow function simplificada

let fact = n => n > 1 ? n * fact(n - 1) : 1;

console.log(fact(5)); // -> 120
