function findBiggestFraction(a, b) {
  var result;
  a > b ? result = ["firstFraction: ", a] : result = ["secondFraction: ", b]
  return result;
  // Functions can use variables defined outside of this scope, but
  // they must be defined before the function
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var result = findBiggestFraction(firstFraction, secondFraction);
console.log(result)
