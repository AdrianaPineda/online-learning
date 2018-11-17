// ECMAScript is the standard in which javascript is based of
// class under the hood is a prototype

class Person {
  constructor(name, lastName, height) {
    this.name = name
    this.lastName = lastName
    this.height = height
  }

  sayHello () {
    console.log(`Hi, my name is ${this.name} ${this.lastName}`)
  }

  imTall() {
    return this.height > 1.8
  }
}

var ana = new Person('Ana', 'Taylor', 1.81)

// Now, inheritance:
class Developer extends Person {
  constructor(name, lastName, height) {
    super(name, lastName, height)
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name} ${this.lastName} and I'm a developer`)
  }
}