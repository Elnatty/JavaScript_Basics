/* Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code: */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
// The console will display the strings Hello John and Hello Anonymous.