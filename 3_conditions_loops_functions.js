/* 
if-else statements-----------------------------------------------------------------
      if ("Nathan" === "Nathan"){
        console.log('equal strings..');
      }
      else{
        console.log("not equal strings..");
      }

Switch Statements-----------------------------------------------------------------

Loops-----------------------------------------------------------------------------




*/


// if, else if, else example-------------------------------------------------------
// const x = "Money";
// const y = x.length;

// if (y > 10){
//   console.log("\nChecks out..");
// }
// else if (x == "Money"){
//   console.log("\nThis is Money.");
// }
// else{
//   console.log("dosent checks out.");
// }


// Switch examples................................................................
// let my_Array = ["red", "blue", "green"]

// switch (my_Array[2]){
//   case "red":
//     console.log("This is Red");
//     break;
//   case "blue":
//     console.log("This is Blue");
//     break;
//   default:
//     console.log("Totally Random.");
//     break;
// }


// for loop example..............................................................
// for (let i=0; i < 100; i++){
//   console.log(i); 
// }


// ==============================================================================
// iterating list array and printing numbers only
// const x = ["one", "two", "three", "four", 20, 30, 40, 50];

// for (let i=0; i < x.length; i++){
//   if (typeof x[i] === "number"){
//     console.log(x[i]);
//   }
// }


// iterating list array and printing strings only
// const x = ["one", "two", "three", "four", 20, 30, 40, 50];

// for (let i=0; i < x.length; i++){
//   if (typeof x[i] === "string"){
//     console.log(x[i]);
//   }
// }
// ==============================================================================



// Function Example..............................................................
// to invoke the function immediately.
// (function my_func(){
//   console.log("My First Function");
// }())


// the arrow function--------------------------------------------------------------
// const arrowFunct = () => {
//   console.log("arrow function");
// }
// arrowFunct();


// reversing a string in JavaScript.-----------------------------------------------
// let x = "Nathan";
// // convert to list with split() method
// y = x.split("");
// // apply the list inbuilt (reverse() function) on the new list, then join("") to convert back to string.
// z = y.reverse().join("");

// console.log(z);