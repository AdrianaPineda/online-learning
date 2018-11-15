function Person(name, lastName, height) {
  console.log('Person init')
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

var ana = new Person('Ana', 'Taylor', 1.81) 
var jonas = new Person('Jonas', 'Carter', 1.4)
var arturo = new Person('Arturo', 'Maine', 1.9)

ana.imTall() // this will raise an error IF the function is declared after this line
jonas.imTall()
arturo.imTall()

// The functions of a prototype must be defined before calling it. 
// By convention, define functions after the prototype at the beginning of the file and all of them together
// This will raise an error
// Person.prototype.imTall = function() {
//   return this.height > 1.8
// }
