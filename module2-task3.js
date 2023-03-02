let nmbr = 42;
let str = "hello";
let isBoo = true;
let bigNmbr = 42n;

console.log(nmbr + " ["+ typeof nmbr + "]");
console.log(str + " ["+ typeof str + "]");
console.log(isBoo + " ["+ typeof isBoo + "]");
console.log(bigNmbr + " ["+ typeof bigNmbr + "]");

/*
*Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String.
*Start with the value "1234". Is it possible?
*/

let chain = "1234";
let chainNumbr = Number(chain);
let chainBigInt = BigInt(chainNumbr);
let chainBoolean = Boolean(chainBigInt);

/*
* Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1)
*/
const str1 = 42 + "1";
let sliceStr1 = str1.slice(2);
let slice2 = str1.slice(0,2);
let sliceStr1Nmbr =  Number(sliceStr1);
let slice2Nmbr =  Number(slice2);
console.log(slice2Nmbr + sliceStr1Nmbr);
