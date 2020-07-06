import React from 'react';
import './search.css'

// function Search(props) {
//   return(
//     <form action=""></form>
//   )
// }

// Another option:
// const Search = () => {
//   return(
//     // ...
//   )
// }

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Look for your favorite videos"
      className="Search-input"
      // defaultValue="Luis Fonsi"
      value={props.value}
      onChange={props.handleChange}
    />
  </form>
)

export default Search;

// Option to set a default value and get input content:
// 1) ref && defaultValue. Just value won't let me edit the input
// 2) value && onChange

// We set `value` as well to keep the value of the search in a single part, in this case the owner of search keeps the
// state with the search value > the input is now controlled

// If a warning: "A component is changing an uncontrolled input of type text to be controlled"
// > make sure the initial value is properly set (in this case: props.value)

