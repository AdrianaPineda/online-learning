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

const Search = () => (
  <form action="" className="Search">
    <input type="text" placeholder="Look for your favorite videos" className="Search-input"/>
  </form>
)

export default Search;

