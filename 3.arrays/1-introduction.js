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
const firstPerson = people[0]
const firstPersonName = people[0].name
// Same as above ^
// const firstPersonName = people[0].['name']

// Loop the array
for (var i = 0; i < people.length; i++) {
  var person = people[i]
  console.log(`${person.name} weights ${person.weight}`)
}
