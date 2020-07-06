// Classes in JS are prototypes, not classes as in order programming languages
function Person(name, lastName, height) {
  console.log('Person init')
  this.name = name
  this.lastName = lastName
  this.height = height
  // no need of `return this` cause its done automatically
}

Person.prototype.sayHello = function() {
  console.log(`Hi, my name is ${this.name} ${this.lastName}`)
}

Person.prototype.imTall = function() {
  if (this.height > 1.8) {
    console.log(`Hi, I'm tall: ${this.name} ${this.lastName}`)
  } else {
    console.log(`Hi, I'm *not* tall: ${this.name} ${this.lastName}`)
  }
}

var ana = new Person('Ana', 'Taylor', 1.81) 
// ^^
// Creates object based on a prototype
// We assign the prototype Person to this object

ana.sayHello()
ana.imTall()

var jonas = new Person('Jonas', 'Carter', 1.4)
jonas.imTall()