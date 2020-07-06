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

// Increments person age
function birthday(person) {
  // person.age += 1 // Objects are passed as reference in params, this will modify the object
  return {
    ...person, // we destructure person here. We copy the original values but age:
    age: person.age + 1
  }

  // ... spread operator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // Allows an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
}

birthday(anaObject)
console.log(anaObject.age)
