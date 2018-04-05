# react-course
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
https://reactjs.org/tutorial/tutorial.html

Your components tell React what you want to render – then React will efficiently update and render just the right components when your data changes.

A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.

The render method returns a description of what you want to render, and then React takes that description and renders it to the screen. In particular, render returns a React element, which is a lightweight description of what to render. Most React developers use a special syntax called JSX which makes it easier to write these structures. The <div /> syntax is transformed at build time to React.createElement('div')

You can put any JavaScript expression within braces inside JSX. Each React element is a real JavaScript object that you can store in a variable or pass around your program.

Whenever this.setState is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants.

*Important*
When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.

You might think that Board should just inquire what the current state of each Square is. Although it is technically possible to do this in React, it is discouraged because it tends to make code difficult to understand, more brittle, and harder to refactor.

`class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}> // onClick={this.props.onClick} also works
        {this.props.value}
      </button>
    );
  }
}`

Board:
`renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
 }`
 
 It is conventional in React apps to use on* names for the attributes and handle* for the handler methods.

## Immutability
- Easier Undo/Redo and Time Travel: Immutability also makes some complex features much easier to implement. Avoiding data mutations lets us keep a reference to older versions of the data, and switch between them if we need to.
- Tracking Changes: Determining if a mutated object has changed is complex because changes are made directly to the object. This then requires comparing the current object to a previous copy, traversing the entire object tree, and comparing each variable and value. This process can become increasingly complex.
Determining how an immutable object has changed is considerably easier. If the object being referenced is different from before, then the object has changed. That’s it.
- Determining When to Re-render in React: The biggest benefit of immutability in React comes when you build simple pure components. Since immutable data can more easily determine if changes have been made, it also helps to determine when a component requires being re-rendered.
To learn more about shouldComponentUpdate() and how you can build pure components take a look at Optimizing Performance(https://reactjs.org/docs/optimizing-performance.html#examples)

## Functional Components
Useful for components that only consist of a render method
`function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}`
