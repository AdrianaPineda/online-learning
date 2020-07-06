class Person {
  constructor(name, lastName, height) {
    this.name = name
    this.lastName = lastName
    this.height = height
  }

  sayHello(fn) {
    var { name, lastName } = this
    console.log(`Hi, my name is ${name} ${lastName}`)
    if (fn) {
      fn(name, lastName) // isDeveloper is false, so we can skip it
    }
  }

  imTall() {
    return this.height > 1.8
  }
}

class Developer extends Person {
  constructor(name, lastName, height) {
    super(name, lastName, height)
  }

  sayHello(fn) {
    var { name, lastName } = this
    console.log(`Hi, my name is ${name} ${lastName} and I'm a developer`)
    if (fn) {
      fn(name, lastName, true)
    }
  }
}

function sayHelloBack(name, lastName, isDeveloper) {
  console.log(`Good morning ${name} ${lastName}`)
  if (isDeveloper) {
    console.log('I did not know you were a developer');
  }
}

var ana = new Person('Ana', 'Taylor', 1.81)
var erika = new Person('Erika', 'Maine', 1.65)
var arturo = new Developer('Arturo', 'Martinez', 1.7)

ana.sayHello()
erika.sayHello(sayHelloBack)
arturo.sayHello(sayHelloBack)