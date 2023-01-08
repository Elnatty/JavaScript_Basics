/*
es6 --> ecma script standard 2015.

⁡⁣⁣⁢1: Joining 2 arrays together using destructuring (...)⁡
const arr1 = [1,2,3]
const arr2 = [4,5,6]
// to merge/join both arrays together
const arr3 = [...arr1, ...arr2]
console.log(arr3)


⁡⁣⁣⁢2: Joining 2 objects or more together⁡
const obj1 = {
    key: "value",
    name: "Natty"
}
const obj2 = {
    age: 22,
    'gender': "male"
}
// to merge/join both objects/dictionary together
const obj3 = {...obj1, ...obj2}
console.log(obj3)


⁡⁣⁣⁢3: Arrow Functions⁡
const x = () => {   // without arguments
  console.log("This is a function")
}
or
const x = arg => {   // with 1 argument
  console.log(arg ** 2)
}
or
const x = (arg1, arg2) => {   // with 2 arguments
  console.log(arg1 + arg2)
}



⁡⁣⁣⁢4: Array functions in es6⁡
--> filter
--> map

--> find
const names = [
  {
    name: "Emma",
    age: 28
  },
  {
    name: "Daniel",
    age: 24
  }
]
// find the name daniel with the .find method
console.log(names.find(x => x.name === 'Daniel'))



⁡⁣⁣⁢4: Template Literals
Note: fix errors while installing npm modules:
npm config set strict-ssl=false⁡
const name = "Victor"
console.log(`My name is ${name}`)


5: Promise and Fetch
A Promise: is an object in javascript which promises to resolve to a value sometimes in the future.




*/


if (true) {
  if (true) {
    if (true) {

    }
  }
}