const API_URL = 'https://swapi.co/api/'
const PEOPLE_PATH = 'people/:id'
const options = { crossDomain: true }

function getCharacter(id, callback) {
  const url = `${API_URL}${PEOPLE_PATH.replace(':id', id)}`
  
  // $.get(url, options, function (person) { // first callback
  //   console.log(`Hi my name is ${person.name}`)
  //   if (callback) {
  //     callback() // second callback
  //   }
  // })
  $
    .get(url, options, callback)
    .fail(() => {
      console.log(`An error ocurred, could not get character ${id}`)
    })

}

// Requests will execute serially and not in parallel
getCharacter(1, function(person) {
  console.log(`Hi my name is ${person.name}`)
  
  getCharacter(2, function(person) {
    console.log(`Hi my name is ${person.name}`)
    
    getCharacter(3, function(person) {
      console.log(`Hi my name is ${person.name}`)
      
      getCharacter(4, function(person) {
        console.log(`Hi my name is ${person.name}`)
        
        getCharacter(5, function(person) {
          console.log(`Hi my name is ${person.name}`)
          
          getCharacter(6, function(person) {
            console.log(`Hi my name is ${person.name}`)

            getCharacter(7, function(person) {
              console.log(`Hi my name is ${person.name}`)
            })
          })
        })
      })
    })
  })
})