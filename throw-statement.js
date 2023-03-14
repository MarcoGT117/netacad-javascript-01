//Factorial function without a throw statemente to avoid large numbers
/*
function factorial(n) {
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(3)); 
console.log(factorial(5)); 
console.log(factorial(8)); 
console.log(factorial(20)); 
console.log(factorial(1000));
 */

//Factorial function  witha limit for results larger than 20
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(20));
console.log(factorial(1000));
