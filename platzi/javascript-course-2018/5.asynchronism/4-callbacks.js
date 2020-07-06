// CDN: content delivery network: server that contains files and serves the file to us
// from the nearest server to us. The server will point out the IP of the nearest server 
// to download the file from

// We are going to use jQuery to make requests to the swapi.co
// Callback: function that will be executed in the near future

const API_URL = 'https://swapi.co/api/'
const PEOPLE_PATH = 'people/:id'

const lukeURL = `${API_URL}${PEOPLE_PATH.replace(':id', 1)}`
const options = { crossDomain: true }
const onPeopleResponse = function (person) {
  console.log(arguments) // arguments is a variable all functions have that contains the parameters the function receives
  console.log(person)
  console.log(`Hi my name is ${person.name}`)
}
$.get(lukeURL, options, onPeopleResponse)