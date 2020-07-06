function Person(name, lastName, height) {
  console.log('Person init')
  this.name = name
  this.lastName = lastName
  this.height = height
}

Person.prototype.sayHello = function() {
  console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}

// This *doesn't* work > 
// We should use normal functions for prototype functions
// Person.prototype.imTall = () => { 
//   // for arrow functions, `this` is the window, *not* the person
//   // `this` is what is `this` in the global space > this === window
//   return this.height > 1.8
// }

Person.prototype.imTall = function() {
  return this.height > 1.8
}

var ana = new Person('Ana', 'Taylor', 1.81) 
var jonas = new Person('Jonas', 'Carter', 1.4)
var arturo = new Person('Arturo', 'Maine', 1.9)
