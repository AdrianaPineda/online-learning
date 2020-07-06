var nameAna = 'Ana'
var nameJoseph = 'Joseph'

function printNameInUpperCase(name) {
  name = name.toUpperCase()
  console.log(name)
}

printNameInUpperCase(nameAna)
printNameInUpperCase(nameJoseph)

// Now with objects:
var anaObject = {
  name: 'Ana',
  lastName: 'Taylor',
  age: 28
}

var josephObject = {
  name: 'Joseph',
  lastName: 'Susnisky',
  age: 27
}

printNameInUpperCase(anaObject.name)
printNameInUpperCase(josephObject.name)

// Now with person as param
function printPersonNameInUpperCase(person) {
  console.log(person.name.toUpperCase())
}

printPersonNameInUpperCase(anaObject)
printPersonNameInUpperCase(josephObject)

// We can also destructure the object in the params
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function printPersonNameInUpperCase2({ name }) {
  console.log(name.toUpperCase())
}

printPersonNameInUpperCase2(anaObject)
printPersonNameInUpperCase2(josephObject)
printPersonNameInUpperCase2({ name: 'Pepito' })

//
function printPersonNameInUpperCase3(person) {
   // var name = person.name
  var { name } = person // is the same as line above
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  console.log(name.toUpperCase())
}

function printNameAndAge(person) {
  var { name, age } = person
  console.log(`Hello, my name is ${name} and I'm ${age}`)
}

printNameAndAge(anaObject)
printNameAndAge(josephObject)
