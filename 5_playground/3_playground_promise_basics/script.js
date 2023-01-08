// declaring the promise object
const promise1 = fetch("data.json")

// calling the .then method
promise1.then(response => {
  // initializing the particular data type ie, json, txt, etc.
  const promise2 = response.json()
  promise2.then(data => {
    // console.log(data)
    return data   // returning the actual value
  })
  return promise2   // returning the entire promise2 callback function......... {optional}
}).then(finalD => {
  console.log("final data is:", finalD)
})