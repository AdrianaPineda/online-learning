const API_URL = 'https://swapi.co/api/'
const PEOPLE_PATH = 'people/:id'
const options = { crossDomain: true }

function getCharacter(id, callback) {
  const url = `${API_URL}${PEOPLE_PATH.replace(':id', id)}`
  
  $.get(url, options, function (person) {
    console.log(`Hi my name is ${person.name}`)
    if (callback) {
      callback()
    }
  })
}

// Requests will execute serially and not in parallel
getCharacter(1, function() {
  getCharacter(2, function() {
    getCharacter(3, function() {
      getCharacter(4, function() {
        getCharacter(5, function() {
          getCharacter(6, function() {
            getCharacter(7)
          })
        })
      })
    })
  })
})

// ^this is called callback hell :(

// This will call the 2nd function right away, that's why we need `function`
// getCharacter(1, getCharacter(2))