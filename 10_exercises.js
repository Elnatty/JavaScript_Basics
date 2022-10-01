/*
Example 1: 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Solution---------------------------------
function validatePIN (pin) {
  //return true or false
  const fourDi = /^\d{4}$/;
  const sixDi = /^\d{6}$/;
  
  const result1 = pin.match(fourDi);
  const result2 = pin.match(sixDi);
  
  if (!result1 && !result2) {return false;
    } else {
      return true
    }
}

or----------------------------------------

function validatePIN (pin){
  return /^(\d{4}|\d{6})$/.test(pin);
}


Example 2:
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

Solution:-----------------------------------------
function lowercaseCount(str){
  const res = str.match(/[a-z]/g);
  
  return res ? res.length : 0
}

or---------------------------------------------------

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}


Example 3:
Working with dates.
console.log(new Date().toDateString())


Example 4
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

Solution:-------------------------------------------------
function capitalize(s){
  const a = s.split("");
  const b = s.split("");
  a.forEach((item, index, arr) => {
    if (index % 2 === 0){
      arr[index] = arr[index].toUpperCase();
    } 
  });
  b.forEach((item, index, arr) => {
    if (index % 2 !== 0){
      arr[index] = arr[index].toUpperCase();
    } 
  });

  return [a.join(""), b.join("")];
}

or 

function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};


Example 5:
Task
Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
Notes
Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive
Digit Duplications could occur , So also consider it when forming the Largest
Explanation:

As 97632 is _The Maximum number _ could be formed from the digits of the number 63729 .

maxNumber (566797) ==> return (977665)

Solution: 
// we are basically returning the numbers in desending order.
function maxNumber(n){
  return Number(n.toString().split("").sort((a,b) => b-a).join(''));
}

*/

