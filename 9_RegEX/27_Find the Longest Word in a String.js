/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
  const strArr = str.split(' ')
  let result = strArr[0]
  
  for (let i=1; i<strArr.length; i++) {
    if ((strArr[i].length > result.length) || (strArr[i].length === result.length)) {
      result = strArr[i]
    }
  }

  return result.length;
}

console.log( findLongestWordLength("The quick brown fox jumped over the lazy dog") )