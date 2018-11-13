var x = 2, y = '2'
console.log(x == y) // true. Converts vars to the same data type to compare
console.log(x === y) // false. Validates the vars are of the same data type

var ana = {
  name: 'Ana'
}
var anotherAna = {
  name: 'Ana'
}
console.log(ana == anotherAna); // false. Object comparison checks the memory reference


var sameAna = ana
console.log(ana == sameAna); // true. We are assigning sameAna to the same memory address as ana
ana.name = 'Pepe'
console.log(ana.name)
console.log(sameAna.name) // Both variables will have their name changed. Both variables point to the same reference in memory

var anotherAnaDestructured = {
  ...ana
}
console.log(ana == anotherAnaDestructured); // false. We created a new object, which has a different memory address
