# Chapter 1: What is React?

## Developer Tools
- React Developer Tools
- react-detector

## Efficient rendering with React
DOM (Document Object Model): is the structure of HTML elements that make up a
webpage. The DOM api refers to how these page elements are accessed and changed.

React made updating the DOM faster by using DOM Diffing.
DOM Diffing:
- Happens when you compare the currently rendered content with the new UI
changes that are about to be made
- React optimizes this by making only the minimal changes necessary
- With DOM Diffing javascript objects are compared
- Is faster than writing or reading from the DOM


DOM <-> Javascript logic
The Javascript logic is interacting with the DOM to make updates.
Whenever we use functions like `getElementById` we are reading from the DOM.
When we change any of those elements, change classes, content, you are writing
to the DOM.
Writing to and reading to the DOM is slow, working with javascript objects is
faster.

DOM <-> Backbone views
We also deal with a slower DOM with other frameworks and libraries like Backbone.
The way that we typically program with Backbone is that we re-render the same
data over and over again, even when the changes haven't happen everywhere. This
re-rendering slows down our apps a lot.

DOM <-- React DOM <-> Javascript logic
With React, only the minimal changes will be rendered, so this is really efficient.
If we want to change an item from a bullet list, we don't get rid from the
existing list, we will just make the *one* required change.
We *never read* from the DOM and we only write to it when a change is required.

# Chapter 2
## Pure React
httpster -> to start a server to load the files easily
`npm install -g httpster`
`httpster -d ./dist -p 3000` // -d for directory; -p for port
