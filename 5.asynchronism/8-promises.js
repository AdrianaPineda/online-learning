// Promises
// Most browsers support promises, and if they don't we can use polyfills which
// detects if the browser has support for polyfills and it will automatically 
// create a class that will add support: it will do it under the hood and we wouldn't 
// know about it (it will be transparent)

// Promises are values we don't know about. Is a promise that there will be a value
// once an asynchronous (or synchronous) task finishes executing.
// A promise is a JS object
// Promises have 3 states:
// a) pending: a promise is created in this state
// b) fulfilled: a promise that is resolved successfully -> .then(val => ...) (we are passing a function)
// c) rejected: a promise that is rejected (it fails) -> .catch(err => ...) (we are passing a function)

// We can return a promise after one has been fulfilled (chain promises)

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
  .then(character => console.log(`The character 1 is ${character.name}`))
  .catch(onError)