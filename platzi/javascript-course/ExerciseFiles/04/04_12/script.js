function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);

// To use closures:
function doSomeMathClosure() {
	var a = 5;
	var b = 4;

	function multiply() {
		var result = a*b;
		return result;
	}

	return multiply;
}

var theResultClosure = doSomeMathClosure();

console.log("The result closure: ", theResultClosure); // Logs the function
console.log("The result closure: ", theResultClosure()); // Executes the multiply function

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// Closure: a function that remembers the environment they were created in
// A function inside a function that relies on variables in the outside function to work
