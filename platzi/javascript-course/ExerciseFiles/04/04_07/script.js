function findBiggestFraction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result; // Local scope

	a>b ? result = ["a",a] : result = ["b",b];
    return result;
}

var firstFraction = 7/16; // Global scope
var secondFraction = 13/25; // Global scope

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");

// Types of variable scope: global (declared outside the function) and
// local (inside a function, valid only in the function)

// If you declare a variable without the `var` keyword, it becomes a global
// variable, even if defined inside a function
