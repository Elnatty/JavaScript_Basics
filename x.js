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


console.log( findLongestWordLength("May the force be with you") )