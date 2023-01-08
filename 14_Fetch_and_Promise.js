/*
⁡⁢⁣⁢// Fetch Basics

​‌‍‌⁡⁣⁢⁣1: GET​⁡

---> url to be fetched
⁡⁣⁣⁢const url = "https://jsonplaceholder.typicode.com/posts"
⁡
⁡⁢⁣---> ⁢use the .then method to get the response object⁡
⁡⁣⁣⁢fetch(url).then(res => {⁡
  ⁡⁢⁣⁢---> specify the data type i.e .json() or .text()⁡
  ⁡⁣⁣⁢return res.json()⁡
  ⁡⁢⁣---> ⁢another .then call to get actual data⁡
⁡⁣⁣⁢}).then(data => {
  console.log(data[10].body)
})

or

⁡⁢⁣⁢---> the url to work with⁡
const url = "https://jsonplaceholder.typicode.com/posts"
⁡⁢⁣⁢---> function to get data, by using async and await⁡
async function getResponse() {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
⁡⁢⁣⁢---> calling the function⁡
getResponse()⁡




⁡⁣⁢⁣​‌‍‌2: POST
⁡​
Adding content to the server/api using POST method

---> url to be fetched
const url = "https://jsonplaceholder.typicode.com/posts"

use the .then method to get/insert the response object
fetch(url, {
  ---> add method, headers, and body
  method: "POST",
  headers: {'content-type': 'application/json'},
  ---> add the body (your content) using the JSON.stringify()
  ---> we do this because we cant pass direct html text in as a json format.
  body: JSON.stringify({
    "userId": 20,
    "id": 1000,
    "title": "Added by DKING",
    "body": "This is the body of this added json string"
  })
}).then(res => {
  return res.json()
}).then(data => {
  console.log(data)
})


Note::
More explanations in ==> 14b_fetch_and_promise


*/