/*
Task 1

Arrays in JavaScript have a sort method available which, as you might guess, allows you to sort its elements. This method takes as an argument a function that will compare two elements of the array. The function should return zero if we consider the arguments to be the same, a value less than zero if we consider the first one to be smaller than the second, and a value larger than zero otherwise. Take a look at the example:

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50] 

A. Try to modify the above piece of code to make it as short as possible. Suggestions:

    use an anonymous function;
    use an arrow function;
    consider skipping the if statement.

*/

let numbers = [50, 10, 40, 30, 20];

let sorted = numbers.sort((a, b) => {
    let retVal = (a < b) ? -1 : 1;
    return retVal;
});
console.log(sorted);

/*
B. Then modify the function so that the elements are sorted in descending order, not in ascending order as in the example. 
*/

let sortedB = numbers.sort((a, b) => {
    let retVal = (a > b) ? -1 : 1;
    return retVal;
});
console.log(sortedB);

/*
Task 2

Write three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers (use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be declared using a function statement.

Example of use and expected results:
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
*/

function addA(n1, n2){
    return Number.isInteger(n1 && n2) ? n1 + n2 : NaN;;

}

function subA(n1, n2){
    return Number.isInteger(n1 && n2) ? n1 - n2 : NaN;;
}

function multA(n1, n2){
    return Number.isInteger(n1 && n2) ? n1 * n2 : NaN;;
}

console.log(addA(12, 10));
console.log(multA(12, 10.1));

/*
Task 3

Rewrite the functions from the previous task using an arrow function expression, trying to write them in the shortest possible form.

Example of use and expected results:
console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
*/
let addB= (n1, n2) => Number.isInteger(n1 && n2) ? n1 + n2 : NaN;

let subB= (n1, n2) => Number.isInteger(n1 && n2) ? n1 - n2 : NaN;

let multB= (n1, n2) => Number.isInteger(n1 && n2) ? n1 * n2 : NaN;


console.log(addB(12, 10));
console.log(multB(12, 10.1));

console.log(subB(12, 10));

/*
Task 4

Write an action function that will take the callback function as its first argument and the other two arguments as numbers. As a callback function, you will be able to pass one of the three functions from the previous task. The action function will call the callback function passed to it and will return the obtained result. The callback function will accept the second and third arguments from the action call.

Example of use and expected results:
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
*/

function action(cbFunc, n1, n2){
    return cbFunc(n1, n2);
}

console.log(action(addB, 12, 10)); // -> 22
console.log(action(subB, 12, 10)); // -> 2
console.log(action(multB, 10, 10.1)); // -> NaN

/*
Task 5
Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
*/

let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

/*

Task 6

Write a function that will calculate the n-th element of the Fibonacci sequence. This sequence is defined by:

each element of the sequence (except the first two) is the sum of the previous two. For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. The function should use recursion. In the definition, use a function expression (store an anonymous function in a variable).

Example of use and expected results:
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
*/

let fibonacci = function(n) {
    let result = 0;
    if(n != 0){
        if (n === 1) {
            result = 1;
        } else {
            result = fibonacci(n-1) + fibonacci(n-2);
        }
    }
    return result;
}

console.log(fibonacci(7))

/*Task 7

Rewrite the function from Task 6 using an arrow function expression, but try to shorten its code as much as possible (use conditional operators, and try not to use additional variables other than the parameter n).
*/

let fibonacciA = n => n === 0 ? 0 : ( n === 1 ? 1 : fibonacciA(n-1) + fibonacciA(n-2));
console.log(fibonacciA(7))

/*
Task 8

Write an iterative version of the function from Task 5 (use the for loop). Declare the function using a function statement.
*/

function fibonaccioFor(n){
    let nBBefore = 0;
    let nBefore = 1;
    for (let i = 2; i <= n; i++) {
        let current = nBBefore;
        nBBefore = nBefore;
        nBefore += current
    }

    return nBefore;
}