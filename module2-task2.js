/*
Modify the code from the previous example. Assume that the prices of flowers will be constant (they will not change).
Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered
information in the console. Now decrease the number of roses by 20 and lilies by 30. Display all the collected information
in the console again.
*/

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let roses = 70;
let lilies = 50;
let tulips = 120;

let rosesTotal = roses*rosePrice;
let liliesTotal = lilies*lilyPrice;
let tulipsTotal = tulips*tulipPrice;

let total = rosesTotal + liliesTotal + tulipsTotal;


console.log("Rose - unit price: " + rosePrice +
", quantity: " + roses + ", value: " + rosesTotal);

console.log("Lily - unit price: " + lilyPrice +
", quantity: " + lilies + ", value: " + liliesTotal);

console.log("Tulip - unit price: " + lilyPrice +
", quantity: " + tulips + ", value: " + tulipsTotal);

console.log("Total: " + total);
