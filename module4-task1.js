/*
Task 1

Write a script that will ask the user to input a number. Display the message "Bingo!" when the number
is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
*/

let number = window.prompt("Enter a number", 0);

if(number > 90 && number < 110) {
    console.log("Bingo!");
  } else{
    console.log("Miss");
  }

/*
Task 2

Rewrite the code from the previous task, replacing if with a ternary conditional operator.
*/

let number = window.prompt("Enter a number", 0);

let message = (number > 90 && number < 110) ? "Bingo!" : "Miss";

console.log(message);

/*
Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character
representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and
show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred. 
Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check
if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN)
will return true.
*/

let firstNumber = Number(window.prompt("Enter the first number", 0));
let secondNumber = Number(window.prompt("Enter the second number", 0));
let operation = window.prompt(`Enter the type of operation you want to perform ["+", "-", "*", "/".]`, "");
let result;

if (!(Number.isNaN(firstNumber)) && !(Number.isNaN(secondNumber))) {
switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
  result = firstNumber - secondNumber;
    break;
  case "*":
  result = firstNumber * secondNumber;
    break;
  case "/":
  result = firstNumber / secondNumber;
    break;
  default:
  console.log("Not a valid operation");
  }
} else {
  console.log("Either number 1 or number 2 is not a valid number");
}
