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

async function getCharacters() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promises = ids.map(id => getCharacter(id))

  try {
    var characters = await Promise.all(promises)
    console.log(characters)
  } catch(id) {
    onError(id)
  }

  // That ^ replaces this:
  // Promise
  //   .all(promises)
  //   .then(characters => console.log(characters)) // array with all the values we expect from each promise
  //   .catch(onError)
}

getCharacters()

// Not all browsers support async await