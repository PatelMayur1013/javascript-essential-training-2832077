/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Book from "./Book.js";

const book=new Book(
    "One Night Only",
    "Saumyaa Vohra",
    "Kindle Edition",
    "Pan",
    "5 May 2023",
    false,
    123
);

console.log("New Book Object",book);
console.log("Book Name",book.name);
console.log("Book Author",book.author);
console.log("Book Edition",book.edition);
console.log("Book Publication",book.publication);