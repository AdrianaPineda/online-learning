// Add
var age = 20
//age = age + 1
age += 1

// Substract
var weight = 30
//weight = weight - 2
weight -= 2

// Multiply
var wine = 200.3
var wineBox = wine * 3 // result is 600.90000...1
// ^ Decimals are not stored precisely
var wineBoxRounded = wine * 100 * 3 / 100 //When we multiply by 100, we convert the number to an integer (this works because we know the decimal points)
var wineBoxRoundedWithMath = Math.round(wine * 100 * 3) / 100 //Useful when we don't know the number of decimal points. Result is more precise.
var wineBoxRoundedWithStr = wineBoxRoundedWithMath.toFixed(3) //Converts to string
var wineBoxRoundedWithStrToDecimal = parseFloat(wineBoxRoundedWithStr) //Converts from string to float

// Division
var pizza = 8
var people = 2
var pizzaPerPerson = pizza / people
