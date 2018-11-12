var name = 'Adriana', lastname = 'Pineda'
console.log('Hello ' + name + ' ' + lastname)

// Upper and lowercase
var uppercaseName = name.toUpperCase()
var lowercaseLastname = lastname.toLowerCase()

// Character at pos
var firstLetterOfName = name.charAt(0)

// Number of letters
var letterCountOfName = name.length

// Concatenation and interpolation
var fullName = name + ' ' + lastname
var fullNameWithInterpolation = `${name} ${lastname.toUpperCase()}`

// Substrings
var str1 = name.charAt(1) + name.charAt(2)
var str2 = name.substr(1,2)
