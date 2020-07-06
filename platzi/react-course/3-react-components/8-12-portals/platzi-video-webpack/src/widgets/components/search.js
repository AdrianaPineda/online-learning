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
// 1) defaultValue. Just value won't let me edit the input
// 2) value && onChange

