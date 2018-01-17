/*var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9,13/25));
console.log(theBiggest); // prints the function
*/

var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(7/9,13/25)

console.log(theBiggest);
// Immediately invoked function expression
// If we want to use external variables, those need to be list out before the expression
// Benefit: runs immediately
