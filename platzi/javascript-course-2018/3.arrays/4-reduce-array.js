var ana = {
  name: 'Ana',
  lastName: 'Taylor',
  age: 28,
  height: 1.5,
  books: 2
}

var vicky = {
  name: 'Vicky',
  lastName: 'Barros',
  age: 17,
  height: 1.78,
  books: 1
}

var paula = {
  name: 'Paula',
  lastName: 'Zapata',
  age: 32,
  height: 1.9,
  books: 5
}

var martin = {
  name: 'Martin',
  lastName: 'Gomez',
  age: 12,
  height: 1.76,
  books: 3
}

var people = [ana, vicky, paula, martin]

// Reduce: reduces an array to a single value
// No need to do a for loop

const reducer = (accumulator, { books }) => accumulator + books
// Longer syntax:
// const reducer = (accumulator, people) => {
//   return accumulator + people.books
// }

var totalBooks = people.reduce(reducer, 0)

console.log(`There are ${totalBooks} books in total`)