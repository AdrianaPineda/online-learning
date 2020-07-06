var ana = {
  name: 'Ana',
  lastName: 'Taylor',
  age: 28,
  weight: 75
}

console.log(`At the beginning of the year ${ana.name} weights ${ana.weight}kg`)

const WEIGHT_GAIN = 0.2
const DAYS_IN_YEAR = 365

const gainWeight = (person) => person.weight += WEIGHT_GAIN
const loseWeight = (person) => person.weight -= WEIGHT_GAIN

for (var i = 1; i <= DAYS_IN_YEAR; i++) {
  var random = Math.random()
  if (random < 0.25) {
    // Gains weight
    gainWeight(ana)
  } else if (random < 0.5) {
    // Losses weight
    loseWeight(ana)
  }
}

console.log(`At the end of the year ${ana.name} weights ${ana.weight.toFixed(1)}kg`)
