// getting all necessary tags
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const counterEl = document.querySelector("span")
const ulElement = document.getElementById('list-item')
// initializing a counter object
let counter = 0

// function for increment counter
incrementBtn.onclick = incrementCounter   // event listener
function incrementCounter() {     // function
  counter++
  counterEl.innerText = counter
  // add new element with JS
  const li = document.createElement("li") // create new li tag under the ul tag
  // li.innerHtml = '<b>sentence</b> '+ counter or // this doesn't work.. i don't know y
  const textNode = document.createTextNode("Sentence " + counter) // create textNode
  const em = document.createElement("em")   // create an em or italics tag
  em.appendChild(textNode)      // append textNode to the em tag
  li.appendChild(em)            // append em tag to the li tag
  // append to ulElement
  ulElement.appendChild(li)
}


// function for decrement counter
decrementBtn.onclick = decrementCounter
function decrementCounter() {
  counter--
  counterEl.innerText = counter
}
