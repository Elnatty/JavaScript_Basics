/*
⁡⁣⁣⁢Error Handling=======================================================⁡
1: Reference error -> when a non-existent variable is referenced
2: Syntax error -> invalid javascript.
3: Type error -> executing a method or operation on a data type that doesn't have that method.

example of error handling------------------------------------------------------
try {
  const x = 20;
  x.toUpperCase();
}
catch(e) {
  console.log(e instanceof TypeError);   // returns true
  // or you can
  console.log(e.message);
  // or define your own custom message
  console.log("this is an error sir.")
}


Other Data Types===============================================================
NaN (not a number), null(intentional absence of a variable), undefined

// Example -> filter for numbers from this array ================================
var x = [1,2,3,'f', 'r', -1, -2, -3]
console.log(x.filter(arrItem => typeof(arrItem) === "number" && arrItem > 0))

// Example 2 -> difference between 2 arrays
let a = [1,2,2,3,4];
let b = [1,2];
// difference between 2 arrays.
console.log(a.filter(x => !b.includes(x)))


a = 435;==================================================================
// split -> string to array, map -> returns an array, and reduce -> sums or perform actions on any item in an array.
console.log(a.toString().split('').map(Number).reduce((a,b) => a*b).toString())


example -================================================================
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
Outputs..........................
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

solution  -->>
function persistence(num) {
  let times = 0;
 num = num.toString();
 while (num.length > 1){
   times++;
   num = num.split('').map(Number).reduce((a, b) => a*b).toString()
 }
 return times;
}
*/