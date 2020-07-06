var ana = {
  name: 'Ana',
  lastName: 'Taylor',
  age: 28,
  engineer: true,
  cook: false,
  singer: false,
  dj: false,
  guitarPlayer: false,
  drone: true
}

const LEGAL_AGE_TO_VOTE = 18 // constant. As convention name is uppercase snake case

const canVote = function (person) { // Assign a function to a variable/constant. Anonymous function
  return person.age >= LEGAL_AGE_TO_VOTE
}
console.log(canVote(ana))

// Another option: arrow function
const canVoteAsArrowFunction = (person) => {
  return person.age >= LEGAL_AGE_TO_VOTE
}

// Shorter syntax: only one param (no need for parenthesis), and only returns (no need for brackets)
// const canVoteAsArrowFunction = person => person.age >= LEGAL_AGE_TO_VOTE

// Shorter syntax: destructuring param
// const canVoteAsArrowFunction = ({ age }) => age >= LEGAL_AGE_TO_VOTE

console.log(canVoteAsArrowFunction(ana))

//const cannotVote = person => !canVoteAsArrowFunction(person)
const cannotVote = ({ age }) => !canVoteAsArrowFunction({ age })
console.log(cannotVote(ana))

// Arrow functions use `this` from the code that contains the arrow function
// https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// An arrow function does not have its own this; the this value of the enclosing lexical context is used 
// i.e. Arrow functions follow the normal variable lookup rules. So while searching for this  which is not 
// present in current scope they end up finding this from its enclosing scope . 