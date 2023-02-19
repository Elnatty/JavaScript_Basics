/*
===============================
Object Destructuring
First, let's see why there is a need for object destructuring.

Say we want to extract data from an object and assign to new variables. Prior to ES6, how would this be done?

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let name = person.name;
let country = person.country;
let job = person.job;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
See how tedious it is to extract all the data. We have to repeatedly do the same thing. ES6 destructuring really saves the day. Let's jump right into it.


=====================================
Basic Object Destructuring
Let's repeat the above example with ES6. Instead of assigning values one by one, we can use the object on the left to extract the data:

    
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name, country, job} = person;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"


You'll get the same results. It is also valid to assign variables to an object that haven't been declared:

let {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"



=============================================
Variables declared before being assigned
Variables in objects can be declared before being assigned with destructuring. Let's try that:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
let name, country, job;

{name, country, job} = person;

console.log(name);// Error : "Unexpected token ="

Wait, what just happened?! Oh, we forgot to add () before the curly brackets.

The ( ) around the assignment statement is required syntax when using the object literal destructuring assignment without a declaration. This is because the {} on the left hand side is considered a block and not an object literal. So here's how to do this the right way:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name, country, job;

({name, country, job} = person);

console.log(name);//"Sarah"
console.log(job);//"Developer"


It is also important to note that when using this syntax, the () should be preceded by a semicolon. Otherwise it might be used to execute a function from the previous line.

Note that the variables in the object on the left hand side should have the same name as a property key in the object person. If the names are different, we'll get undefined:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name, friends, job} = person;

console.log(name);//"Sarah"
console.log(friends);//undefined
But if we want to use a new variable name, well, we can.


=======================================
Using a new Variable Name
If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name: foo, job: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Developer"
So the values extracted are passed to the new variables foo and bar.



⁡⁣⁣⁢in summary, we have 2 ways to construct a destructor ie:⁡

let person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
({name: n, job: j} = person)
let {name: nn, job: jj} = person

console.log(n, j);
console.log(nn, jj);



===========================================
Using Default Values
Default values can also be used in object destructuring, just in case a variable is undefined in an object it wants to extract data from:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name = "myName", friend = "Annie"} = person;

console.log(name);//"Sarah"
console.log(friend);//"Annie"

So if the value is not undefined, the variable stores the value extracted from the object as in the case of name. Otherwise, it used the default value as it did for friend.


We can also set default values when we assign values to a new variable:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let {name:foo = "myName", friend: bar = "Annie"} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Annie"

So  name was extracted from person and assigned to a different variable. friend, on the other hand, was undefined in person, so the new variable bar  was assigned the default value.



=============================================
Computed Property Name
Computed property name is another object literal feature that also works for destructuring. You can specify the name of a property via an expression if you put it in square brackets:

let prop = "name";

let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(foo);//"Sarah"


===========================================
Combining Arrays with Objects
Arrays can also be used with objects in object destructuring:

let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

let {name:foo, friends: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"]



=============================================
Nesting in Object Destructuring
Objects can also be nested when destructuring:

let person = {
  name: "Sarah",
  place: {
      country: "Nigeria", 
      city: "Lagos" }, 
  friends : ["Annie", "Becky"]
};

let {name:foo,
    place: {country : bar, city : x},
    friends:f} = person;

console.log(`${foo} lives in ${x}, ${bar}.`) // Sarah lives in Lagos, Nigeria.



=============================================
Rest in Object Destructuring
The rest syntax can also be used to pick up property keys that are not already picked up by the destructuring pattern. Those keys and their values are copied into a new object:

let person = {name: "Sarah", country: "Nigeria", job: "Developer" friends: ["Annie", "Becky"]};

let {name, friends, ...others} = person;

console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"}


Here, the remaining properties whose keys where not part of the variable names listed were assigned to the variable others. The rest syntax here is ...others. others can be renamed to whatever variable you want.

One last thing – let's see how Object Destructing can be used in functions.



==================================================
Object Destructuring and Functions
Object Destructuring can be used to assign parameters to functions:

function person({name: x, job: y} = {}) {
    console.log(x);
}

person({name: "Michelle"});//"Michelle"
person();//undefined
person(friend);//Error : friend is not defined

Notice the {} on the right hand side of the parameters object. It makes it possible for us to call the function without passing any arguments. That is why we got undefined. If we remove it, we'll get an error message.

We can also assign default values to the parameters:

function person({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}

person({name});//"Sarah"
We can do a whole lot of things with Array and Object Destructuring as we have seen in the examples above.


*/




















/*
Use Destructuring Assignment to Extract Values from Objects
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

example:

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES
console.log(today) // 77

Only change code above this line

*/
