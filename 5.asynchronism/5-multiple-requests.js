const API_URL = 'https://swapi.co/api/'
const PEOPLE_PATH = 'people/:id'
const options = { crossDomain: true }

const onPeopleResponse = function (person) {
  console.log(`Hi my name is ${person.name}`)
}

function getCharacter(id) {
  const url = `${API_URL}${PEOPLE_PATH.replace(':id', id)}`
  $.get(url, options, onPeopleResponse)  
}

getCharacter(1)
getCharacter(2)
getCharacter(3)

// This wont print in the order we wrote them because we don't know (and will never know)
// how much each request (asynchronous) will take to finish
// The order in which we write them doesn't guarantee us the order they will arrive