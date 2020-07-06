var ana = {
  name: 'Ana',
  lastName: 'Taylor',
  age: 28,
  weight: 75
}

var vicky = {
  name: 'Vicky',
  lastName: 'Barros',
  age: 17,
  weight: 50
}

var paula = {
  name: 'Paula',
  lastName: 'Zapata',
  age: 32,
  weight: 10
}

var martin = {
  name: 'Martin',
  lastName: 'Gomez',
  age: 12,
  weight: 40
}

var people = [ana, vicky, paula, martin]

const isOlder = person => {
  return person.age > 18
}

// Same as above: ^
//const isOlder = ({ age }) => age > 18

var olderPeople = people.filter(isOlder)

// Same as above: ^
// var olderPeople = people.filter(function (person) { // Anonymous function
//   return person.age > 18
// })

console.log(olderPeople)
