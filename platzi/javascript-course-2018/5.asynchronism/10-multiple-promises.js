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

var ids = [1, 2, 3, 4, 5, 6, 7]
// var promises = ids.map(function(id) {
//   return getCharacter(id)
// })
// Same function, with arrow function:
var promises = ids.map(id => getCharacter(id))
// This is how we do it in parallel:
Promise
  .all(promises)
  .then(characters => console.log(characters)) // array with all the values we expect from each promise
  .catch(onError)