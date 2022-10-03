/*
⁡⁣⁣⁢DOM Documentation Definition:⁡
The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.
The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

How to locate official DOM documentation, goto:
MDM web docs -> References -> Web Apis -> DOM -> Document.


⁡⁣⁣⁢How to Use the DOM Elements API to write html code with javascript..............⁡

Step 1: Create a DOM Element, Attribute and TextNode:
The DOM Elements API uses the following format to create HTML tags/elements, attributes and textNodes with JavaScript.
--> const elementNode = document.createElement('div'); // to create a div tag/element.
--> const attributeNode = document.createAttribute('class' or 'id');  // to create attributes for the div elements/tags.
--> const textNode = document.createTextNode('Content'); // to create a text node.

Step 2: put the textNode into the element/tag:
--> elementNode.appendChild(textNode); // put the textNode into the element/tag:

Step 3: Assign the attributeNode a value:
--> attributeNode.value = "some-class"; // assign the attributeNode a value.

Step 4: Connect the attributeNode to the element/tag:
--> elementNode.setAttributeNode(attributeNode); // connect the attributeNode to the element/tag.

or 

you can skip step 3 by:
elementNode.setAttribute(attributeNode, "some-class"); // set the attributeNode to the element/tag directly.

or

elementNode.setAttribute('class', 'some-class'); // set the attributeNode to the element/ tag directly..

Step 5: Display everything on the screen:
document.body.appendChild(elementNode); // display everything on the screen.
==================================================================================================================================================================
<button id="btn-1" class="my-btn"> Click Me </button>
using 👆👆 as case study.
Document methods:
1: The document.querySelector()
to search for elements: 
# -> represents the id     // document.querySelector('#btn-1'); returns the id.
. -> represents the class // document.querySelector('.my-btn') returns the class.

2: The document.getElementById()
another way to search for elements:
document.getElementById("my-btn") // returns the whole button string.
NOTE: best way to identify the element!




⁡⁣⁣⁢Example 1: Make a button on the screen perform an action of displaying a paragraph after every click.⁡

Using this button as case study:
<button id="btn-1" class="my-btn"> Click Me </button>


SOLUTION:
Step 1: use the DOM element to identify the button:
document.querySelector('button');

Step 2: Create a JS function that will print random numbers when the button is clicked.
cont btn = document.querySelector('#btn-1'); // identifies the button.

function addParagraph(){
	// creating a random number btw 0 and 100.
	const ranNum = Math.floor(Math.random() * 100);
	const pContent = 'The random number is: ' + ranNum;
	// creating a <p></p> element/tag
	const newElement = document.createElement("p");
	// applying the generated random number into d tag.
	newElement.textContent = pContent;
	// displaying on the screen.
	document.body.appendChild(newElement);
}

// event listener for when button is clicked.
btn.onclick = addParagraph;


---> Ways to add an event listener to the button when the button is clicked.
1: btn.addEventListener('click', addParagraph); or
2: btn.onclick = addParagraph;
3: add it on the html code block: 
    <button id="btn-1" class="my-btn", onclick="addParagraph()"> Click Me </button>
NOTE: we commonly use the .onclick event.





=================================================================================
⁡⁣⁣⁢How to Navigate an HTML DOM Element.⁡
Example: Using this html as case study: 👇👇👇

<div class="main-body">
	<h1>Article Heading</h1>
	<p>Some text in the article</p>
	<p>Some more text</p>
	<ul>
		<li>List item 1</li>
		<li>List item 2</li>
		<li>List item 3</li>
	</ul>
</div>
<div>
	<p>Site created by Nathan</p>
</div>


--------------------------------------------------------------------------------
navigating the list item.
const list = document.querySelector('ul');
const newItem = list.children[0]  // outputs the list item using indexing format.
or
const newItem = list.children.item(0) // outputs the list item using indexing format



// modifying the textContent item with the document.textContent.
newItem.textContent = "New list item";



// getting the nodeType of the element/tag using the .nodeType
newItem.nodeType   // outputs the nodeType.
if:
1 --> means element/tag.
2 --> means Attribute of an element/tag.
3 --> means actual text inside the element/tag. etc.





=================================================================================================
⁡⁣⁣⁢‍How to insert new elements into any location within the html document:⁡
To do this, we use the .insertBefore method

Step 1:-------------------------------------------------------------------------
identify the parent element that house the position where the new element is to be inserted.

const parent = document.querySelector('ul');

Step 2:
Identify the element that is located after the position you want to insert the new element.

const pElem = parent.children[1];	// item is going to be placed before this element/tag.

step 3:
Create the new element.

const newElement = document.createElement('li');

Step 4:
use the .insertBefore method to insert the new element.

parent.insertBefore(newElement, pElem); // takes 2 arguments.





=============================================================================================
⁡⁣⁣⁢How to remove existing elements from the Html Document using .innerHTML method.⁡

// using this as case study.
const container = document.querySelector('.content');
// if .content exists, then remove it.
if (container){
	container.innerHTML = '';
} else {
	container.appendChild(newElement);
}

or

you can write a clear function.

function clear() {
	const container = document.querySelector('.content');
	// clear the container
	container.innerHTML = '';
}





*/
