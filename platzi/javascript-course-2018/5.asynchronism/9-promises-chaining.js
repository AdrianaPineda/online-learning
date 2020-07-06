const API_URL = 'https://swapi.co/api/'
const PEOPLE_PATH = 'people/:id'
const options = { crossDomain: true }

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_PATH.replace(':id', id)}`
    $
      .get(url, options, function(data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Failed getting character ${id}`)
}
getCharacter(1)
  .then(character1 => {
    console.log(`The character 1 is ${character1.name}`)
    return getCharacter(2)
  })
  .then(character2 => {
    console.log(`The character 2 is ${character2.name}`)
    return getCharacter(3)
  })
  .then(character => {
    console.log(`The character 3 is ${character.name}`)
    return getCharacter(4)
  })
  .then(character => {
    console.log(`The character 4 is ${character.name}`)
    return getCharacter(5)
  })
  .then(character => {
    console.log(`The character 5 is ${character.name}`)
    return getCharacter(6)
  })
  .then(character => {
    console.log(`The character 6 is ${character.name}`)
    return getCharacter(7)
  })
  .then(character => {
    console.log(`The character 7 is ${character.name}`)
  })
  .catch(onError)