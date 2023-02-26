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
        // matching all uppercase, lowercase, numbers and spaces
        console.log(/[A-Za-z0-9 /.test(phrase1))   // -> returns true
⁡⁣⁣⁢
  some RegExp characters and their meaning.⁡
  .   --> matches all characters
  *   --> matches a character 0 or more times eg / [\w]* /.exec
  +   --> matches all characters 1 or more times eg / [\w]+ /.exec
  ?   --> matches zero or one occurrence of a character.
  []  --> a character group
  [A-Za-z] -> all UpperCase letters, and LowerCase letters
  \d  --> matches all numbers i.e [0-9]
  \s  --> matches all whitespace characters
  \w  --> matches all alphanumeric
  ^   --> beginning of a string
  $   --> ending of a string
  (|) --> represents or i.e console.log(/(hanny | natty/.test(phrase1));
  ()  --> group matching eg: (code | line) to match 'code or 'line
  \b  --> boundary of a word/sentence (start and end of a word) eg: /bcat/b -> matches "cat".
  /[]{}/.exec() --> matches a specific amount of characters eg: 1st 5 characters ie, /[a-z]{5}/.exec() or a range of characters eg: /[]{2,6}/.exec() from 2-6 index.
  //
  


  Quantifiers=======================================================================
⁡⁣⁣⁢  Example 1:⁡
  const str = "Hello World, 2022 @ more of a String"; 
  // match all characters.
  console.log(/.+/.exec(str));
  or
  console.log(/[\w,@ ]+/.exec(str))











*/

