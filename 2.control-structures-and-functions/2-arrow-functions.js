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
