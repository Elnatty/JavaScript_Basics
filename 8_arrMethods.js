/*
⁡⁣⁣⁢Array Methods ⁡======================================================================
  push() -> adds element into d back of d array.
  pop() -> removes last element from d array. 
  shift() -> removes 1st element from d array.
  unshift() -> add 1st element back to d array or any element into 0 index.
  slice() -> creates a shallow copy/duplicate of an array.

⁡⁣⁣⁢  splice()⁡ -> replace an element in an array.
  example:
    const arr = [1,2,3,'oops',4,5,6]
    // we can use splice to replace an element in an array
    arr.splice(3, 1, 3.5) // where 3 is the index, 1 is the number of item to delete, 3.5 is the value to be inserted or replaced. ---> returns [1,2,3,3.5,4,5,6]

  ⁡⁣⁣⁢findIndex() ⁡-> conduct a powerful search to find an index using callbacks.
    eg; const arr = [{name: "alabi"}, {name: "nathan"}];
        finding an index where name is equal to 'nathan'
        arr_function.findIndex((arrItem) => {
          return arrItem == 'nathan';
        })

⁡⁣⁣⁢  indexOf() ⁡-> index of an element in an array.
  example:
      arr = [1,2,3,4,5,6,7];
      arr.indexOf(4)  -> outputs 5
      arr[arr.indexOf(4)] -> outputs 5

⁡⁣⁣⁢  map() -> ⁡eg:-------------------------------------------------------------------
  const blogPost = [
  {
    title: 'How to use the map() function',
    category: 'un-categorized'
  },
  {
    title: 'What is js?',
    category: 'un-categorized'
  }
];
modifying the value of category to 'Web Development' using map() function.
blogPost.map(arrItem => {
  arrItem.category = 'Web Development';
  return arrItem;
});
  
⁡⁣⁣⁢forEach()⁡ -> another way to loop through an array.-----------------------------------
example: 
arr = [1,2,3,4,5,6,7,8,9,0];
arr.forEach(arrItem => {
  console.log(arrItem);
});
and we can also pick the index of each item
arr = [1,2,3,4,5,6,7,8,9,0];
arr.forEach((arrItem, index) => {
  console.log(`item ${index +1} -> ${arrItem}`);
});

⁡⁣⁣⁢includes()⁡ -> to check if an element exist in an array. -------------------------
example:
const arr = ['blue', 'green', 'yellow', 'red', 'orange'];

// manual or old way to check if orange exists
let orangeExist = false;
arr.map(arrItem => {
  if (arrItem === 'orange'){
    orangeExist = true;
  }
})
console.log(orangeExist);
or
console.log(arr.includes('orange'))
or
console.log(arr.indexOf('orange') !== -1)   // meaning if 'orange' exist it wont equal -1 so it prints true.

⁡⁣⁣⁢filter()⁡ -> filter elements in an array.

⁡⁣⁣⁢reduce()⁡ -> to find sum, average of arrays.
example:
  arr = [10,20,30,40,50]; 
  // sum the arr values
  // 1st write your callback function
  function reducerFunction(sum, arrItem) {
    return sum += arrItem
  }
  // invoke the reduce function
  const result = arr.reduce(reducerFunction, 0)
  console.log(result)
  or
  const x = arr.reduce((sum, arrItem) => sum += arrItem, 0)
  console.log(x)


  example 2:
  arr = [10,20,30,40,50]; 
  // get the average value of the array.
  const x = arr.reduce((sum, arrItem) => sum += arrItem, 0) / arr.length

  
*/