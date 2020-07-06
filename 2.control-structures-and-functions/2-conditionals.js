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

function printJobs(person) {
  var { name, engineer, singer, drone } = person
  console.log(`${name} is:`)
  if (engineer) {
    console.log('Engineer')
  }

  if (singer) {
    console.log('Singer')
  } else {
    console.log('Not Singer')
  }

  if (drone) {
    console.log('Drone pilot')
  }

}

printJobs(ana)
