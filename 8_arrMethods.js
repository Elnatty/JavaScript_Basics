/*
Array Methods ======================================================================
  push() -> adds element into d back of d array.
  pop() -> removes last element from d array. 
  shift() -> removes 1st element from d array.
  unshift() -> add 1st element back to d array or any element into 0 index.
  slice() -> creates a shallow copy/duplicate of an array.
  splice() -> replace an element in an array.
  findIndex() -> conduct a powerful search to find an index using callbacks.
    eg; const arr = [{name: "alabi"}, {name: "nathan"}];
        finding an index where name is equal to 'nathan'
        arr_function.findIndex((arrItem) => {
          return arrItem == 'nathan';
        })

  indexOf() -> index of an element in an array.

  map() -> eg:-------------------------------------------------------------------
  const blogPost = [
  {
    title: 'How to use the map() function',
    category: 'uncategorized'
  },
  {
    title: 'What is js?',
    category: 'uncategorized'
  }
];
modifying the value of category to 'Web Development' using map() function.
blogPost.map(arrItem => {
  arrItem.category = 'Web Development';
  return arrItem;
});
  
forEach() -> another to loop through an array.-----------------------------------
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

includes() -> to check if an element exist in an array. -------------------------
example:
const arr = ['blue', 'green', 'yellow', 'red', 'orange'];
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

filer() -> filter elements in an array.

reduce() -> to find sum, average of arrays.
*/

