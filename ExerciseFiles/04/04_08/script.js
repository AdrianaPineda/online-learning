/*

With ECMAScript 2015 (ES6) there are 2 new types of variables
- const: constant
- let: variable, block scope variable, smaller scope than var

*/

const MYCONSTANT = 5;
console.log(MYCONSTANT);
//MYCONSTANT = 6; // Throws an error

function logScope() {
  var localVar = 2;
  if (localVar) {
    var localVar = "I'm different";
    console.log(localVar);
  }
  console.log(localVar);

  // Both print the same ^, they aren't different
}

logScope();

function logScopeFix() {
  let localVar = 2; // Can be `var` or `let`
  if (localVar) {
    let localVar = "I'm different";
    console.log(localVar);
  }
  console.log(localVar);

  // They don't print the same ^
}

logScopeFix();

console.log("****");
var a = 1;
var b = 2;

console.log(b);

(function() {
  var b = 3;
  console.log(b);
  a += b;
})();

console.log(a); // 4
console.log(b); // 2
