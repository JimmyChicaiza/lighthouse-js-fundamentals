function isEven(num) {

return num % 2 == 0;

}

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

/*
 If i do this instead the result will stil be the same.

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

by adding the function isEven(), inside the console.log() that is a function we will have the dame result.

This will produce the same result as our previous example. There are a couple things to understand here. First, console.log is itself a function – only it's pre-defined by JavaScript and we can use it without having to declare it ourselves. Second, we can pass the result returned by isEven directly to console.log, which takes that value and outputs it to Terminal.

*/


