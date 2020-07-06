var ana = {
  name: 'Ana',
  lastName: 'Taylor',
  age: 28,
  height: 1.5
}

var vicky = {
  name: 'Vicky',
  lastName: 'Barros',
  age: 17,
  height: 1.78
}

var paula = {
  name: 'Paula',
  lastName: 'Zapata',
  age: 32,
  height: 1.9
}

var martin = {
  name: 'Martin',
  lastName: 'Gomez',
  age: 12,
  height: 1.76
}

var people = [ana, vicky, paula, martin]

const heightToCm = person => {
  // We create a new object to avoid changing the original one
  return {
    ...person,
    height: person.height * 100
  }

  // Changing the original array:
  // person.height *= 100
  // return person
}

// Another way to write this:
// const heightToCm = person => ({ // Pay attention to the '(', we need it cause without it we will be putting the body of the function, not the object
//     ...person,
//     height: person.height * 100
// })

var peopleInCms = people.map(heightToCm)
console.log(peopleInCms)