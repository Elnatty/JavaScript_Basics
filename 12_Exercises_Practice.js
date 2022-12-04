/* ⁡⁣⁣⁢Exercises:⁡

⁡⁣⁣⁢1:⁡
multiply = function (a, b) {
  return a * b;
}
or
multiply = (a, b) => a * b;

⁡⁣⁣⁢2:⁡ --> ⁡⁣⁣⁢to solve this, we added the break statement;⁡
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'; break;
    case 2:
      name = 'Venus'; break;
    case 3:
      name = 'Earth'; break;
    case 4:
      name = 'Mars'; break;
    case 5:
      name = 'Jupiter'; break;
    case 6:
      name = 'Saturn'; break;
    case 7:
      name = 'Uranus'; break;
    case 8:
      name = 'Neptune'; break;
  }
  
  return name;
}

⁡⁣⁣⁢3:⁡ ⁡⁣⁣⁢reversing a string.⁡
function solution(str){
  return str.split('').reverse().join('');  
}
or
const solution = str => str.split('').reverse().join('');

⁡⁣⁣⁢4:⁡ ⁡⁣⁣⁢even or odd.⁡
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even": "Odd"
}
or
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

⁡⁣⁣⁢5:⁡ ⁡⁣⁣⁢Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).⁡

function countSheep(arrayOfSheep) {
  let num = 0;
  for (let i=0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true){
      num = num + 1;
    }
  }
  return num;
}
or
function countSheep(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

⁡⁣⁣⁢6: Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.⁡

function getCount(str) {
  let vowel = 0;
  const arr = str.split("") // convert string to an array 1st
  // then loop through the array
  for (let i=0; i < arr.length; i++) {
    switch (arr[i]) {
        case 'a':
          vowel++
          break;
        case 'e':
          vowel++
          break;
        case 'i':
          vowel++
          break;
        case 'o':
          vowel++
          break;
        case 'u':
          vowel++
          break
    }
  }
  return vowel
}


⁡⁣⁣⁢7: Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
Can you help her?⁡

function greet(name){
  if(name === "Johnny") return "Hello, my love!";
  else return "Hello, " + name + "!";
}
or
function greet(name){
  return name === "Johnny" ? "Hello, my love!": "Hello, " + name + "!"
}


⁡⁣⁣⁢8: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.⁡

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true: false
}

⁡⁣⁣⁢9: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?⁡
function makeNegative(num) {
  return num < 0 ? num : -num;
}
or
function makeNegative(num) {
  return -Math.abs(num);
}


⁡⁣⁣⁢10: Given an array of integers your solution should find the smallest integer.⁡

findSmallestInt(args) {
  let x = [34, -345, -500, -1000]
  let y = x[i]
  // compare the looped values with the first item in the array.
  for (let i=0; i<x.length; i++) {
    if (x[i] < y) {
      y = x[i]
    }
  }
  return y
}
or
findSmallestInt(args) {
  return Math.min(...args);
}


⁡⁣⁣⁢11: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.⁡

function getAverage(marks){
  let sum = 0
  for (let i=0; i < marks.length; i++) {
    sum += marks[i]
  }
  return Math.floor(sum / marks.length)
}
or
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


⁡⁣⁣⁢12: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.⁡

function removeChar(str){
 //You got this!
  return str.substr(1, str.length - 2)
};
or
function removeChar(str) {
  return str.slice(1, -1);
}
or
const removeChar = str => str.slice(1,-1)


13: You get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr) {
  let sumV = 0
  for  (let i=0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumV += arr[i]
    }
  }
  return sumV
}



⁡⁣⁣⁢13: Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.⁡

function basicOp(o, a, b) {
  return eval(a+o+b);
}
or
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}



⁡⁣⁣⁢14: Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.⁡

function repeatStr (n, s) {
  return s.repeat(n);
}

⁡⁣⁣⁢15: Write a function to split a string and convert it into an array of words.⁡
function stringToArray(string){
  return string.split(' ');
}

⁡⁣⁣⁢16: Simple, remove the spaces from the string, then return the resultant string.⁡
function noSpace(x){
  return x.replace(/\s/g, '');
}
or
function noSpace(x){
  return x.split(" ").join('');
}


⁡⁣⁣⁢17: Given an array of integers, return a new array with each value doubled.
⁡function maps(x){
  const result = x.map((arrVal, arrInd) => {return arrVal * 2})
  return result
}
or
function maps(x){
  return x.map(n => n * 2);
}


⁡⁣⁣⁢18: A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return True if yes, False otherwise :)⁡

function hero(bullets, dragons){
  return bullets/dragons >= 2 ? true: false
}


⁡⁣⁣⁢19: I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.⁡

function arrayPlusArray(arr1, arr2) {
  let z = [];
  let sum = 0;
  for (let i=0; i < arr1.length; i++){
    for (let j=0; j < arr2.length; j++){
      z[i] = arr1[i] + arr2[i];
    }
    sum = sum + z[i];
  }
  return sum;
}


⁡⁣⁣⁢20: The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.⁡

function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}


⁡⁣⁣⁢21: I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears]⁡
var humanYearsCatYearsDogYears = function(y) {
  // Your code here!
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}


⁡⁣⁣⁢22: Our football team has finished the championship. Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.⁡
⁡⁣⁣⁢For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4⁡


function points(games) {
  let totalPoints = 0
  for (let i=0; i<games.length; i++) {
    const value = games[i].split(":")
    const x = value[0]
    const y = value[1]
    if (x > y) totalPoints += 3
    if (x === y) totalPoints += 1
  }
  return totalPoints
}



⁡⁣⁣⁢23: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.⁡

⁡⁢⁣⁢Solution:⁡
convert to string, then array with split(), then map to convert string in array to numbers, then sort array, and wrap all with Number function

function descendingOrder(n){
  return Number(n.toString().split("").map(arrN => +arrN).sort((a,b) => b - a).join(""))
}












*/

