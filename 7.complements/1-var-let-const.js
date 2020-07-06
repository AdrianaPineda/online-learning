var james = {
  name: 'James',
  lastName: 'Muller',
  age: 24
}
function isAdult(person) {
  if (person.age > 18) {
    var message = 'Is adult'
  } else {
    var message = 'Is *not* adult'
  }

  console.log(message)
}

isAdult(james)

// if we use `let`, the reach of that variable is only in the block
// in which it was defined and used, then it won't be accessible in line 13
// `const` is similar to `let`, but the value can't be reassigned
// var: function scoped
// let: block scoped
// https://tylermcginnis.com/var-let-const/
// hoisting: https://bitsofco.de/variable-and-function-hoisting-in-es2015/
// https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/