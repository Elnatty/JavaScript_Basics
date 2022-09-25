// identifiers, quantifiers.
/*
  Identifiers=======================================================================
  The Identifiers are special characters, characters or phrases you are trying to match.
  Example of RegExp:
        // defining a regex value to find, i.e. "g"
        const regex = new RegExp("g");
        const phrase1 = "i am natty";
        const phrase2 = "goatted";
        // using the test method of RegExp to check for identifier in phrase1 and 2
        console.log(regex.test(phrase2))  // -> outputs true

  Example 2:
        const phrase1 = "i am natty";
        // another way of writing a RegExp
        console.log(/natty/.test(phrase1));

  Example 3:
        const phrase1 = "i am natty";
        // testing for uppercase letters
        console.log(/[A-Z]/.test(phrase1));   // -> outputs false
        // testing for lowercase letters
        console.log(/[a-z]/.test(phrase1));   // -> outputs true
        // matching all upercase, lowercase, numbers and spaces
        console.log(/[A-Za-z0-9 /.test(phrase1))   // -> returns true

  some RegExp characters and their meaning.
  .   --> matches all characters
  \d  --> matches all numbers i.e [0-9]
  \s  --> matches all whitespace characters
  \w  --> matches all alphanumeric
  ^   --> begining of a string
  $   --> ending of a string
  (|) --> represents or i.e console.log(/(hanny | natty/.test(phrase1));  -> true

  Quantifiers=======================================================================
  

*/

const phrase1 = "i am natty";
// testing for uppercase letters
console.log(/[A-Z]/.test(phrase1));   // -> outputs false
// testing for lowercase letters
console.log(/[a-zA-z]/.test(phrase1));   // -> outputs true