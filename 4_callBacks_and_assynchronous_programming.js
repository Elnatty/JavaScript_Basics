/*
==========================================================================
============================== CallBacks =================================
CallBacks in javascript enables code function reusability.
example 1:
        const myArray = [2,3,4,5,6];
        // a callback function.
        function myOperation(item){
          return item * 2;
        }
        // to call the function..
        const newArray = myArray.map(myOperation);
        // console.log(newArray) -> Outputs [4,6,8,10,12]

example 2:
        const strArray = ["Hello", "my", "name", "is", "king"];
        // using arrow function to execute callback..
        console.log(strArray.map(index_ => index_[0])) -> Outputs ['H', 'm', 'n', 'i', 'D']

example 3:
        let x = [10,20,30,40,50]

        let y = x.forEach((numArr, indArr) => console.log(`${indArr+1}: ${numArr}`))

==========================================================================
======================= Asynchronous Programming ========================
Asynchronous Programming: code that does not run immediately.


*/

