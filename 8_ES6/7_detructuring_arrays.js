/* 
===========================================
Basic Array Destructuring
If we want to extract data from arrays, it's quite simple using the destructuring assignment.

Let's refer to our first example for arrays. Instead of going through that repetitive process, we'd do this:

let introduction = ["Hello", "I" , "am", "Sarah"];
let [greeting, pronoun] = introduction;

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

We can also do this with the same result.

let [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(pronoun);//"I"
Declaring Variables before Assignment
Variables can be declared before being assigned like this:


let greeting, pronoun;
[greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

Notice that the variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second item in the array, and so on.


============================================
Skipping Items in an Array
What if we want to get the first and last item on our array instead of the first and second item, and we want to assign only two variables? This can also be done. Look at the example below:

let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"

What just happened?

Look at the array on the left side of the variable assignment. Notice that instead of having just one comma, we have three. The comma separator is used to skip values in an array. So if you want to skip an item in an array, just use a comma.

Let's do another one. Let's skip the first and third item on the list. How would we do this?

let [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

console.log(pronoun);//"I"
console.log(name);//"Sarah"

So the comma separator does the magic. So if we want to skip all items, we just do this:

let [,,,,] = ["Hello", "I" , "am", "Sarah"];


==============================================
Assigning the rest of an array
What if we want to assign some of the array to variables and the rest of the items in an array to a particular variable? In that case, we would do this:

let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Sarah"]

Using this pattern, you can unpack and assign the remaining part of an array to a variable.

let [x,...z] = ['a','b','c']
console.log(z) // ['b', 'c']


==============================================
Destructuring Assignment with Functions
We can also extract data from an array returned from a function. Let's say we have a function that returns an array like the example below:

function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
} 
let [greeting,pronoun] = getArray();

console.log(greeting);//"Hello"
console.log(pronoun);//"I"
We get the same results.

const x = () => {
  return [1,2,3,4,5]
}
let [xx,,...yy] = x()

console.log(xx,yy);


================================================
Using Default Values
Default values can be assigned to the variables just in case the value extracted from the array is undefined:

let [greeting = "hi",name = "Sarah"] = ["hello"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"
So name falls back to "Sarah" because it is not defined in the array.

let [a=10,b=20,c=30] = ['x','y']
console.log(a,b,c)


==================================================
Swapping Values using the Destructuring Assignment
One more thing. We can use the destructuring assignment to swap the values of variables:

let a = 3;
let b = 6;

[a,b] = [b,a];

console.log(a);//6
console.log(b);//3

*/

