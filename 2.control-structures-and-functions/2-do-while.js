var counter = 0

const rains = () => Math.random() < 0.25

// Code inside do is executed always once and then the while condition is evaluated
do {
    counter++
} while (!rains())

var timesWent = 'times'
if (counter == 1) {
    timesWent = 'time'
}

console.log(`I went to see if it rained ${counter} ${timesWent}`)