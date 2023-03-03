//objects
let ticket = {
  "from": "Central nueva",
  "to": "Belenes",
  "price": 9.50
};

console.log(ticket.from + "\n" + ticket.to + "\n" + ticket.price);
let person = {};

person.firstName = "Marco";
person.lastName = "Gonzalez";
console.log(person.firstName + " " + person.lastName);

//arrays

let books = [
  {
    title : "Speaking JavaScript",
    author : "Axel Rauschmayer",
    pages : 460
  },
  {
    title : "Programming JavaScript Applications",
    author : "Eric Elliott",
    pages : 254
  },
  {
    title : "Understanding ECMAScript 6",
    author : "Nicholas C. Zaka",
    pages : 352
  }
];

let newBook = {
  title : "Learning JavaScript Design Patterns",
  author : "Addy Osmani",
  pages : 254
};

books.push(newBook);

console.log(books.length);

console.log(books[0].title + " | " + books[1].title + " | " + books[2].title + " | " + books[3].title);

let newBooks = books.slice(-2);
//console.log(newBooks);

books.shift();
console.log(books.length);
console.log(books[0].title + " | " + books[1].title + " | " + books[2].title);

let totalPages = 0;

for(let i = 0; i < books.length; i++){
  totalPages += books[i].pages;
}
console.log("Total n° of pages: " + totalPages);
