/*
⁡⁣⁣⁢Example 1..........................................................
const str1 = "My Dog jumped on the bed. My dog is a bad Dog";
// using the replaceAll method with regExp.
// g represents search globally
console.log(str1.replaceAll(/[Dd]{1}og/g, "cat"));


⁡⁣⁣⁢Example 2..........................................................⁡
const x = "<i> Should be italics </i>"; 
// replacing i with h1 tag.
console.log(x.replaceAll(/[i]>/g, "h1>"));


⁡⁣⁣⁢Example 3..........................................................⁡
// capitalizing a string
const str = "some string"
console.log(str[0].toUpperCase() + str.substring(1)


⁡⁣⁣⁢Example 4:..........................................................
⁡⁢⁣⁣const exData = [
  {
    title: "How to code",
    author: "Dking"
  },
  {
    title: "What is Vim",
    author: "Hannah"
  },
  {
    title: "How does loops work in JavaScript",
    author: "Nathan"
  }
]

// using callback function to give a nice formatting view
exData.forEach((arrItem, arrIndex) => {
  console.log(`${arrIndex+1}: ${arrItem.title} by ${arrItem.author}`)
})⁡⁡


⁡⁣⁣⁢Example 5:..........................................................⁡

// using the string.match method.

const x = "siwjoidiej13424ejovwd" 
const rex = /[a-z]+/ 

console.log(x.match(rex))






*/