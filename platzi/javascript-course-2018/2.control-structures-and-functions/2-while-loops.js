var ana = {
    name: 'Ana',
    lastName: 'Taylor',
    age: 28,
    weight: 75
}

console.log(`At the beginning of the year ${ana.name} weights ${ana.weight}kg`)

const WEIGHT_GAIN = 0.3
const DAYS_IN_YEAR = 365

const gainWeight = (person) => person.weight += WEIGHT_GAIN
const loseWeight = (person) => person.weight -= WEIGHT_GAIN
const eatsALot = () => Math.random() < 0.3
const exercises = () => Math.random() < 0.4

var days = 0
const GOAL = ana.weight - 3
while (ana.weight > GOAL) {
  if (eatsALot()) {
    // Gains weight
    gainWeight(ana)
  } 
  if (exercises()) {
    // Losses weight
    loseWeight(ana)
  }

  days += 1
}

console.log(`At the end of the year ${ana.name} weights ${ana.weight.toFixed(1)}kg`)
console.log(`${days} days passed until ${ana.name} reached less than ${GOAL}kgs`)