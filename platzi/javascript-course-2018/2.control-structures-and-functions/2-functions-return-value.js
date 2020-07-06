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
function canVote(person) {
  return person.age >= LEGAL_AGE_TO_VOTE
}

console.log(canVote(ana))
