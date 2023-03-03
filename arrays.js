let names = [["Olivia", "Emma", "Mia", "Sofia"], //names[0]
             ["William", "James", "Daniel"]];    //names[1]
console.log(names[0]);
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];

console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

//Array containing objects

let users =[
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21


//Arrays are treated as objects by the typeof operator, we can use instanceof to determine if an object is an instance of a class

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false
console.log(day instanceof String); // -> false
