// JS does *not* support inheritance because it doesn't support classes (it only supports prototypes)
// But there is something called "prototypical inheritance"

function inheritsFrom(childPrototype, parentPrototype) {
  var fn = function () {} // anonymous function
  fn.prototype = parentPrototype.prototype // we do this to avoid changing the parent prototype
  childPrototype.prototype = new fn
  childPrototype.prototype.constructor = childPrototype // if we don't add this line, we would be adding the constructor of the parentPrototype
  // All functions have the attribute "prototype", parentPrototype is a function
}

function Person(name, lastName, height) {
  this.name = name
  this.lastName = lastName
  this.height = height
}

Person.prototype.sayHello = function() {
  console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}

Person.prototype.imTall = function() {
  return this.height > 1.8
}

function Developer(name, lastName) {
  this.name = name
  this.lastName = lastName
}

inheritsFrom(Developer, Person) // Needs to be called after the prototype

Developer.prototype.sayHello = function() {
  console.log(`Hi, my name is ${this.name} ${this.lastName} and I'm a developer`)
}

// If we call it from here, we will be overwriting the sayHello function
// inheritsFrom(Developer, Person)

// All functions have an attribute called "prototype", it is an object that has the methods, attributes and constructor
// __proto__ is the prototype of the object (prototype of the prototype). In here, a child class (for example Developer) we can see the Person proto
// When we call a method, it first looks for the available methods in the prototype, if it doesn't then it goes to the __proto__ chain (to the prototype of that prototype)
// and checks if someone understands that method. The last prototype is Object
Person.prototype