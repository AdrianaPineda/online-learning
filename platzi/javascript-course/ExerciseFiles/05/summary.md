The browser is an object and the document it displays is an object too

The browser has a long list of objects including the browser window, the document
inside the window, the navigation buttons, location or url > this objects are
modeled by the BOM.

BOM: Browser object model

`window.innerWidth`
Window is top level object in the BOM.

`window.document` or `document`
DOM: document object model. Model of the current document that currently forms
the web page. DOM node: `<head/>`, `<nav/>`, `<a/>`.
The node tree models the relationship between the different nodes

## DOM model
DOM properties: `document.body`, `document.title`, `document.URL`, etc...

DOM methods: `document.getElementById("someId")`,
`document.getElementsByClassName("className")` > (array),
`document.getElementsByTagName("HTML tag")` > (array),
`document.querySelector(".main-nav a")` > first selector matching specified selector(s),
`document.querySelectorAll(".post-content p")` > all elements matching specified selector(s),

In `querySelector` (css selector)
"." > for class
"#" > for an id

### DOM Element properties
https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties

`document.querySelector(".main-title").innerHTML` > gets the property
We can also replace the property

For ids, we can change the ids
For classes we have the `className` (readwrite) and `classList` (readonly)
For readonly properties, we can use methods to change their values

### Creating DOM elements
1. Create element
`.createElement();`
2. Create the text node that goes inside the element
`.createTextNode();`
3. Add the text node to the element
`.appendChild();`
4. Add the element to the DOM tree
`.appendChild();`

^safer to avoid deleting or breaking the HTML

Example: in moonwalk.html (05_06)

### CSS
Inline CSS
Style only gives us the inline styles
`document.querySelector(".cta a").style`
`document.querySelector(".cta a").style.backgroundColor = "blue"`
When the style has a hyphen('-'), change it to camel case

To change the whole style:
`document.querySelector(".cta a").style.cssText = "padding: 1em, color:white, background-color:red;"`
`document.querySelector(".cta a").setAttribute("style", "padding: 2em, color:green, background-color:orange;");`

Caution >
Inline CSS overrides whatever CSS is applied to an element
In most cases, is better to create a custom CSS rule, targeting class selector
